// Made for the 2019 Lustig Hackathon
/* ======================================================================================================================
	This is a web service (action) for the Google Assistant whose objective is to provide medical advice to a patient
 of a specific healthcare provider (the source of patient info), based on their specific symptoms (that's what Google
 Assistant sends us, e.g. "headache", "cold", etc.) and a decision-tree/predictive model made by BigML.com, based on the
 data the healthcare provider has on all of its clients. It was made to be hosted on Azure - both this app service and the
 MySQL database it communicates with (where the patients' data would be stored).
========================================================================================================================= */

const express = require('express');			// Express.js
const bodyParser = require('body-parser');		// For parsing the JSON object we get from the DB
const {dialogflow} = require('actions-on-google');	// For the assitant's intent
const port = process.env.PORT || 4567;			
const app = dialogflow();				
const mysql = require('mysql');				// For connecting to the DB

/* ------------------------------------------ 1 - Connecting to the DB ------------------------------------------------- */
// Connection configuration for the DB
var config =
{
	host: '<your_host_name>.mysql.database.azure.com',
	user: '<your_username>@<your_server_name>',
	password: '<your_password>',
	database: '<your_DB>,
	port: 3306,
	ssl: true
};
const conn = new mysql.createConnection(config);

// Initialization of the patient (object with all of the patient's relevant info, to be used in the predictive model
// below) and name (a simple string to be returned to the Google Assistant action)
var patient = null;
var name = "No name";

conn.connect
(
	function (err)
	{
		if (err)
		{
			console.log("!!! Cannot connect !!! Error: ");
			throw err;
		}
		else
		{
			console.log("Connection established.");
			queryDatabase();
		}
	}
);
/* ---------------------------------------------------------------------------------------------------------------------- */

/* --------------- 2 - Querying for a specific patient and parsing their info into variable 'patient' ------------------- */
function queryDatabase()
{
	// Ideally, at this point, we would have the patient's email from their Google account (the one they used to 
	// communicate with Google Assistant) but we did not have time to implement authentication in the assistant's
	// action, so for now, we assume we're referring to this specific sample patient: Hope Lindley (see her details
	// on file OriginalHopeDetails.csv)
	conn.query("SELECT pname,page,pgender,pbloodtype,pbloodrhfactor,pweight,pbmi,psmokes,pdiabetestype,pcognitiveimparment,pheartdisease,prespiratorydisease,pmentalillness,phasepilepsy,phashypertension,phasosteoporosis,phashighbloodpressure,plastseizure,plastheartevent,plaststroke,plasthospitalization,pallergies,pcurrentprescriptions FROM patient WHERE pemail = 'h.lindely@minidiq.es';",
	function (err, results, fields) {
		if(err) throw err;
		else console.log('Selected ' + results.lenght + ' row(s).');
		obj = JSON.parse(JSON.stringify(results[0]));
		console.log('Name: ' + obj.pname)
		console.log('Whole response: ' + JSON.stringify(results[0]));
		name = obj.pname;
	        var fullName = name.split(" ");
        	name = fullName[0];
		patient = obj;
		console.log('Done');
	})
	conn.end(
		function (err) {
			if (err) throw err;
			else console.log('Closing connection.');console.log(`Name: ${name}`);
	});
}
/* ---------------------------------------------------------------------------------------------------------------------- */

/* ------------------------------ 3 - Declaring the decision-making function from BigML --------------------------------- */
/**
*  Predictor for BESTSOLUTION from model/5ce7d078db8b1d7564000919
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictBestsolution(data) {
    if (data.plaststroke == null) {
        return "Take NSAID (Pain reliever)";
    }
    else if (data.plaststroke=="00.00.0000") {
        if (data.page == null) {
            return "Take NSAID (Pain reliever)";
        }
        else if (data.page > 117) {
            if (data.currentproblem == null) {
                return "Take NSAID (Pain reliever)";
            }
            else if (data.currentproblem=="Headache") {
                if (data.phashighbloodpressure == null) {
                    return "Do some exercise (cardio)";
                }
                else if (data.phashighbloodpressure=="0") {
                    return "Take Aspirin";
                }
                else if (data.phashighbloodpressure=="1") {
                    return "Do some exercise (cardio)";
                }
            }
            else if (data.currentproblem!="Headache") {
                if (data.pallergies == null) {
                    return "Take NSAID (Pain reliever)";
                }
                else if (data.pallergies=="none") {
                    if (data.pbmi == null) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.pbmi > 26) {
                        if (data.phashighbloodpressure == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.phashighbloodpressure=="0") {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.phashighbloodpressure=="1") {
                            return "Have a cold bath";
                        }
                    }
                    else if (data.pbmi <= 26) {
                        if (data.pbmi > 21) {
                            if (data.currentproblem=="Migrane") {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.currentproblem!="Migrane") {
                                return "Take Aspirin";
                            }
                        }
                        else if (data.pbmi <= 21) {
                            return "Take NSAID (Pain reliever)";
                        }
                    }
                }
                else if (data.pallergies!="none") {
                    if (data.page > 118) {
                        if (data.pcurrentprescriptions == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.pcurrentprescriptions=="none") {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.pcurrentprescriptions!="none") {
                            return "Take Aspirin";
                        }
                    }
                    else if (data.page <= 118) {
                        if (data.pbmi == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.pbmi > 22) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.pbmi <= 22) {
                            return "Drink tea";
                        }
                    }
                }
            }
        }
        else if (data.page <= 117) {
            if (data.pweight == null) {
                return "Take NSAID (Pain reliever)";
            }
            else if (data.pweight > 56) {
                if (data.pbloodtype == null) {
                    return "Take NSAID (Pain reliever)";
                }
                else if (data.pbloodtype=="O") {
                    if (data.plasthospitalization == null) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.plasthospitalization=="01.01.2015") {
                        if (data.pallergies == null) {
                            return "Drink tea";
                        }
                        else if (data.pallergies=="none") {
                            return "Call doctor immediately";
                        }
                        else if (data.pallergies!="none") {
                            if (data.page > 101) {
                                return "Drink tea";
                            }
                            else if (data.page <= 101) {
                                return "Take Aspirin";
                            }
                        }
                    }
                    else if (data.plasthospitalization!="01.01.2015") {
                        if (data.pweight > 108) {
                            if (data.pcurrentprescriptions == null) {
                                return "Take acid reducer";
                            }
                            else if (data.pcurrentprescriptions=="none") {
                                if (data.pbmi == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.pbmi > 23) {
                                    return "Take Aspirin";
                                }
                                else if (data.pbmi <= 23) {
                                    return "Eat fruit";
                                }
                            }
                            else if (data.pcurrentprescriptions!="none") {
                                if (data.pheartdisease == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.pheartdisease=="none") {
                                    return "Take acid reducer";
                                }
                                else if (data.pheartdisease!="none") {
                                    return "Do some exercise (cardio)";
                                }
                            }
                        }
                        else if (data.pweight <= 108) {
                            if (data.pheartdisease == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pheartdisease=="Heart Arrhythmia") {
                                if (data.page > 79) {
                                    if (data.pweight > 100) {
                                        return "Eat fruit";
                                    }
                                    else if (data.pweight <= 100) {
                                        if (data.pbmi == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pbmi > 25) {
                                            return "Have a cold bath";
                                        }
                                        else if (data.pbmi <= 25) {
                                            if (data.pweight > 68) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pweight <= 68) {
                                                return "Take Aspirin";
                                            }
                                        }
                                    }
                                }
                                else if (data.page <= 79) {
                                    if (data.pcurrentprescriptions == null) {
                                        return "Eat hot mushroom soup";
                                    }
                                    else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                        return "Take muscle reliever";
                                    }
                                    else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                        if (data.pweight > 79) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pweight <= 79) {
                                            return "Eat hot mushroom soup";
                                        }
                                    }
                                }
                            }
                            else if (data.pheartdisease!="Heart Arrhythmia") {
                                if (data.pallergies == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.pallergies=="Wheat") {
                                    if (data.pbmi == null) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.pbmi > 28) {
                                        if (data.pbmi > 31) {
                                            if (data.pheartdisease=="none") {
                                                return "Eat fruit";
                                            }
                                            else if (data.pheartdisease!="none") {
                                                return "Take Aspirin";
                                            }
                                        }
                                        else if (data.pbmi <= 31) {
                                            if (data.plasthospitalization=="01.01.2019") {
                                                return "Drink tea";
                                            }
                                            else if (data.plasthospitalization!="01.01.2019") {
                                                return "Take Aspirin";
                                            }
                                        }
                                    }
                                    else if (data.pbmi <= 28) {
                                        if (data.page > 99) {
                                            if (data.phasosteoporosis == null) {
                                                return "Eat fruit";
                                            }
                                            else if (data.phasosteoporosis=="0") {
                                                if (data.pcognitiveimpairement == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pcognitiveimpairement=="none") {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pcognitiveimpairement!="none") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                            else if (data.phasosteoporosis=="1") {
                                                return "Call doctor immediately";
                                            }
                                        }
                                        else if (data.page <= 99) {
                                            if (data.pmentalillness == null) {
                                                return "Drink tea";
                                            }
                                            else if (data.pmentalillness=="Anxiety") {
                                                return "Call doctor immediately";
                                            }
                                            else if (data.pmentalillness!="Anxiety") {
                                                if (data.currentproblem == null) {
                                                    return "Drink tea";
                                                }
                                                else if (data.currentproblem=="Headache") {
                                                    return "Take muscle reliever";
                                                }
                                                else if (data.currentproblem!="Headache") {
                                                    if (data.currentproblem=="Heartburn") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.currentproblem!="Heartburn") {
                                                        if (data.pgender == null) {
                                                            return "Drink tea";
                                                        }
                                                        else if (data.pgender=="f") {
                                                            return "Drink tea";
                                                        }
                                                        else if (data.pgender=="m") {
                                                            if (data.pcurrentprescriptions == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pcurrentprescriptions=="Zostrol & Prinivil (Lisinopril)") {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pcurrentprescriptions!="Zostrol & Prinivil (Lisinopril)") {
                                                                if (data.plastseizure == null) {
                                                                    return "Drink tea";
                                                                }
                                                                else if (data.plastseizure=="00.00.0000") {
                                                                    return "Drink tea";
                                                                }
                                                                else if (data.plastseizure!="00.00.0000") {
                                                                    return "Take Aspirin";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.pallergies!="Wheat") {
                                    if (data.pbmi == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pbmi > 18) {
                                        if (data.currentproblem == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.currentproblem=="Sour Throat") {
                                            if (data.page > 76) {
                                                if (data.phasosteoporosis == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.phasosteoporosis=="0") {
                                                    return "Eat fruit";
                                                }
                                                else if (data.phasosteoporosis=="1") {
                                                    if (data.phashighbloodpressure == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.phashighbloodpressure=="0") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.phashighbloodpressure=="1") {
                                                        return "Eat fruit";
                                                    }
                                                }
                                            }
                                            else if (data.page <= 76) {
                                                return "Take acid reducer";
                                            }
                                        }
                                        else if (data.currentproblem!="Sour Throat") {
                                            if (data.phashypertension == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.phashypertension=="0") {
                                                if (data.pweight > 64) {
                                                    if (data.page > 78) {
                                                        if (data.pallergies=="Peanuts") {
                                                            if (data.pmentalillness == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pmentalillness=="none") {
                                                                if (data.pweight > 94) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (data.pweight <= 94) {
                                                                    if (data.prespiratorydisease == null) {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.prespiratorydisease=="Bronchitis") {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                    else if (data.prespiratorydisease!="Bronchitis") {
                                                                        return "Take Aspirin";
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pmentalillness!="none") {
                                                                return "Eat fruit";
                                                            }
                                                        }
                                                        else if (data.pallergies!="Peanuts") {
                                                            if (data.page > 114) {
                                                                if (data.pbmi > 22) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.pbmi <= 22) {
                                                                    return "Have a cold bath";
                                                                }
                                                            }
                                                            else if (data.page <= 114) {
                                                                if (data.plastheartevent == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (data.plastheartevent=="00.00.0000") {
                                                                    if (data.pbmi > 21) {
                                                                        if (data.pdiabetestype == null) {
                                                                            return "Take Aspirin";
                                                                        }
                                                                        else if (data.pdiabetestype > 0) {
                                                                            if (data.phashighbloodpressure == null) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.phashighbloodpressure=="0") {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.phashighbloodpressure=="1") {
                                                                                return "Eat fruit";
                                                                            }
                                                                        }
                                                                        else if (data.pdiabetestype <= 0) {
                                                                            if (data.pweight > 74) {
                                                                                if (data.pweight > 91) {
                                                                                    if (data.page > 104) {
                                                                                        if (data.currentproblem=="Back Pain") {
                                                                                            return "Take Aspirin";
                                                                                        }
                                                                                        else if (data.currentproblem!="Back Pain") {
                                                                                            return "Eat hot mushroom soup";
                                                                                        }
                                                                                    }
                                                                                    else if (data.page <= 104) {
                                                                                        if (data.currentproblem=="Migrane") {
                                                                                            return "Take Aspirin";
                                                                                        }
                                                                                        else if (data.currentproblem!="Migrane") {
                                                                                            if (data.pmentalillness == null) {
                                                                                                return "Take NSAID (Pain reliever)";
                                                                                            }
                                                                                            else if (data.pmentalillness=="Major Depression") {
                                                                                                return "Eat fruit";
                                                                                            }
                                                                                            else if (data.pmentalillness!="Major Depression") {
                                                                                                return "Take NSAID (Pain reliever)";
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                                else if (data.pweight <= 91) {
                                                                                    if (data.pgender == null) {
                                                                                        return "Take Aspirin";
                                                                                    }
                                                                                    else if (data.pgender=="f") {
                                                                                        if (data.currentproblem=="Migrane") {
                                                                                            return "Take acid reducer";
                                                                                        }
                                                                                        else if (data.currentproblem!="Migrane") {
                                                                                            return "Take Aspirin";
                                                                                        }
                                                                                    }
                                                                                    else if (data.pgender=="m") {
                                                                                        if (data.pbmi > 28) {
                                                                                            if (data.pweight > 76) {
                                                                                                return "Take Aspirin";
                                                                                            }
                                                                                            else if (data.pweight <= 76) {
                                                                                                return "Take acid reducer";
                                                                                            }
                                                                                        }
                                                                                        else if (data.pbmi <= 28) {
                                                                                            return "Drink tea";
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            else if (data.pweight <= 74) {
                                                                                if (data.pbmi > 28) {
                                                                                    return "Eat fruit";
                                                                                }
                                                                                else if (data.pbmi <= 28) {
                                                                                    return "Drink tea";
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.pbmi <= 21) {
                                                                        if (data.pweight > 86) {
                                                                            if (data.psmokes == null) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.psmokes=="0") {
                                                                                return "Drink tea";
                                                                            }
                                                                            else if (data.psmokes=="1") {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                        }
                                                                        else if (data.pweight <= 86) {
                                                                            if (data.pweight > 76) {
                                                                                return "Call doctor immediately";
                                                                            }
                                                                            else if (data.pweight <= 76) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.plastheartevent!="00.00.0000") {
                                                                    if (data.pweight > 88) {
                                                                        return "Take acid reducer";
                                                                    }
                                                                    else if (data.pweight <= 88) {
                                                                        return "Take Aspirin";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.page <= 78) {
                                                        if (data.pbmi > 25) {
                                                            if (data.pallergies=="Peanuts") {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.pallergies!="Peanuts") {
                                                                if (data.currentproblem=="Back Pain") {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (data.currentproblem!="Back Pain") {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                        }
                                                        else if (data.pbmi <= 25) {
                                                            if (data.phasosteoporosis == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.phasosteoporosis=="0") {
                                                                if (data.pallergies=="Soy") {
                                                                    if (data.psmokes == null) {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                    else if (data.psmokes=="0") {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.psmokes=="1") {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                }
                                                                else if (data.pallergies!="Soy") {
                                                                    if (data.pcurrentprescriptions == null) {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.pcurrentprescriptions=="none") {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.pcurrentprescriptions!="none") {
                                                                        return "Take Aspirin";
                                                                    }
                                                                }
                                                            }
                                                            else if (data.phasosteoporosis=="1") {
                                                                if (data.phashighbloodpressure == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.phashighbloodpressure=="0") {
                                                                    if (data.pallergies=="none") {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                    else if (data.pallergies!="none") {
                                                                        return "Have a cold bath";
                                                                    }
                                                                }
                                                                else if (data.phashighbloodpressure=="1") {
                                                                    return "Take acid reducer";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 64) {
                                                    if (data.page > 77) {
                                                        if (data.currentproblem=="Migrane") {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.currentproblem!="Migrane") {
                                                            if (data.pweight > 58) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.pweight <= 58) {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                    }
                                                    else if (data.page <= 77) {
                                                        if (data.plastheartevent == null) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.plastheartevent=="00.00.0000") {
                                                            return "Have a cold bath";
                                                        }
                                                        else if (data.plastheartevent!="00.00.0000") {
                                                            return "Eat fruit";
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.phashypertension=="1") {
                                                if (data.currentproblem=="Stomachache or stoma") {
                                                    if (data.pbmi > 21) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pbmi <= 21) {
                                                        return "Take acid reducer";
                                                    }
                                                }
                                                else if (data.currentproblem!="Stomachache or stoma") {
                                                    if (data.currentproblem=="Migrane") {
                                                        if (data.page > 96) {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                        else if (data.page <= 96) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                    else if (data.currentproblem!="Migrane") {
                                                        if (data.psmokes == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.psmokes=="0") {
                                                            if (data.page > 102) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.page <= 102) {
                                                                if (data.page > 66) {
                                                                    if (data.pweight > 64) {
                                                                        return "Drink tea";
                                                                    }
                                                                    else if (data.pweight <= 64) {
                                                                        return "Eat fruit";
                                                                    }
                                                                }
                                                                else if (data.page <= 66) {
                                                                    return "Take acid reducer";
                                                                }
                                                            }
                                                        }
                                                        else if (data.psmokes=="1") {
                                                            if (data.pallergies=="Soy") {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.pallergies!="Soy") {
                                                                if (data.page > 71) {
                                                                    if (data.pweight > 81) {
                                                                        if (data.pallergies=="Peanuts") {
                                                                            return "Take Aspirin";
                                                                        }
                                                                        else if (data.pallergies!="Peanuts") {
                                                                            return "Eat fruit";
                                                                        }
                                                                    }
                                                                    else if (data.pweight <= 81) {
                                                                        if (data.pgender == null) {
                                                                            return "Take NSAID (Pain reliever)";
                                                                        }
                                                                        else if (data.pgender=="f") {
                                                                            return "Take NSAID (Pain reliever)";
                                                                        }
                                                                        else if (data.pgender=="m") {
                                                                            return "Drink tea";
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.page <= 71) {
                                                                    if (data.currentproblem=="Back Pain") {
                                                                        return "Call doctor immediately";
                                                                    }
                                                                    else if (data.currentproblem!="Back Pain") {
                                                                        return "Eat fruit";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.pbmi <= 18) {
                                        if (data.phasosteoporosis == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phasosteoporosis=="0") {
                                            if (data.pgender == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pgender=="f") {
                                                if (data.pheartdisease=="none") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pheartdisease!="none") {
                                                    return "Take acid reducer";
                                                }
                                            }
                                            else if (data.pgender=="m") {
                                                if (data.plastheartevent == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.plastheartevent=="01.01.2015") {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.plastheartevent!="01.01.2015") {
                                                    if (data.prespiratorydisease == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.prespiratorydisease=="none") {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.prespiratorydisease!="none") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.phasosteoporosis=="1") {
                                            if (data.pcurrentprescriptions == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pcurrentprescriptions=="Zostrol & Prinivil (Lisinopril)") {
                                                if (data.plastseizure == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.plastseizure=="00.00.0000") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.plastseizure!="00.00.0000") {
                                                    return "Rest a little";
                                                }
                                            }
                                            else if (data.pcurrentprescriptions!="Zostrol & Prinivil (Lisinopril)") {
                                                if (data.phashighbloodpressure == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.phashighbloodpressure=="0") {
                                                    if (data.pmentalillness == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pmentalillness=="Major Depression") {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.pmentalillness!="Major Depression") {
                                                        return "Take Aspirin";
                                                    }
                                                }
                                                else if (data.phashighbloodpressure=="1") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.pbloodtype!="O") {
                    if (data.plastheartevent == null) {
                        return "Take acid reducer";
                    }
                    else if (data.plastheartevent=="01.01.2015") {
                        if (data.pbmi == null) {
                            return "Have a cold bath";
                        }
                        else if (data.pbmi > 27) {
                            if (data.phashighbloodpressure == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.phashighbloodpressure=="0") {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.phashighbloodpressure=="1") {
                                return "Take Aspirin";
                            }
                        }
                        else if (data.pbmi <= 27) {
                            if (data.pbmi > 24) {
                                return "Take acid reducer";
                            }
                            else if (data.pbmi <= 24) {
                                return "Have a cold bath";
                            }
                        }
                    }
                    else if (data.plastheartevent!="01.01.2015") {
                        if (data.page > 64) {
                            if (data.pallergies == null) {
                                return "Take acid reducer";
                            }
                            else if (data.pallergies=="Soy") {
                                if (data.pweight > 71) {
                                    if (data.psmokes == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.psmokes=="0") {
                                        if (data.page > 71) {
                                            if (data.currentproblem == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.currentproblem=="Sour Throat") {
                                                return "Take Aspirin";
                                            }
                                            else if (data.currentproblem!="Sour Throat") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                        }
                                        else if (data.page <= 71) {
                                            return "Take acid reducer";
                                        }
                                    }
                                    else if (data.psmokes=="1") {
                                        if (data.pmentalillness == null) {
                                            return "Call doctor immediately";
                                        }
                                        else if (data.pmentalillness=="Anxiety") {
                                            return "Eat hot mushroom soup";
                                        }
                                        else if (data.pmentalillness!="Anxiety") {
                                            if (data.pheartdisease == null) {
                                                return "Call doctor immediately";
                                            }
                                            else if (data.pheartdisease=="none") {
                                                if (data.phashypertension == null) {
                                                    return "Call doctor immediately";
                                                }
                                                else if (data.phashypertension=="0") {
                                                    return "Call doctor immediately";
                                                }
                                                else if (data.phashypertension=="1") {
                                                    return "Drink tea";
                                                }
                                            }
                                            else if (data.pheartdisease!="none") {
                                                return "Take acid reducer";
                                            }
                                        }
                                    }
                                }
                                else if (data.pweight <= 71) {
                                    if (data.pweight > 63) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.pweight <= 63) {
                                        return "Take acid reducer";
                                    }
                                }
                            }
                            else if (data.pallergies!="Soy") {
                                if (data.pbmi == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.pbmi > 28) {
                                    if (data.phashypertension == null) {
                                        return "Eat fruit";
                                    }
                                    else if (data.phashypertension=="0") {
                                        if (data.page > 112) {
                                            return "Drink tea";
                                        }
                                        else if (data.page <= 112) {
                                            if (data.page > 82) {
                                                if (data.currentproblem == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.currentproblem=="Heartburn") {
                                                    return "Call doctor immediately";
                                                }
                                                else if (data.currentproblem!="Heartburn") {
                                                    if (data.page > 97) {
                                                        if (data.page > 103) {
                                                            if (data.pweight > 96) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.pweight <= 96) {
                                                                return "Eat fruit";
                                                            }
                                                        }
                                                        else if (data.page <= 103) {
                                                            if (data.pbloodtype=="A") {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.pbloodtype!="A") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                    }
                                                    else if (data.page <= 97) {
                                                        if (data.phasosteoporosis == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.phasosteoporosis=="0") {
                                                            if (data.pmentalillness == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pmentalillness=="none") {
                                                                return "Call doctor immediately";
                                                            }
                                                            else if (data.pmentalillness!="none") {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                        else if (data.phasosteoporosis=="1") {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.page <= 82) {
                                                if (data.page > 77) {
                                                    if (data.phashighbloodpressure == null) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.phashighbloodpressure=="0") {
                                                        if (data.pallergies=="Fish") {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                        else if (data.pallergies!="Fish") {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                    else if (data.phashighbloodpressure=="1") {
                                                        return "Do some exercise (cardio)";
                                                    }
                                                }
                                                else if (data.page <= 77) {
                                                    if (data.currentproblem == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.currentproblem=="Headache") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.currentproblem!="Headache") {
                                                        if (data.pweight > 73) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.pweight <= 73) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.phashypertension=="1") {
                                        if (data.page > 100) {
                                            return "Take Aspirin";
                                        }
                                        else if (data.page <= 100) {
                                            if (data.psmokes == null) {
                                                return "Eat fruit";
                                            }
                                            else if (data.psmokes=="0") {
                                                if (data.plastseizure == null) {
                                                    return "Eat hot mushroom soup";
                                                }
                                                else if (data.plastseizure=="00.00.0000") {
                                                    if (data.pweight > 90) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pweight <= 90) {
                                                        if (data.currentproblem == null) {
                                                            return "Eat hot mushroom soup";
                                                        }
                                                        else if (data.currentproblem=="Migrane") {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.currentproblem!="Migrane") {
                                                            return "Eat hot mushroom soup";
                                                        }
                                                    }
                                                }
                                                else if (data.plastseizure!="00.00.0000") {
                                                    return "Drink tea";
                                                }
                                            }
                                            else if (data.psmokes=="1") {
                                                if (data.page > 75) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.page <= 75) {
                                                    return "Call doctor immediately";
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.pbmi <= 28) {
                                    if (data.phashypertension == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.phashypertension=="0") {
                                        if (data.currentproblem == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.currentproblem=="Migrane") {
                                            if (data.pmentalillness == null) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.pmentalillness=="Anxiety") {
                                                if (data.pbmi > 25) {
                                                    return "Drink tea";
                                                }
                                                else if (data.pbmi <= 25) {
                                                    return "Eat hot mushroom soup";
                                                }
                                            }
                                            else if (data.pmentalillness!="Anxiety") {
                                                if (data.pgender == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pgender=="f") {
                                                    if (data.phasosteoporosis == null) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.phasosteoporosis=="0") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.phasosteoporosis=="1") {
                                                        return "Take acid reducer";
                                                    }
                                                }
                                                else if (data.pgender=="m") {
                                                    if (data.page > 68) {
                                                        if (data.pweight > 92) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.pweight <= 92) {
                                                            if (data.pheartdisease == null) {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.pheartdisease=="none") {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.pheartdisease!="none") {
                                                                return "Have a cold bath";
                                                            }
                                                        }
                                                    }
                                                    else if (data.page <= 68) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.currentproblem!="Migrane") {
                                            if (data.currentproblem=="Headache") {
                                                if (data.pweight > 92) {
                                                    if (data.page > 99) {
                                                        return "Do some exercise (cardio)";
                                                    }
                                                    else if (data.page <= 99) {
                                                        if (data.pgender == null) {
                                                            return "Drink tea";
                                                        }
                                                        else if (data.pgender=="f") {
                                                            return "Drink tea";
                                                        }
                                                        else if (data.pgender=="m") {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 92) {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.pcurrentprescriptions=="Zostrol & Prinivil (Lisinopril)") {
                                                        return "Eat hot mushroom soup";
                                                    }
                                                    else if (data.pcurrentprescriptions!="Zostrol & Prinivil (Lisinopril)") {
                                                        if (data.pweight > 76) {
                                                            if (data.phashighbloodpressure == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.phashighbloodpressure=="0") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.phashighbloodpressure=="1") {
                                                                return "Do some exercise (cardio)";
                                                            }
                                                        }
                                                        else if (data.pweight <= 76) {
                                                            if (data.pbloodtype=="B") {
                                                                return "Eat fruit";
                                                            }
                                                            else if (data.pbloodtype!="B") {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.currentproblem!="Headache") {
                                                if (data.pweight > 98) {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pcurrentprescriptions=="none") {
                                                        if (data.pallergies=="none") {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.pallergies!="none") {
                                                            if (data.page > 84) {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.page <= 84) {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                        }
                                                    }
                                                    else if (data.pcurrentprescriptions!="none") {
                                                        if (data.psmokes == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.psmokes=="0") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.psmokes=="1") {
                                                            if (data.pgender == null) {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                            else if (data.pgender=="f") {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                            else if (data.pgender=="m") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 98) {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                                        if (data.pheartdisease == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pheartdisease=="none") {
                                                            if (data.pweight > 65) {
                                                                if (data.pmentalillness == null) {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (data.pmentalillness=="Anxiety") {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.pmentalillness!="Anxiety") {
                                                                    if (data.pallergies=="Fish") {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.pallergies!="Fish") {
                                                                        if (data.plastheartevent=="00.00.0000") {
                                                                            return "Take Aspirin";
                                                                        }
                                                                        else if (data.plastheartevent!="00.00.0000") {
                                                                            return "Take NSAID (Pain reliever)";
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pweight <= 65) {
                                                                return "Eat fruit";
                                                            }
                                                        }
                                                        else if (data.pheartdisease!="none") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                    else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                                        if (data.psmokes == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.psmokes=="0") {
                                                            if (data.pweight > 71) {
                                                                if (data.phasosteoporosis == null) {
                                                                    return "Do some exercise (cardio)";
                                                                }
                                                                else if (data.phasosteoporosis=="0") {
                                                                    if (data.pallergies=="none") {
                                                                        return "Eat hot mushroom soup";
                                                                    }
                                                                    else if (data.pallergies!="none") {
                                                                        return "Take Aspirin";
                                                                    }
                                                                }
                                                                else if (data.phasosteoporosis=="1") {
                                                                    if (data.prespiratorydisease == null) {
                                                                        return "Call doctor immediately";
                                                                    }
                                                                    else if (data.prespiratorydisease=="none") {
                                                                        return "Call doctor immediately";
                                                                    }
                                                                    else if (data.prespiratorydisease!="none") {
                                                                        return "Drink tea";
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pweight <= 71) {
                                                                if (data.pmentalillness == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (data.pmentalillness=="none") {
                                                                    if (data.pweight > 63) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.pweight <= 63) {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                }
                                                                else if (data.pmentalillness!="none") {
                                                                    return "Take Aspirin";
                                                                }
                                                            }
                                                        }
                                                        else if (data.psmokes=="1") {
                                                            if (data.pweight > 62) {
                                                                if (data.page > 108) {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (data.page <= 108) {
                                                                    if (data.pallergies=="Wheat") {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                    else if (data.pallergies!="Wheat") {
                                                                        if (data.pmentalillness == null) {
                                                                            return "Take NSAID (Pain reliever)";
                                                                        }
                                                                        else if (data.pmentalillness=="none") {
                                                                            if (data.pweight > 81) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.pweight <= 81) {
                                                                                return "Eat fruit";
                                                                            }
                                                                        }
                                                                        else if (data.pmentalillness!="none") {
                                                                            return "Take acid reducer";
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pweight <= 62) {
                                                                if (data.prespiratorydisease == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.prespiratorydisease=="none") {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.prespiratorydisease!="none") {
                                                                    return "Eat hot mushroom soup";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.phashypertension=="1") {
                                        if (data.phashighbloodpressure == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phashighbloodpressure=="0") {
                                            if (data.pcurrentprescriptions == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                                if (data.pweight > 73) {
                                                    if (data.pbloodtype=="A") {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pbloodtype!="A") {
                                                        return "Eat fruit";
                                                    }
                                                }
                                                else if (data.pweight <= 73) {
                                                    return "Call doctor immediately";
                                                }
                                            }
                                            else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                                if (data.page > 85) {
                                                    if (data.pbloodtype=="AB") {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pbloodtype!="AB") {
                                                        if (data.pbmi > 25) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.pbmi <= 25) {
                                                            if (data.page > 98) {
                                                                if (data.page > 113) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.page <= 113) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                            else if (data.page <= 98) {
                                                                if (data.phasosteoporosis == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.phasosteoporosis=="0") {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.phasosteoporosis=="1") {
                                                                    return "Take muscle reliever";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.page <= 85) {
                                                    if (data.currentproblem == null) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.currentproblem=="Cold") {
                                                        return "Call doctor immediately";
                                                    }
                                                    else if (data.currentproblem!="Cold") {
                                                        if (data.pmentalillness == null) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.pmentalillness=="none") {
                                                            if (data.pbloodtype=="A") {
                                                                return "Eat fruit";
                                                            }
                                                            else if (data.pbloodtype!="A") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                        else if (data.pmentalillness!="none") {
                                                            if (data.prespiratorydisease == null) {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.prespiratorydisease=="none") {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.prespiratorydisease!="none") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.phashighbloodpressure=="1") {
                                            if (data.pweight > 81) {
                                                if (data.page > 99) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.page <= 99) {
                                                    if (data.phasosteoporosis == null) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.phasosteoporosis=="0") {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.phasosteoporosis=="1") {
                                                        if (data.psmokes == null) {
                                                            return "Eat hot mushroom soup";
                                                        }
                                                        else if (data.psmokes=="0") {
                                                            return "Take muscle reliever";
                                                        }
                                                        else if (data.psmokes=="1") {
                                                            return "Eat hot mushroom soup";
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.pweight <= 81) {
                                                if (data.pcurrentprescriptions == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pcurrentprescriptions=="none") {
                                                    if (data.pmentalillness == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pmentalillness=="Anxiety") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pmentalillness!="Anxiety") {
                                                        if (data.plasthospitalization == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.plasthospitalization=="00.00.0000") {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.plasthospitalization!="00.00.0000") {
                                                            return "Have a cold bath";
                                                        }
                                                    }
                                                }
                                                else if (data.pcurrentprescriptions!="none") {
                                                    if (data.pbmi > 25) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pbmi <= 25) {
                                                        return "Drink tea";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.page <= 64) {
                            if (data.pallergies == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pallergies=="Fish") {
                                if (data.pbmi == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.pbmi > 27) {
                                    return "Take acid reducer";
                                }
                                else if (data.pbmi <= 27) {
                                    return "Take Aspirin";
                                }
                            }
                            else if (data.pallergies!="Fish") {
                                if (data.pweight > 101) {
                                    if (data.pmentalillness == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pmentalillness=="Major Depression") {
                                        return "Do some exercise (cardio)";
                                    }
                                    else if (data.pmentalillness!="Major Depression") {
                                        return "Take acid reducer";
                                    }
                                }
                                else if (data.pweight <= 101) {
                                    if (data.pweight > 84) {
                                        if (data.pcurrentprescriptions == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                            if (data.phashighbloodpressure == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.phashighbloodpressure=="0") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.phashighbloodpressure=="1") {
                                                return "Have a cold bath";
                                            }
                                        }
                                    }
                                    else if (data.pweight <= 84) {
                                        if (data.page > 61) {
                                            if (data.pdiabetestype == null) {
                                                return "Eat fruit";
                                            }
                                            else if (data.pdiabetestype > 0) {
                                                return "Have a cold bath";
                                            }
                                            else if (data.pdiabetestype <= 0) {
                                                if (data.pallergies=="none") {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pallergies!="none") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                        }
                                        else if (data.page <= 61) {
                                            return "Eat hot mushroom soup";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (data.pweight <= 56) {
                if (data.page > 107) {
                    if (data.currentproblem == null) {
                        return "Drink tea";
                    }
                    else if (data.currentproblem=="Headache") {
                        return "Take Aspirin";
                    }
                    else if (data.currentproblem!="Headache") {
                        if (data.pbmi == null) {
                            return "Drink tea";
                        }
                        else if (data.pbmi > 26) {
                            return "Eat hot mushroom soup";
                        }
                        else if (data.pbmi <= 26) {
                            if (data.pweight > 52) {
                                return "Drink tea";
                            }
                            else if (data.pweight <= 52) {
                                return "Take NSAID (Pain reliever)";
                            }
                        }
                    }
                }
                else if (data.page <= 107) {
                    if (data.pweight > 51) {
                        if (data.pweight > 54) {
                            if (data.pbloodtype == null) {
                                return "Take Aspirin";
                            }
                            else if (data.pbloodtype=="A") {
                                if (data.pallergies == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.pallergies=="none") {
                                    return "Take Aspirin";
                                }
                                else if (data.pallergies!="none") {
                                    return "Take muscle reliever";
                                }
                            }
                            else if (data.pbloodtype!="A") {
                                if (data.pcurrentprescriptions == null) {
                                    return "Drink tea";
                                }
                                else if (data.pcurrentprescriptions=="none") {
                                    if (data.psmokes == null) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.psmokes=="0") {
                                        return "Take Aspirin";
                                    }
                                    else if (data.psmokes=="1") {
                                        return "Take acid reducer";
                                    }
                                }
                                else if (data.pcurrentprescriptions!="none") {
                                    if (data.phasepilepsy == null) {
                                        return "Drink tea";
                                    }
                                    else if (data.phasepilepsy=="0") {
                                        return "Eat fruit";
                                    }
                                    else if (data.phasepilepsy=="1") {
                                        return "Drink tea";
                                    }
                                }
                            }
                        }
                        else if (data.pweight <= 54) {
                            if (data.pbloodtype == null) {
                                return "Drink tea";
                            }
                            else if (data.pbloodtype=="B") {
                                if (data.phashypertension == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.phashypertension=="0") {
                                    return "Take Aspirin";
                                }
                                else if (data.phashypertension=="1") {
                                    return "Take acid reducer";
                                }
                            }
                            else if (data.pbloodtype!="B") {
                                if (data.plasthospitalization == null) {
                                    return "Drink tea";
                                }
                                else if (data.plasthospitalization=="00.00.0000") {
                                    if (data.pbmi == null) {
                                        return "Drink tea";
                                    }
                                    else if (data.pbmi > 29) {
                                        return "Eat fruit";
                                    }
                                    else if (data.pbmi <= 29) {
                                        if (data.psmokes == null) {
                                            return "Drink tea";
                                        }
                                        else if (data.psmokes=="0") {
                                            if (data.phasosteoporosis == null) {
                                                return "Drink tea";
                                            }
                                            else if (data.phasosteoporosis=="0") {
                                                return "Take acid reducer";
                                            }
                                            else if (data.phasosteoporosis=="1") {
                                                if (data.page > 101) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.page <= 101) {
                                                    return "Drink tea";
                                                }
                                            }
                                        }
                                        else if (data.psmokes=="1") {
                                            if (data.pallergies == null) {
                                                return "Drink tea";
                                            }
                                            else if (data.pallergies=="none") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pallergies!="none") {
                                                return "Drink tea";
                                            }
                                        }
                                    }
                                }
                                else if (data.plasthospitalization!="00.00.0000") {
                                    if (data.pbloodtype=="O") {
                                        return "Eat fruit";
                                    }
                                    else if (data.pbloodtype!="O") {
                                        return "Take Aspirin";
                                    }
                                }
                            }
                        }
                    }
                    else if (data.pweight <= 51) {
                        if (data.pbloodtype == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.pbloodtype=="A") {
                            if (data.pbmi == null) {
                                return "Take Aspirin";
                            }
                            else if (data.pbmi > 21) {
                                return "Take Aspirin";
                            }
                            else if (data.pbmi <= 21) {
                                if (data.currentproblem == null) {
                                    return "Drink tea";
                                }
                                else if (data.currentproblem=="Migrane") {
                                    return "Take acid reducer";
                                }
                                else if (data.currentproblem!="Migrane") {
                                    return "Drink tea";
                                }
                            }
                        }
                        else if (data.pbloodtype!="A") {
                            if (data.currentproblem == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.currentproblem=="Headache") {
                                return "Have a cold bath";
                            }
                            else if (data.currentproblem!="Headache") {
                                return "Take NSAID (Pain reliever)";
                            }
                        }
                    }
                }
            }
        }
    }
    else if (data.plaststroke!="00.00.0000") {
        if (data.pweight == null) {
            return "Take Aspirin";
        }
        else if (data.pweight > 103) {
            if (data.pallergies == null) {
                return "Call doctor immediately";
            }
            else if (data.pallergies=="none") {
                return "Call doctor immediately";
            }
            else if (data.pallergies!="none") {
                return "Take Aspirin";
            }
        }
        else if (data.pweight <= 103) {
            if (data.page == null) {
                return "Take Aspirin";
            }
            else if (data.page > 95) {
                if (data.pweight > 92) {
                    return "Take acid reducer";
                }
                else if (data.pweight <= 92) {
                    if (data.page > 111) {
                        return "Take acid reducer";
                    }
                    else if (data.page <= 111) {
                        return "Take Aspirin";
                    }
                }
            }
            else if (data.page <= 95) {
                if (data.plaststroke=="01.01.2015") {
                    if (data.phashypertension == null) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.phashypertension=="0") {
                        if (data.pmentalillness == null) {
                            return "Eat fruit";
                        }
                        else if (data.pmentalillness=="Anxiety") {
                            return "Take acid reducer";
                        }
                        else if (data.pmentalillness!="Anxiety") {
                            return "Eat fruit";
                        }
                    }
                    else if (data.phashypertension=="1") {
                        return "Take NSAID (Pain reliever)";
                    }
                }
                else if (data.plaststroke!="01.01.2015") {
                    if (data.page > 69) {
                        if (data.phasosteoporosis == null) {
                            return "Take Aspirin";
                        }
                        else if (data.phasosteoporosis=="0") {
                            if (data.pbloodtype == null) {
                                return "Take Aspirin";
                            }
                            else if (data.pbloodtype=="O") {
                                return "Take Aspirin";
                            }
                            else if (data.pbloodtype!="O") {
                                return "Eat fruit";
                            }
                        }
                        else if (data.phasosteoporosis=="1") {
                            return "Take Aspirin";
                        }
                    }
                    else if (data.page <= 69) {
                        return "Take NSAID (Pain reliever)";
                    }
                }
            }
        }
    }
    return null;
}
/* ---------------------------------------------------------------------------------------------------------------------- */

/* ------------------------------ 4 - Handling the Google Assistant intent (request) ------------------------------------ */
app.intent('Default Welcome Intent', conv => {		// Patient initiates the conversation with this service
	conv.ask(`Hi there! How may I help you?`);
});
app.intent('Default Welcome Intent - Follow Up',(conv, {problem}) => {	// Follow-up with specific symptom
	patient.currentproblem = `${problem}`;
	// Applying the predictive model's function (above) for this patient with this problem:
	var sol = predictBestsolution(patient);
    conv.close(`Alrighty, ${name}! According to my sources, the best solution for your ${problem} is to ${sol}`);
});

const expressApp = express().use(bodyParser.json());
expressApp.post('/', app);
expressApp.listen(port);
