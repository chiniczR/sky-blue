
/**
*  Predictor for BESTSOLUTION from model/5ce1d99ade2d4d234d001add
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
                if (data.pbmi == null) {
                    return "Do some exercise (cardio)";
                }
                else if (data.pbmi > 26) {
                    return "Do some exercise (cardio)";
                }
                else if (data.pbmi <= 26) {
                    return "Take Aspirin";
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
                        if (data.hourswithproblem == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.hourswithproblem > 95) {
                            if (data.pweight > 87) {
                                if (data.pcognitiveimpairement == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.pcognitiveimpairement=="none") {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.pcognitiveimpairement!="none") {
                                    return "Take Aspirin";
                                }
                            }
                            else if (data.pweight <= 87) {
                                if (data.pweight > 71) {
                                    if (data.phasosteoporosis == null) {
                                        return "Drink tea";
                                    }
                                    else if (data.phasosteoporosis=="0") {
                                        return "Drink tea";
                                    }
                                    else if (data.phasosteoporosis=="1") {
                                        return "Have a cold bath";
                                    }
                                }
                                else if (data.pweight <= 71) {
                                    return "Take NSAID (Pain reliever)";
                                }
                            }
                        }
                        else if (data.hourswithproblem <= 95) {
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
                                            return "Have a cold bath";
                                        }
                                        else if (data.pbmi > 22) {
                                            return "Have a cold bath";
                                        }
                                        else if (data.pbmi <= 22) {
                                            return "Drink tea";
                                        }
                                    }
                                }
                                else if (data.page <= 79) {
                                    if (data.hourswithproblem > 61) {
                                        return "Call doctor immediately";
                                    }
                                    else if (data.hourswithproblem <= 61) {
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
                                if (data.pweight > 108) {
                                    if (data.pgender == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pgender=="f") {
                                        if (data.plasthospitalization=="00.00.0000") {
                                            if (data.pcurrentprescriptions == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.pcurrentprescriptions=="none") {
                                                return "Drink tea";
                                            }
                                            else if (data.pcurrentprescriptions!="none") {
                                                return "Take acid reducer";
                                            }
                                        }
                                        else if (data.plasthospitalization!="00.00.0000") {
                                            return "Drink tea";
                                        }
                                    }
                                    else if (data.pgender=="m") {
                                        return "Take Aspirin";
                                    }
                                }
                                else if (data.pweight <= 108) {
                                    if (data.hourswithproblem > 6) {
                                        if (data.phasepilepsy == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phasepilepsy=="0") {
                                            if (data.pbmi == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pbmi > 18) {
                                                if (data.prespiratorydisease == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.prespiratorydisease=="Asthma") {
                                                    if (data.hourswithproblem > 54) {
                                                        if (data.pbmi > 28) {
                                                            return "Eat hot mushroom soup";
                                                        }
                                                        else if (data.pbmi <= 28) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                    else if (data.hourswithproblem <= 54) {
                                                        if (data.phasosteoporosis == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.phasosteoporosis=="0") {
                                                            if (data.hourswithproblem > 33) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.hourswithproblem <= 33) {
                                                                return "Drink tea";
                                                            }
                                                        }
                                                        else if (data.phasosteoporosis=="1") {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                }
                                                else if (data.prespiratorydisease!="Asthma") {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pcurrentprescriptions=="Zostrol & Prinivil (Lisinopril)") {
                                                        if (data.hourswithproblem > 35) {
                                                            if (data.pmentalillness == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pmentalillness=="none") {
                                                                if (data.pweight > 100) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.pweight <= 100) {
                                                                    if (data.pbmi > 30) {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                    else if (data.pbmi <= 30) {
                                                                        if (data.hourswithproblem > 91) {
                                                                            return "Drink tea";
                                                                        }
                                                                        else if (data.hourswithproblem <= 91) {
                                                                            return "Take Aspirin";
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pmentalillness!="none") {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                        else if (data.hourswithproblem <= 35) {
                                                            if (data.phashypertension == null) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.phashypertension=="0") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.phashypertension=="1") {
                                                                return "Eat fruit";
                                                            }
                                                        }
                                                    }
                                                    else if (data.pcurrentprescriptions!="Zostrol & Prinivil (Lisinopril)") {
                                                        if (data.page > 76) {
                                                            if (data.currentproblem == null) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.currentproblem=="Sour Throat") {
                                                                if (data.phashypertension == null) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.phashypertension=="0") {
                                                                    if (data.pbmi > 21) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.pbmi <= 21) {
                                                                        return "Eat hot mushroom soup";
                                                                    }
                                                                }
                                                                else if (data.phashypertension=="1") {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                            else if (data.currentproblem!="Sour Throat") {
                                                                if (data.pallergies == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (data.pallergies=="Peanuts") {
                                                                    if (data.hourswithproblem > 35) {
                                                                        if (data.pcurrentprescriptions=="none") {
                                                                            if (data.phashypertension == null) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.phashypertension=="0") {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.phashypertension=="1") {
                                                                                return "Take acid reducer";
                                                                            }
                                                                        }
                                                                        else if (data.pcurrentprescriptions!="none") {
                                                                            return "Do some exercise (cardio)";
                                                                        }
                                                                    }
                                                                    else if (data.hourswithproblem <= 35) {
                                                                        if (data.hourswithproblem > 28) {
                                                                            return "Eat fruit";
                                                                        }
                                                                        else if (data.hourswithproblem <= 28) {
                                                                            if (data.plasthospitalization=="00.00.0000") {
                                                                                return "Take Aspirin";
                                                                            }
                                                                            else if (data.plasthospitalization!="00.00.0000") {
                                                                                return "Have a cold bath";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.pallergies!="Peanuts") {
                                                                    if (data.pweight > 90) {
                                                                        if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                                                            return "Take NSAID (Pain reliever)";
                                                                        }
                                                                        else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                                                            if (data.pweight > 98) {
                                                                                if (data.currentproblem=="Stomachache or stoma") {
                                                                                    return "Eat fruit";
                                                                                }
                                                                                else if (data.currentproblem!="Stomachache or stoma") {
                                                                                    if (data.page > 95) {
                                                                                        return "Take acid reducer";
                                                                                    }
                                                                                    else if (data.page <= 95) {
                                                                                        if (data.hourswithproblem > 18) {
                                                                                            return "Eat fruit";
                                                                                        }
                                                                                        else if (data.hourswithproblem <= 18) {
                                                                                            return "Take acid reducer";
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            else if (data.pweight <= 98) {
                                                                                if (data.hourswithproblem > 60) {
                                                                                    return "Drink tea";
                                                                                }
                                                                                else if (data.hourswithproblem <= 60) {
                                                                                    if (data.phasosteoporosis == null) {
                                                                                        return "Take NSAID (Pain reliever)";
                                                                                    }
                                                                                    else if (data.phasosteoporosis=="0") {
                                                                                        return "Take NSAID (Pain reliever)";
                                                                                    }
                                                                                    else if (data.phasosteoporosis=="1") {
                                                                                        return "Take NSAID (Pain reliever)";
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.pweight <= 90) {
                                                                        if (data.hourswithproblem > 16) {
                                                                            if (data.hourswithproblem > 74) {
                                                                                if (data.hourswithproblem > 81) {
                                                                                    if (data.pbmi > 22) {
                                                                                        return "Take NSAID (Pain reliever)";
                                                                                    }
                                                                                    else if (data.pbmi <= 22) {
                                                                                        return "Take acid reducer";
                                                                                    }
                                                                                }
                                                                                else if (data.hourswithproblem <= 81) {
                                                                                    if (data.hourswithproblem > 76) {
                                                                                        return "Eat hot mushroom soup";
                                                                                    }
                                                                                    else if (data.hourswithproblem <= 76) {
                                                                                        return "Drink tea";
                                                                                    }
                                                                                }
                                                                            }
                                                                            else if (data.hourswithproblem <= 74) {
                                                                                if (data.phashypertension == null) {
                                                                                    return "Take acid reducer";
                                                                                }
                                                                                else if (data.phashypertension=="0") {
                                                                                    if (data.pweight > 74) {
                                                                                        if (data.pweight > 82) {
                                                                                            if (data.hourswithproblem > 47) {
                                                                                                if (data.pmentalillness == null) {
                                                                                                    return "Call doctor immediately";
                                                                                                }
                                                                                                else if (data.pmentalillness=="none") {
                                                                                                    return "Call doctor immediately";
                                                                                                }
                                                                                                else if (data.pmentalillness!="none") {
                                                                                                    return "Take muscle reliever";
                                                                                                }
                                                                                            }
                                                                                            else if (data.hourswithproblem <= 47) {
                                                                                                return "Take NSAID (Pain reliever)";
                                                                                            }
                                                                                        }
                                                                                        else if (data.pweight <= 82) {
                                                                                            if (data.pmentalillness == null) {
                                                                                                return "Take Aspirin";
                                                                                            }
                                                                                            else if (data.pmentalillness=="none") {
                                                                                                return "Take Aspirin";
                                                                                            }
                                                                                            else if (data.pmentalillness!="none") {
                                                                                                return "Drink tea";
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    else if (data.pweight <= 74) {
                                                                                        if (data.currentproblem=="Migrane") {
                                                                                            return "Take Aspirin";
                                                                                        }
                                                                                        else if (data.currentproblem!="Migrane") {
                                                                                            if (data.page > 99) {
                                                                                                return "Drink tea";
                                                                                            }
                                                                                            else if (data.page <= 99) {
                                                                                                if (data.psmokes == null) {
                                                                                                    return "Take NSAID (Pain reliever)";
                                                                                                }
                                                                                                else if (data.psmokes=="0") {
                                                                                                    return "Take muscle reliever";
                                                                                                }
                                                                                                else if (data.psmokes=="1") {
                                                                                                    return "Drink tea";
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                                else if (data.phashypertension=="1") {
                                                                                    if (data.currentproblem=="Chest Pain") {
                                                                                        return "Call doctor immediately";
                                                                                    }
                                                                                    else if (data.currentproblem!="Chest Pain") {
                                                                                        if (data.pbmi > 27) {
                                                                                            return "Take NSAID (Pain reliever)";
                                                                                        }
                                                                                        else if (data.pbmi <= 27) {
                                                                                            return "Take acid reducer";
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        else if (data.hourswithproblem <= 16) {
                                                                            if (data.phashypertension == null) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.phashypertension=="0") {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.phashypertension=="1") {
                                                                                return "Eat hot mushroom soup";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else if (data.page <= 76) {
                                                            if (data.pweight > 101) {
                                                                if (data.phashighbloodpressure == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.phashighbloodpressure=="0") {
                                                                    if (data.psmokes == null) {
                                                                        return "Drink tea";
                                                                    }
                                                                    else if (data.psmokes=="0") {
                                                                        return "Drink tea";
                                                                    }
                                                                    else if (data.psmokes=="1") {
                                                                        return "Eat fruit";
                                                                    }
                                                                }
                                                                else if (data.phashighbloodpressure=="1") {
                                                                    return "Take acid reducer";
                                                                }
                                                            }
                                                            else if (data.pweight <= 101) {
                                                                if (data.pweight > 69) {
                                                                    if (data.prespiratorydisease=="none") {
                                                                        if (data.page > 71) {
                                                                            if (data.pcurrentprescriptions=="none") {
                                                                                return "Take muscle reliever";
                                                                            }
                                                                            else if (data.pcurrentprescriptions!="none") {
                                                                                return "Take Aspirin";
                                                                            }
                                                                        }
                                                                        else if (data.page <= 71) {
                                                                            if (data.hourswithproblem > 21) {
                                                                                if (data.currentproblem == null) {
                                                                                    return "Take NSAID (Pain reliever)";
                                                                                }
                                                                                else if (data.currentproblem=="Migrane") {
                                                                                    return "Take NSAID (Pain reliever)";
                                                                                }
                                                                                else if (data.currentproblem!="Migrane") {
                                                                                    if (data.pweight > 83) {
                                                                                        return "Take NSAID (Pain reliever)";
                                                                                    }
                                                                                    else if (data.pweight <= 83) {
                                                                                        return "Do some exercise (cardio)";
                                                                                    }
                                                                                }
                                                                            }
                                                                            else if (data.hourswithproblem <= 21) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.prespiratorydisease!="none") {
                                                                        return "Take acid reducer";
                                                                    }
                                                                }
                                                                else if (data.pweight <= 69) {
                                                                    if (data.phasosteoporosis == null) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.phasosteoporosis=="0") {
                                                                        if (data.pbmi > 20) {
                                                                            return "Take acid reducer";
                                                                        }
                                                                        else if (data.pbmi <= 20) {
                                                                            return "Eat fruit";
                                                                        }
                                                                    }
                                                                    else if (data.phasosteoporosis=="1") {
                                                                        return "Have a cold bath";
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
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pgender=="f") {
                                                        if (data.pheartdisease=="none") {
                                                            if (data.pweight > 97) {
                                                                return "Take muscle reliever";
                                                            }
                                                            else if (data.pweight <= 97) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                        else if (data.pheartdisease!="none") {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                    else if (data.pgender=="m") {
                                                        if (data.prespiratorydisease == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.prespiratorydisease=="none") {
                                                            if (data.hourswithproblem > 74) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.hourswithproblem <= 74) {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                        else if (data.prespiratorydisease!="none") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                }
                                                else if (data.phasosteoporosis=="1") {
                                                    if (data.hourswithproblem > 31) {
                                                        if (data.plastseizure == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.plastseizure=="01.01.2010") {
                                                            return "Rest a little";
                                                        }
                                                        else if (data.plastseizure!="01.01.2010") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                    else if (data.hourswithproblem <= 31) {
                                                        if (data.pcognitiveimpairement == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pcognitiveimpairement=="none") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pcognitiveimpairement!="none") {
                                                            return "Drink tea";
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.phasepilepsy=="1") {
                                            if (data.hourswithproblem > 38) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.hourswithproblem <= 38) {
                                                return "Take Aspirin";
                                            }
                                        }
                                    }
                                    else if (data.hourswithproblem <= 6) {
                                        if (data.pbmi == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pbmi > 19) {
                                            if (data.pweight > 89) {
                                                if (data.pallergies == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pallergies=="none") {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pallergies!="none") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                            else if (data.pweight <= 89) {
                                                if (data.pweight > 71) {
                                                    if (data.pweight > 85) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pweight <= 85) {
                                                        return "Have a cold bath";
                                                    }
                                                }
                                                else if (data.pweight <= 71) {
                                                    return "Drink tea";
                                                }
                                            }
                                        }
                                        else if (data.pbmi <= 19) {
                                            if (data.pweight > 90) {
                                                return "Eat fruit";
                                            }
                                            else if (data.pweight <= 90) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.pbloodtype!="O") {
                    if (data.hourswithproblem == null) {
                        return "Take acid reducer";
                    }
                    else if (data.hourswithproblem > 36) {
                        if (data.pbmi == null) {
                            return "Take acid reducer";
                        }
                        else if (data.pbmi > 18) {
                            if (data.pheartdisease == null) {
                                return "Take acid reducer";
                            }
                            else if (data.pheartdisease=="Cardiomyopathy") {
                                if (data.page > 93) {
                                    if (data.page > 99) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.page <= 99) {
                                        return "Take muscle reliever";
                                    }
                                }
                                else if (data.page <= 93) {
                                    if (data.hourswithproblem > 64) {
                                        return "Eat fruit";
                                    }
                                    else if (data.hourswithproblem <= 64) {
                                        return "Drink tea";
                                    }
                                }
                            }
                            else if (data.pheartdisease!="Cardiomyopathy") {
                                if (data.psmokes == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.psmokes=="0") {
                                    if (data.pheartdisease=="none") {
                                        if (data.pmentalillness == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pmentalillness=="Anxiety") {
                                            if (data.phashighbloodpressure == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.phashighbloodpressure=="0") {
                                                if (data.hourswithproblem > 66) {
                                                    if (data.pgender == null) {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pgender=="f") {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.pgender=="m") {
                                                        return "Drink tea";
                                                    }
                                                }
                                                else if (data.hourswithproblem <= 66) {
                                                    if (data.plasthospitalization == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.plasthospitalization=="00.00.0000") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.plasthospitalization!="00.00.0000") {
                                                        return "Drink tea";
                                                    }
                                                }
                                            }
                                            else if (data.phashighbloodpressure=="1") {
                                                return "Take Aspirin";
                                            }
                                        }
                                        else if (data.pmentalillness!="Anxiety") {
                                            if (data.phashighbloodpressure == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.phashighbloodpressure=="0") {
                                                if (data.pweight > 81) {
                                                    if (data.currentproblem == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.currentproblem=="Back Pain") {
                                                        if (data.page > 85) {
                                                            return "Drink tea";
                                                        }
                                                        else if (data.page <= 85) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                    else if (data.currentproblem!="Back Pain") {
                                                        if (data.pallergies == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pallergies=="none") {
                                                            if (data.hourswithproblem > 77) {
                                                                return "Do some exercise (cardio)";
                                                            }
                                                            else if (data.hourswithproblem <= 77) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                        else if (data.pallergies!="none") {
                                                            if (data.page > 76) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.page <= 76) {
                                                                if (data.hourswithproblem > 56) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (data.hourswithproblem <= 56) {
                                                                    return "Eat fruit";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 81) {
                                                    if (data.currentproblem == null) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.currentproblem=="Migrane") {
                                                        if (data.pcurrentprescriptions == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pcurrentprescriptions=="none") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pcurrentprescriptions!="none") {
                                                            return "Drink tea";
                                                        }
                                                    }
                                                    else if (data.currentproblem!="Migrane") {
                                                        if (data.currentproblem=="Headache") {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.currentproblem!="Headache") {
                                                            if (data.prespiratorydisease == null) {
                                                                return "Eat fruit";
                                                            }
                                                            else if (data.prespiratorydisease=="none") {
                                                                if (data.pcurrentprescriptions == null) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.pcurrentprescriptions=="none") {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.pcurrentprescriptions!="none") {
                                                                    return "Eat fruit";
                                                                }
                                                            }
                                                            else if (data.prespiratorydisease!="none") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.phashighbloodpressure=="1") {
                                                if (data.pweight > 66) {
                                                    if (data.pbmi > 23) {
                                                        if (data.pweight > 98) {
                                                            return "Drink tea";
                                                        }
                                                        else if (data.pweight <= 98) {
                                                            if (data.pbloodtype=="AB") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.pbloodtype!="AB") {
                                                                if (data.page > 61) {
                                                                    if (data.currentproblem == null) {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.currentproblem=="Sour Throat") {
                                                                        return "Do some exercise (cardio)";
                                                                    }
                                                                    else if (data.currentproblem!="Sour Throat") {
                                                                        return "Take Aspirin";
                                                                    }
                                                                }
                                                                else if (data.page <= 61) {
                                                                    return "Have a cold bath";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.pbmi <= 23) {
                                                        if (data.page > 73) {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                        else if (data.page <= 73) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 66) {
                                                    if (data.hourswithproblem > 86) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.hourswithproblem <= 86) {
                                                        if (data.pbmi > 27) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pbmi <= 27) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.pheartdisease!="none") {
                                        if (data.page > 99) {
                                            if (data.pcurrentprescriptions == null) {
                                                return "Do some exercise (cardio)";
                                            }
                                            else if (data.pcurrentprescriptions=="none") {
                                                return "Take acid reducer";
                                            }
                                            else if (data.pcurrentprescriptions!="none") {
                                                return "Do some exercise (cardio)";
                                            }
                                        }
                                        else if (data.page <= 99) {
                                            if (data.pheartdisease=="Cardiovascular Disea") {
                                                if (data.pallergies == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pallergies=="Peanuts") {
                                                    return "Call doctor immediately";
                                                }
                                                else if (data.pallergies!="Peanuts") {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pcurrentprescriptions=="Zocor-Simvastatin") {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pcurrentprescriptions!="Zocor-Simvastatin") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                            }
                                            else if (data.pheartdisease!="Cardiovascular Disea") {
                                                return "Take acid reducer";
                                            }
                                        }
                                    }
                                }
                                else if (data.psmokes=="1") {
                                    if (data.page > 77) {
                                        if (data.pallergies == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pallergies=="none") {
                                            if (data.pbmi > 23) {
                                                if (data.pweight > 59) {
                                                    if (data.page > 111) {
                                                        return "Call doctor immediately";
                                                    }
                                                    else if (data.page <= 111) {
                                                        if (data.hourswithproblem > 71) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.hourswithproblem <= 71) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 59) {
                                                    return "Take Aspirin";
                                                }
                                            }
                                            else if (data.pbmi <= 23) {
                                                if (data.pgender == null) {
                                                    return "Drink tea";
                                                }
                                                else if (data.pgender=="f") {
                                                    if (data.pcognitiveimpairement == null) {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pcognitiveimpairement=="none") {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pcognitiveimpairement!="none") {
                                                        return "Eat hot mushroom soup";
                                                    }
                                                }
                                                else if (data.pgender=="m") {
                                                    return "Take acid reducer";
                                                }
                                            }
                                        }
                                        else if (data.pallergies!="none") {
                                            if (data.page > 82) {
                                                if (data.pweight > 89) {
                                                    if (data.hourswithproblem > 71) {
                                                        if (data.currentproblem == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.currentproblem=="Sour Throat") {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.currentproblem!="Sour Throat") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                    else if (data.hourswithproblem <= 71) {
                                                        if (data.pbmi > 21) {
                                                            return "Take muscle reliever";
                                                        }
                                                        else if (data.pbmi <= 21) {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 89) {
                                                    if (data.phashypertension == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.phashypertension=="0") {
                                                        if (data.pbmi > 26) {
                                                            if (data.pbmi > 31) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.pbmi <= 31) {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                        else if (data.pbmi <= 26) {
                                                            if (data.hourswithproblem > 58) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.hourswithproblem <= 58) {
                                                                return "Eat fruit";
                                                            }
                                                        }
                                                    }
                                                    else if (data.phashypertension=="1") {
                                                        if (data.hourswithproblem > 60) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.hourswithproblem <= 60) {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.page <= 82) {
                                                if (data.pallergies=="Soy") {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pallergies!="Soy") {
                                                    return "Do some exercise (cardio)";
                                                }
                                            }
                                        }
                                    }
                                    else if (data.page <= 77) {
                                        if (data.pbloodtype=="A") {
                                            if (data.page > 65) {
                                                if (data.pmentalillness == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pmentalillness=="none") {
                                                    if (data.pbmi > 26) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.pbmi <= 26) {
                                                        return "Call doctor immediately";
                                                    }
                                                }
                                                else if (data.pmentalillness!="none") {
                                                    return "Eat hot mushroom soup";
                                                }
                                            }
                                            else if (data.page <= 65) {
                                                if (data.pallergies == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pallergies=="Peanuts") {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pallergies!="Peanuts") {
                                                    if (data.pweight > 90) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.pweight <= 90) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.pbloodtype!="A") {
                                            if (data.phasosteoporosis == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.phasosteoporosis=="0") {
                                                return "Have a cold bath";
                                            }
                                            else if (data.phasosteoporosis=="1") {
                                                return "Take acid reducer";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.pbmi <= 18) {
                            if (data.page > 75) {
                                if (data.currentproblem == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.currentproblem=="Headache") {
                                    return "Take acid reducer";
                                }
                                else if (data.currentproblem!="Headache") {
                                    if (data.pweight > 102) {
                                        return "Call doctor immediately";
                                    }
                                    else if (data.pweight <= 102) {
                                        if (data.hourswithproblem > 51) {
                                            if (data.pbloodtype=="A") {
                                                return "Take Aspirin";
                                            }
                                            else if (data.pbloodtype!="A") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                        }
                                        else if (data.hourswithproblem <= 51) {
                                            return "Call doctor immediately";
                                        }
                                    }
                                }
                            }
                            else if (data.page <= 75) {
                                if (data.psmokes == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.psmokes=="0") {
                                    return "Eat fruit";
                                }
                                else if (data.psmokes=="1") {
                                    return "Take acid reducer";
                                }
                            }
                        }
                    }
                    else if (data.hourswithproblem <= 36) {
                        if (data.plastheartevent == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.plastheartevent=="01.01.2015") {
                            return "Have a cold bath";
                        }
                        else if (data.plastheartevent!="01.01.2015") {
                            if (data.hourswithproblem > 16) {
                                if (data.pweight > 105) {
                                    if (data.phashypertension == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.phashypertension=="0") {
                                        return "Take acid reducer";
                                    }
                                    else if (data.phashypertension=="1") {
                                        return "Take Aspirin";
                                    }
                                }
                                else if (data.pweight <= 105) {
                                    if (data.pweight > 94) {
                                        if (data.pallergies == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pallergies=="Peanuts") {
                                            return "Eat hot mushroom soup";
                                        }
                                        else if (data.pallergies!="Peanuts") {
                                            if (data.pgender == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pgender=="f") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pgender=="m") {
                                                if (data.pcurrentprescriptions == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pcurrentprescriptions=="none") {
                                                    return "Drink tea";
                                                }
                                                else if (data.pcurrentprescriptions!="none") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                        }
                                    }
                                    else if (data.pweight <= 94) {
                                        if (data.pallergies == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pallergies=="Fish") {
                                            if (data.pbmi == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pbmi > 19) {
                                                if (data.pbmi > 27) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pbmi <= 27) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                            else if (data.pbmi <= 19) {
                                                return "Do some exercise (cardio)";
                                            }
                                        }
                                        else if (data.pallergies!="Fish") {
                                            if (data.hourswithproblem > 21) {
                                                if (data.page > 74) {
                                                    if (data.page > 88) {
                                                        if (data.pmentalillness == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.pmentalillness=="none") {
                                                            if (data.currentproblem == null) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.currentproblem=="Heartburn") {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.currentproblem!="Heartburn") {
                                                                if (data.pbmi == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.pbmi > 26) {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (data.pbmi <= 26) {
                                                                    return "Take acid reducer";
                                                                }
                                                            }
                                                        }
                                                        else if (data.pmentalillness!="none") {
                                                            return "Call doctor immediately";
                                                        }
                                                    }
                                                    else if (data.page <= 88) {
                                                        if (data.phashypertension == null) {
                                                            return "Eat hot mushroom soup";
                                                        }
                                                        else if (data.phashypertension=="0") {
                                                            return "Call doctor immediately";
                                                        }
                                                        else if (data.phashypertension=="1") {
                                                            return "Eat hot mushroom soup";
                                                        }
                                                    }
                                                }
                                                else if (data.page <= 74) {
                                                    if (data.pweight > 83) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.pweight <= 83) {
                                                        if (data.pallergies=="none") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pallergies!="none") {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.hourswithproblem <= 21) {
                                                if (data.pallergies=="none") {
                                                    if (data.psmokes == null) {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.psmokes=="0") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.psmokes=="1") {
                                                        return "Drink tea";
                                                    }
                                                }
                                                else if (data.pallergies!="none") {
                                                    if (data.page > 108) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.page <= 108) {
                                                        return "Eat fruit";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.hourswithproblem <= 16) {
                                if (data.pbmi == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.pbmi > 19) {
                                    if (data.page > 77) {
                                        if (data.pbmi > 27) {
                                            if (data.hourswithproblem > 4) {
                                                if (data.pcurrentprescriptions == null) {
                                                    return "Call doctor immediately";
                                                }
                                                else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                                    if (data.page > 88) {
                                                        return "Call doctor immediately";
                                                    }
                                                    else if (data.page <= 88) {
                                                        return "Drink tea";
                                                    }
                                                }
                                            }
                                            else if (data.hourswithproblem <= 4) {
                                                if (data.phasosteoporosis == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.phasosteoporosis=="0") {
                                                    return "Eat fruit";
                                                }
                                                else if (data.phasosteoporosis=="1") {
                                                    return "Drink tea";
                                                }
                                            }
                                        }
                                        else if (data.pbmi <= 27) {
                                            if (data.page > 115) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.page <= 115) {
                                                if (data.pheartdisease == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pheartdisease=="none") {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pheartdisease!="none") {
                                                    return "Drink tea";
                                                }
                                            }
                                        }
                                    }
                                    else if (data.page <= 77) {
                                        if (data.pallergies == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pallergies=="none") {
                                            if (data.pbmi > 27) {
                                                return "Have a cold bath";
                                            }
                                            else if (data.pbmi <= 27) {
                                                return "Take acid reducer";
                                            }
                                        }
                                        else if (data.pallergies!="none") {
                                            if (data.pbmi > 30) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.pbmi <= 30) {
                                                return "Call doctor immediately";
                                            }
                                        }
                                    }
                                }
                                else if (data.pbmi <= 19) {
                                    if (data.pgender == null) {
                                        return "Eat hot mushroom soup";
                                    }
                                    else if (data.pgender=="f") {
                                        if (data.phashighbloodpressure == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phashighbloodpressure=="0") {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phashighbloodpressure=="1") {
                                            return "Drink tea";
                                        }
                                    }
                                    else if (data.pgender=="m") {
                                        return "Eat hot mushroom soup";
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
                            if (data.phashighbloodpressure == null) {
                                return "Eat hot mushroom soup";
                            }
                            else if (data.phashighbloodpressure=="0") {
                                return "Rest a little";
                            }
                            else if (data.phashighbloodpressure=="1") {
                                return "Eat hot mushroom soup";
                            }
                        }
                        else if (data.pbmi <= 26) {
                            if (data.currentproblem=="Stomachache or stoma") {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.currentproblem!="Stomachache or stoma") {
                                return "Drink tea";
                            }
                        }
                    }
                }
                else if (data.page <= 107) {
                    if (data.pweight > 51) {
                        if (data.hourswithproblem == null) {
                            return "Drink tea";
                        }
                        else if (data.hourswithproblem > 16) {
                            if (data.pcognitiveimpairement == null) {
                                return "Drink tea";
                            }
                            else if (data.pcognitiveimpairement=="none") {
                                if (data.hourswithproblem > 48) {
                                    if (data.pweight > 53) {
                                        if (data.phasosteoporosis == null) {
                                            return "Drink tea";
                                        }
                                        else if (data.phasosteoporosis=="0") {
                                            if (data.pbmi == null) {
                                                return "Drink tea";
                                            }
                                            else if (data.pbmi > 28) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.pbmi <= 28) {
                                                if (data.prespiratorydisease == null) {
                                                    return "Drink tea";
                                                }
                                                else if (data.prespiratorydisease=="Bronchitis") {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.prespiratorydisease!="Bronchitis") {
                                                    return "Drink tea";
                                                }
                                            }
                                        }
                                        else if (data.phasosteoporosis=="1") {
                                            if (data.hourswithproblem > 69) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.hourswithproblem <= 69) {
                                                return "Drink tea";
                                            }
                                        }
                                    }
                                    else if (data.pweight <= 53) {
                                        if (data.pheartdisease == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pheartdisease=="none") {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pheartdisease!="none") {
                                            return "Drink tea";
                                        }
                                    }
                                }
                                else if (data.hourswithproblem <= 48) {
                                    if (data.page > 93) {
                                        if (data.pbmi == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pbmi > 20) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pbmi <= 20) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                    }
                                    else if (data.page <= 93) {
                                        if (data.page > 64) {
                                            if (data.pbmi == null) {
                                                return "Eat fruit";
                                            }
                                            else if (data.pbmi > 32) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pbmi <= 32) {
                                                return "Eat fruit";
                                            }
                                        }
                                        else if (data.page <= 64) {
                                            if (data.hourswithproblem > 46) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.hourswithproblem <= 46) {
                                                return "Drink tea";
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.pcognitiveimpairement!="none") {
                                return "Drink tea";
                            }
                        }
                        else if (data.hourswithproblem <= 16) {
                            if (data.phasosteoporosis == null) {
                                return "Take acid reducer";
                            }
                            else if (data.phasosteoporosis=="0") {
                                return "Take acid reducer";
                            }
                            else if (data.phasosteoporosis=="1") {
                                return "Drink tea";
                            }
                        }
                    }
                    else if (data.pweight <= 51) {
                        if (data.pbloodtype == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.pbloodtype=="A") {
                            if (data.hourswithproblem == null) {
                                return "Take Aspirin";
                            }
                            else if (data.hourswithproblem > 63) {
                                return "Take muscle reliever";
                            }
                            else if (data.hourswithproblem <= 63) {
                                if (data.pbmi == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.pbmi > 21) {
                                    return "Take Aspirin";
                                }
                                else if (data.pbmi <= 21) {
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
            if (data.plaststroke=="01.01.2019") {
                return "Call doctor immediately";
            }
            else if (data.plaststroke!="01.01.2019") {
                return "Take Aspirin";
            }
        }
        else if (data.pweight <= 103) {
            if (data.hourswithproblem == null) {
                return "Take Aspirin";
            }
            else if (data.hourswithproblem > 36) {
                if (data.phasosteoporosis == null) {
                    return "Take Aspirin";
                }
                else if (data.phasosteoporosis=="0") {
                    if (data.hourswithproblem > 71) {
                        return "Take Aspirin";
                    }
                    else if (data.hourswithproblem <= 71) {
                        if (data.pweight > 63) {
                            if (data.pbmi == null) {
                                return "Eat fruit";
                            }
                            else if (data.pbmi > 28) {
                                return "Take acid reducer";
                            }
                            else if (data.pbmi <= 28) {
                                if (data.pbmi > 21) {
                                    return "Eat fruit";
                                }
                                else if (data.pbmi <= 21) {
                                    return "Eat hot mushroom soup";
                                }
                            }
                        }
                        else if (data.pweight <= 63) {
                            return "Take NSAID (Pain reliever)";
                        }
                    }
                }
                else if (data.phasosteoporosis=="1") {
                    if (data.pweight > 90) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.pweight <= 90) {
                        return "Take Aspirin";
                    }
                }
            }
            else if (data.hourswithproblem <= 36) {
                if (data.plaststroke=="01.01.2019") {
                    return "Take Aspirin";
                }
                else if (data.plaststroke!="01.01.2019") {
                    if (data.currentproblem == null) {
                        return "Take acid reducer";
                    }
                    else if (data.currentproblem=="Heartburn") {
                        return "Take Aspirin";
                    }
                    else if (data.currentproblem!="Heartburn") {
                        return "Take acid reducer";
                    }
                }
            }
        }
    }
    return null;
}
