/**
*  Predictor for BESTSOLUTION from model/5ce1c8b23514cd6062010b43
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictBestsolution(data) {

    var TERM_ANALYSIS = {
        "paddress": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
        "pemail": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
        "pdoctoremail": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
        "pname": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
        "pnearesthospital": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
        "emergencycontactname": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
    }
    var TERM_FORMS = {
        "emergencycontactname": {
        },

        "pdoctoremail": {
        },

        "paddress": {
        },

        "pemail": {
        },

        "pnearesthospital": {
            "associates": ['associates', 'associated'],
        },

        "pname": {
        },

    }



    var TM_TOKENS = 'tokens_only', TM_FULL_TERM = 'full_terms_only', TM_ALL = 'all';
    var FULL_TERM_PATTERN = new RegExp('^.+\b.+$');

    function termMatches(text, fieldLabel, term) {
      /**
       * Computes term matches depending on the chosen text analysis options
       *
       * @param {string} text Input text
       * @param {string} fieldLabel Name of the field
       * @param {string} term Term to compare
       */

      var options = TERM_ANALYSIS[fieldLabel];
      var fieldTerms = TERM_FORMS[fieldLabel];
      var terms = (typeof fieldTerms[term] === 'undefined') ?
          [term] : fieldTerms[term];
      var tokenMode = options['token_mode'];
      var caseSensitive = options['case_sensitive'];
      var firstTerm = terms[0];
      if (tokenMode === TM_FULL_TERM) {
        return fullTermMatch(text, firstTerm, caseSensitive);
      }
      if (tokenMode === TM_ALL && terms.length == 1) {
        if (firstTerm.match(FULL_TERM_PATTERN)) {
           return fullTermMatch(text, firstTerm, caseSensitive);
        }
      }
      return termMatchesTokens(text, terms, caseSensitive);
    };


    function fullTermMatch(text, fullTerm, caseSensitive) {
      /**
       * Counts the match for full terms according to the caseSensitive option
       *
       * @param {string} text Input text
       * @param {string} fullTerm String to match
       * @param {boolean} caseSensitive Text analysis case_sensitive option
       */

      if (!caseSensitive) {
        text = text.toLowerCase();
        fullTerm = fullTerm.toLowerCase();
      }
      return (text == fullTerm) ? 1 : 0;
    }

    function getTokensFlags(caseSensitive) {
      /**
       * Modifiers for RegExp matching according to case_sensitive option
       *
       * @param {boolean} caseSensitive Text analysis case_sensitive option
       */
      var flags = 'g';
      if (!caseSensitive) {
        flags += 'i';
      }
      return flags;
    }


    function termMatchesTokens(text, terms, caseSensitive) {
      /**
       * Computes term matches depending on the chosen text analysis options
       *
       * @param {string} text Input text
       * @param {array} terms String array of terms to match
       * @param {boolean} caseSensitive Text analysis case_sensitive option
       */

      var flags = getTokensFlags(caseSensitive);
      var terms = terms.join('(\\b|_)|(\\b|_)');
      var pattern = new RegExp('(\\b|_)' + terms + '(\\b|_)', flags);
      var matches = text.match(pattern);
      return (matches == null) ? 0 : matches.length;
    }

    if (data.pnearesthospital == null) {
        return "Take NSAID (Pain reliever)";
    }
    else if (termMatches(data.pnearesthospital, "pnearesthospital", "medi") > 0) {
        if (data.pdoctorid == null) {
            return "Do some exercise (cardio)";
        }
        else if (data.pdoctorid > 5359) {
            return "Do some exercise (cardio)";
        }
        else if (data.pdoctorid <= 5359) {
            return "Eat fruit";
        }
    }
    else if (termMatches(data.pnearesthospital, "pnearesthospital", "medi") <= 0) {
        if (data.pcognitiveimpairement == null) {
            return "Take NSAID (Pain reliever)";
        }
        else if (data.pcognitiveimpairement=="none") {
            if (termMatches(data.pnearesthospital, "pnearesthospital", "associates") > 0) {
                if (data.pweight == null) {
                    return "Take Aspirin";
                }
                else if (data.pweight > 68) {
                    if (data.pcurrentprescriptions == null) {
                        return "Have a cold bath";
                    }
                    else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                        return "Have a cold bath";
                    }
                    else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                        return "Eat hot mushroom soup";
                    }
                }
                else if (data.pweight <= 68) {
                    return "Take Aspirin";
                }
            }
            else if (termMatches(data.pnearesthospital, "pnearesthospital", "associates") <= 0) {
                if (data.pbmi == null) {
                    return "Take NSAID (Pain reliever)";
                }
                else if (data.pbmi > 26) {
                    if (data.pweight == null) {
                        return "Take acid reducer";
                    }
                    else if (data.pweight > 95) {
                        if (data.pdoctorphone == null) {
                            return "Take acid reducer";
                        }
                        else if (data.pdoctorphone > 1613652238) {
                            if (data.pdoctorid == null) {
                                return "Take Aspirin";
                            }
                            else if (data.pdoctorid > 5768) {
                                if (data.pphone == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.pphone > 1340818392) {
                                    return "Take Aspirin";
                                }
                                else if (data.pphone <= 1340818392) {
                                    return "Take NSAID (Pain reliever)";
                                }
                            }
                            else if (data.pdoctorid <= 5768) {
                                if (data.page == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.page > 70) {
                                    if (data.pbloodtype == null) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.pbloodtype=="O") {
                                        if (data.pdoctoremail == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                            if (data.emergencycontactphone == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.emergencycontactphone > 2620247664) {
                                                return "Take muscle reliever";
                                            }
                                            else if (data.emergencycontactphone <= 2620247664) {
                                                return "Take acid reducer";
                                            }
                                        }
                                        else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                            if (data.pbmi > 27) {
                                                if (data.pbmi > 32) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pbmi <= 32) {
                                                    return "Take acid reducer";
                                                }
                                            }
                                            else if (data.pbmi <= 27) {
                                                return "Take Aspirin";
                                            }
                                        }
                                    }
                                    else if (data.pbloodtype!="O") {
                                        if (data.paddress == null) {
                                            return "Take Aspirin";
                                        }
                                        else if (termMatches(data.paddress, "paddress", "street") > 0) {
                                            if (data.pdoctorid > 5059) {
                                                return "Drink tea";
                                            }
                                            else if (data.pdoctorid <= 5059) {
                                                return "Eat fruit";
                                            }
                                        }
                                        else if (termMatches(data.paddress, "paddress", "street") <= 0) {
                                            if (data.pdoctorphone > 1824794969) {
                                                if (data.page > 86) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.page <= 86) {
                                                    return "Take Aspirin";
                                                }
                                            }
                                            else if (data.pdoctorphone <= 1824794969) {
                                                return "Take acid reducer";
                                            }
                                        }
                                    }
                                }
                                else if (data.page <= 70) {
                                    if (data.emergencycontactphone == null) {
                                        return "Call doctor immediately";
                                    }
                                    else if (data.emergencycontactphone > 3373921075) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.emergencycontactphone <= 3373921075) {
                                        if (data.psmokes == null) {
                                            return "Call doctor immediately";
                                        }
                                        else if (data.psmokes=="1") {
                                            return "Take muscle reliever";
                                        }
                                        else if (data.psmokes=="0") {
                                            return "Call doctor immediately";
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.pdoctorphone <= 1613652238) {
                            if (data.phasosteoporosis == null) {
                                return "Take acid reducer";
                            }
                            else if (data.phasosteoporosis=="0") {
                                if (data.page == null) {
                                    return "Eat fruit";
                                }
                                else if (data.page > 81) {
                                    return "Eat fruit";
                                }
                                else if (data.page <= 81) {
                                    if (data.pbmi > 30) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.pbmi <= 30) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                }
                            }
                            else if (data.phasosteoporosis=="1") {
                                if (data.pphone == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.pphone > 1240061761) {
                                    if (data.pbloodtype == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pbloodtype=="B") {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pbloodtype!="B") {
                                        if (data.emergencycontactphone == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.emergencycontactphone > 507767636) {
                                            if (data.pphone > 3150014601) {
                                                return "Have a cold bath";
                                            }
                                            else if (data.pphone <= 3150014601) {
                                                return "Take acid reducer";
                                            }
                                        }
                                        else if (data.emergencycontactphone <= 507767636) {
                                            return "Do some exercise (cardio)";
                                        }
                                    }
                                }
                                else if (data.pphone <= 1240061761) {
                                    if (data.pdoctorphone > 659705253) {
                                        return "Drink tea";
                                    }
                                    else if (data.pdoctorphone <= 659705253) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                }
                            }
                        }
                    }
                    else if (data.pweight <= 95) {
                        if (data.emergencycontactphone == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.emergencycontactphone > 1234445949) {
                            if (data.pphone == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pphone > 1612673549) {
                                if (data.pphone > 2919610931) {
                                    if (data.emergencycontactphone > 2424638185) {
                                        if (data.pphone > 3387375326) {
                                            if (data.pweight > 81) {
                                                if (data.pbloodtype == null) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pbloodtype=="A") {
                                                    if (data.emergencycontactphone > 3180269222) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.emergencycontactphone <= 3180269222) {
                                                        return "Take acid reducer";
                                                    }
                                                }
                                                else if (data.pbloodtype!="A") {
                                                    if (data.pdoctorphone == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pdoctorphone > 2312148528) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pdoctorphone <= 2312148528) {
                                                        return "Take acid reducer";
                                                    }
                                                }
                                            }
                                            else if (data.pweight <= 81) {
                                                if (termMatches(data.pnearesthospital, "pnearesthospital", "co") > 0) {
                                                    return "Take Aspirin";
                                                }
                                                else if (termMatches(data.pnearesthospital, "pnearesthospital", "co") <= 0) {
                                                    return "Eat fruit";
                                                }
                                            }
                                        }
                                        else if (data.pphone <= 3387375326) {
                                            if (data.pdoctoremail == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "ca") > 0) {
                                                return "Take Aspirin";
                                            }
                                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "ca") <= 0) {
                                                if (data.emergencycontactphone > 3400544393) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.emergencycontactphone <= 3400544393) {
                                                    return "Take acid reducer";
                                                }
                                            }
                                        }
                                    }
                                    else if (data.emergencycontactphone <= 2424638185) {
                                        if (data.page == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.page > 65) {
                                            if (data.pphone > 3775460476) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pphone <= 3775460476) {
                                                if (data.pdoctoremail == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                                    return "Take Aspirin";
                                                }
                                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                                    return "Take Aspirin";
                                                }
                                            }
                                        }
                                        else if (data.page <= 65) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                    }
                                }
                                else if (data.pphone <= 2919610931) {
                                    if (data.pdoctorphone == null) {
                                        return "Have a cold bath";
                                    }
                                    else if (data.pdoctorphone > 3423984451) {
                                        if (data.pweight > 88) {
                                            if (data.pbmi > 30) {
                                                return "Call doctor immediately";
                                            }
                                            else if (data.pbmi <= 30) {
                                                return "Have a cold bath";
                                            }
                                        }
                                        else if (data.pweight <= 88) {
                                            if (data.pcurrentprescriptions == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pcurrentprescriptions=="Zocor-Simvastatin") {
                                                return "Drink tea";
                                            }
                                            else if (data.pcurrentprescriptions!="Zocor-Simvastatin") {
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
                                    }
                                    else if (data.pdoctorphone <= 3423984451) {
                                        if (data.pbloodtype == null) {
                                            return "Have a cold bath";
                                        }
                                        else if (data.pbloodtype=="O") {
                                            if (data.emergencycontactphone > 2668346301) {
                                                if (data.pphone > 2700453749) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pphone <= 2700453749) {
                                                    if (data.pdoctorid == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pdoctorid > 5125) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pdoctorid <= 5125) {
                                                        return "Eat hot mushroom soup";
                                                    }
                                                }
                                            }
                                            else if (data.emergencycontactphone <= 2668346301) {
                                                if (data.pdoctorid == null) {
                                                    return "Call doctor immediately";
                                                }
                                                else if (data.pdoctorid > 5045) {
                                                    if (data.paddress == null) {
                                                        return "Call doctor immediately";
                                                    }
                                                    else if (termMatches(data.paddress, "paddress", "ave") > 0) {
                                                        return "Take muscle reliever";
                                                    }
                                                    else if (termMatches(data.paddress, "paddress", "ave") <= 0) {
                                                        return "Have a cold bath";
                                                    }
                                                }
                                                else if (data.pdoctorid <= 5045) {
                                                    return "Take Aspirin";
                                                }
                                            }
                                        }
                                        else if (data.pbloodtype!="O") {
                                            if (data.pdoctorid == null) {
                                                return "Have a cold bath";
                                            }
                                            else if (data.pdoctorid > 5706) {
                                                if (data.pdoctorid > 5905) {
                                                    if (data.pbmi > 30) {
                                                        return "Eat hot mushroom soup";
                                                    }
                                                    else if (data.pbmi <= 30) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                                else if (data.pdoctorid <= 5905) {
                                                    if (data.page == null) {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.page > 70) {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.page <= 70) {
                                                        return "Call doctor immediately";
                                                    }
                                                }
                                            }
                                            else if (data.pdoctorid <= 5706) {
                                                if (data.pallergies == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pallergies=="Soy") {
                                                    if (data.pphone > 2322395005) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pphone <= 2322395005) {
                                                        return "Have a cold bath";
                                                    }
                                                }
                                                else if (data.pallergies!="Soy") {
                                                    if (data.pheartdisease == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pheartdisease=="Heart Arrhythmia") {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.pheartdisease!="Heart Arrhythmia") {
                                                        if (data.emergencycontactphone > 1998098166) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.emergencycontactphone <= 1998098166) {
                                                            return "Eat fruit";
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.pphone <= 1612673549) {
                                if (data.pweight > 62) {
                                    if (data.emergencycontactphone > 2418424821) {
                                        if (data.phashighbloodpressure == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phashighbloodpressure=="0") {
                                            if (data.pphone > 1057988038) {
                                                return "Drink tea";
                                            }
                                            else if (data.pphone <= 1057988038) {
                                                if (data.emergencycontactphone > 3373626752) {
                                                    return "Rest a little";
                                                }
                                                else if (data.emergencycontactphone <= 3373626752) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                        }
                                        else if (data.phashighbloodpressure=="1") {
                                            if (data.pheartdisease == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pheartdisease=="Heart Arrhythmia") {
                                                return "Take acid reducer";
                                            }
                                            else if (data.pheartdisease!="Heart Arrhythmia") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                        }
                                    }
                                    else if (data.emergencycontactphone <= 2418424821) {
                                        if (data.pdoctorid == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pdoctorid > 5352) {
                                            if (data.emergencycontactphone > 2311098980) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.emergencycontactphone <= 2311098980) {
                                                if (data.pphone > 237235421) {
                                                    if (data.pbmi > 30) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pbmi <= 30) {
                                                        if (data.currentproblem == null) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.currentproblem=="Back Pain") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.currentproblem!="Back Pain") {
                                                            return "Eat fruit";
                                                        }
                                                    }
                                                }
                                                else if (data.pphone <= 237235421) {
                                                    return "Take acid reducer";
                                                }
                                            }
                                        }
                                        else if (data.pdoctorid <= 5352) {
                                            if (data.pdoctorphone == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.pdoctorphone > 2345243968) {
                                                if (data.pbmi > 32) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pbmi <= 32) {
                                                    return "Drink tea";
                                                }
                                            }
                                            else if (data.pdoctorphone <= 2345243968) {
                                                return "Take acid reducer";
                                            }
                                        }
                                    }
                                }
                                else if (data.pweight <= 62) {
                                    if (data.pdoctorid == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pdoctorid > 5283) {
                                        if (data.phashighbloodpressure == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phashighbloodpressure=="0") {
                                            if (data.emergencycontactphone > 2584842010) {
                                                if (data.pdoctorphone == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pdoctorphone > 3638453367) {
                                                    return "Call doctor immediately";
                                                }
                                                else if (data.pdoctorphone <= 3638453367) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                            else if (data.emergencycontactphone <= 2584842010) {
                                                return "Take Aspirin";
                                            }
                                        }
                                        else if (data.phashighbloodpressure=="1") {
                                            return "Take acid reducer";
                                        }
                                    }
                                    else if (data.pdoctorid <= 5283) {
                                        if (data.pweight > 54) {
                                            return "Drink tea";
                                        }
                                        else if (data.pweight <= 54) {
                                            return "Eat fruit";
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.emergencycontactphone <= 1234445949) {
                            if (data.pdoctorphone == null) {
                                return "Take acid reducer";
                            }
                            else if (data.pdoctorphone > 1846576020) {
                                if (data.pphone == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.pphone > 3207395567) {
                                    if (data.pdoctorid == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pdoctorid > 5828) {
                                        return "Do some exercise (cardio)";
                                    }
                                    else if (data.pdoctorid <= 5828) {
                                        if (data.pweight > 87) {
                                            return "Eat fruit";
                                        }
                                        else if (data.pweight <= 87) {
                                            if (data.paddress == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (termMatches(data.paddress, "paddress", "87") > 0) {
                                                return "Eat fruit";
                                            }
                                            else if (termMatches(data.paddress, "paddress", "87") <= 0) {
                                                return "Take acid reducer";
                                            }
                                        }
                                    }
                                }
                                else if (data.pphone <= 3207395567) {
                                    if (data.paddress == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (termMatches(data.paddress, "paddress", "street") > 0) {
                                        return "Eat fruit";
                                    }
                                    else if (termMatches(data.paddress, "paddress", "street") <= 0) {
                                        if (data.pphone > 2549664510) {
                                            return "Drink tea";
                                        }
                                        else if (data.pphone <= 2549664510) {
                                            if (data.page == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.page > 92) {
                                                if (data.pdoctoremail == null) {
                                                    return "Have a cold bath";
                                                }
                                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                                    return "Take acid reducer";
                                                }
                                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                                    if (data.pdoctorid == null) {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.pdoctorid > 5592) {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.pdoctorid <= 5592) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                            }
                                            else if (data.page <= 92) {
                                                if (termMatches(data.paddress, "paddress", "96") > 0) {
                                                    return "Take Aspirin";
                                                }
                                                else if (termMatches(data.paddress, "paddress", "96") <= 0) {
                                                    return "Take acid reducer";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.pdoctorphone <= 1846576020) {
                                if (data.pdoctorid == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.pdoctorid > 5184) {
                                    if (data.pbmi > 29) {
                                        if (data.pweight > 80) {
                                            return "Take muscle reliever";
                                        }
                                        else if (data.pweight <= 80) {
                                            return "Take Aspirin";
                                        }
                                    }
                                    else if (data.pbmi <= 29) {
                                        if (data.pphone == null) {
                                            return "Take Aspirin";
                                        }
                                        else if (data.pphone > 3314452581) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pphone <= 3314452581) {
                                            return "Take Aspirin";
                                        }
                                    }
                                }
                                else if (data.pdoctorid <= 5184) {
                                    if (data.pdoctorphone > 601593061) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pdoctorphone <= 601593061) {
                                        return "Have a cold bath";
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.pbmi <= 26) {
                    if (data.pcurrentprescriptions == null) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                        if (data.emergencycontactphone == null) {
                            return "Take Aspirin";
                        }
                        else if (data.emergencycontactphone > 2691613198) {
                            if (data.pdoctorphone == null) {
                                return "Take Aspirin";
                            }
                            else if (data.pdoctorphone > 3134494020) {
                                if (data.pdoctorid == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.pdoctorid > 5586) {
                                    if (data.plastheartevent == null) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.plastheartevent=="00.00.0000") {
                                        return "Take Aspirin";
                                    }
                                    else if (data.plastheartevent!="00.00.0000") {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                }
                                else if (data.pdoctorid <= 5586) {
                                    if (data.pdoctorid > 5373) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pdoctorid <= 5373) {
                                        return "Call doctor immediately";
                                    }
                                }
                            }
                            else if (data.pdoctorphone <= 3134494020) {
                                if (data.emergencycontactphone > 3477693063) {
                                    if (data.pdoctorphone > 964965960) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.pdoctorphone <= 964965960) {
                                        return "Take acid reducer";
                                    }
                                }
                                else if (data.emergencycontactphone <= 3477693063) {
                                    if (data.pdoctorphone > 2646055754) {
                                        return "Eat fruit";
                                    }
                                    else if (data.pdoctorphone <= 2646055754) {
                                        if (data.emergencycontactphone > 3418756768) {
                                            return "Do some exercise (cardio)";
                                        }
                                        else if (data.emergencycontactphone <= 3418756768) {
                                            return "Take acid reducer";
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.emergencycontactphone <= 2691613198) {
                            if (data.psmokes == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.psmokes=="1") {
                                if (data.emergencycontactphone > 1434449827) {
                                    if (data.pphone == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pphone > 2266251080) {
                                        if (data.emergencycontactphone > 2166290573) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.emergencycontactphone <= 2166290573) {
                                            return "Do some exercise (cardio)";
                                        }
                                    }
                                    else if (data.pphone <= 2266251080) {
                                        if (data.pdoctorid == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pdoctorid > 5830) {
                                            return "Take Aspirin";
                                        }
                                        else if (data.pdoctorid <= 5830) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                    }
                                }
                                else if (data.emergencycontactphone <= 1434449827) {
                                    if (data.pdoctorid == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pdoctorid > 5439) {
                                        if (data.pgender == null) {
                                            return "Call doctor immediately";
                                        }
                                        else if (data.pgender=="f") {
                                            return "Take muscle reliever";
                                        }
                                        else if (data.pgender=="m") {
                                            return "Call doctor immediately";
                                        }
                                    }
                                    else if (data.pdoctorid <= 5439) {
                                        return "Take acid reducer";
                                    }
                                }
                            }
                            else if (data.psmokes=="0") {
                                if (data.phasosteoporosis == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.phasosteoporosis=="0") {
                                    if (data.pdoctorid == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pdoctorid > 5449) {
                                        return "Eat fruit";
                                    }
                                    else if (data.pdoctorid <= 5449) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                }
                                else if (data.phasosteoporosis=="1") {
                                    if (data.pphone == null) {
                                        return "Drink tea";
                                    }
                                    else if (data.pphone > 3532197273) {
                                        return "Call doctor immediately";
                                    }
                                    else if (data.pphone <= 3532197273) {
                                        if (data.pbmi > 24) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pbmi <= 24) {
                                            return "Drink tea";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                        if (data.pdoctorphone == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.pdoctorphone > 3499570003) {
                            if (data.pphone == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pphone > 1416735804) {
                                if (data.pphone > 2279744187) {
                                    if (data.pdoctorid == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pdoctorid > 5325) {
                                        if (data.emergencycontactphone == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.emergencycontactphone > 2832911498) {
                                            if (data.currentproblem == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.currentproblem=="Stomachache or stoma") {
                                                return "Eat fruit";
                                            }
                                            else if (data.currentproblem!="Stomachache or stoma") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                        }
                                        else if (data.emergencycontactphone <= 2832911498) {
                                            if (data.pdoctorphone > 3618178421) {
                                                if (data.phashighbloodpressure == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.phashighbloodpressure=="0") {
                                                    if (data.pbmi > 17) {
                                                        if (data.emergencycontactphone > 2383592795) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.emergencycontactphone <= 2383592795) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                    else if (data.pbmi <= 17) {
                                                        return "Take acid reducer";
                                                    }
                                                }
                                                else if (data.phashighbloodpressure=="1") {
                                                    return "Take Aspirin";
                                                }
                                            }
                                            else if (data.pdoctorphone <= 3618178421) {
                                                return "Eat fruit";
                                            }
                                        }
                                    }
                                    else if (data.pdoctorid <= 5325) {
                                        if (data.pdoctorid > 5166) {
                                            if (data.prespiratorydisease == null) {
                                                return "Call doctor immediately";
                                            }
                                            else if (data.prespiratorydisease=="none") {
                                                return "Call doctor immediately";
                                            }
                                            else if (data.prespiratorydisease!="none") {
                                                return "Take acid reducer";
                                            }
                                        }
                                        else if (data.pdoctorid <= 5166) {
                                            if (data.pdoctorid > 5037) {
                                                if (data.pdoctorid > 5142) {
                                                    return "Drink tea";
                                                }
                                                else if (data.pdoctorid <= 5142) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                            else if (data.pdoctorid <= 5037) {
                                                return "Take acid reducer";
                                            }
                                        }
                                    }
                                }
                                else if (data.pphone <= 2279744187) {
                                    if (data.emergencycontactphone == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (data.emergencycontactphone > 1009300091) {
                                        if (data.pdoctorid == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pdoctorid > 5425) {
                                            if (data.paddress == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (termMatches(data.paddress, "paddress", "street") > 0) {
                                                return "Eat fruit";
                                            }
                                            else if (termMatches(data.paddress, "paddress", "street") <= 0) {
                                                return "Take acid reducer";
                                            }
                                        }
                                        else if (data.pdoctorid <= 5425) {
                                            return "Call doctor immediately";
                                        }
                                    }
                                    else if (data.emergencycontactphone <= 1009300091) {
                                        return "Take muscle reliever";
                                    }
                                }
                            }
                            else if (data.pphone <= 1416735804) {
                                if (data.pdoctorid == null) {
                                    return "Eat fruit";
                                }
                                else if (data.pdoctorid > 5133) {
                                    if (data.pdoctorid > 5844) {
                                        return "Eat fruit";
                                    }
                                    else if (data.pdoctorid <= 5844) {
                                        if (data.page == null) {
                                            return "Call doctor immediately";
                                        }
                                        else if (data.page > 109) {
                                            if (data.pmentalillness == null) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.pmentalillness=="none") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pmentalillness!="none") {
                                                return "Take Aspirin";
                                            }
                                        }
                                        else if (data.page <= 109) {
                                            if (data.pcurrentprescriptions=="Zostrol & Prinivil (Lisinopril)") {
                                                return "Call doctor immediately";
                                            }
                                            else if (data.pcurrentprescriptions!="Zostrol & Prinivil (Lisinopril)") {
                                                if (data.phasosteoporosis == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.phasosteoporosis=="0") {
                                                    if (data.plastheartevent == null) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.plastheartevent=="00.00.0000") {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.plastheartevent!="00.00.0000") {
                                                        return "Take Aspirin";
                                                    }
                                                }
                                                else if (data.phasosteoporosis=="1") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.pdoctorid <= 5133) {
                                    if (data.pbmi > 17) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.pbmi <= 17) {
                                        return "Have a cold bath";
                                    }
                                }
                            }
                        }
                        else if (data.pdoctorphone <= 3499570003) {
                            if (data.pdoctorid == null) {
                                return "Take Aspirin";
                            }
                            else if (data.pdoctorid > 5876) {
                                if (data.paddress == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (termMatches(data.paddress, "paddress", "drive") > 0) {
                                    return "Call doctor immediately";
                                }
                                else if (termMatches(data.paddress, "paddress", "drive") <= 0) {
                                    if (data.emergencycontactphone == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.emergencycontactphone > 1964716172) {
                                        if (data.prespiratorydisease == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.prespiratorydisease=="none") {
                                            if (data.pdoctorphone > 3105577012) {
                                                return "Eat hot mushroom soup";
                                            }
                                            else if (data.pdoctorphone <= 3105577012) {
                                                if (data.pdoctorphone > 1549197804) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pdoctorphone <= 1549197804) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                        }
                                        else if (data.prespiratorydisease!="none") {
                                            return "Have a cold bath";
                                        }
                                    }
                                    else if (data.emergencycontactphone <= 1964716172) {
                                        if (data.emergencycontactphone > 888468365) {
                                            return "Eat hot mushroom soup";
                                        }
                                        else if (data.emergencycontactphone <= 888468365) {
                                            if (data.pdoctorid > 5926) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.pdoctorid <= 5926) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.pdoctorid <= 5876) {
                                if (data.pweight == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.pweight > 106) {
                                    if (data.pdoctorphone > 2259980343) {
                                        if (data.pweight > 108) {
                                            return "Eat fruit";
                                        }
                                        else if (data.pweight <= 108) {
                                            return "Take Aspirin";
                                        }
                                    }
                                    else if (data.pdoctorphone <= 2259980343) {
                                        if (data.paddress == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (termMatches(data.paddress, "paddress", "road") > 0) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (termMatches(data.paddress, "paddress", "road") <= 0) {
                                            if (data.pmentalillness == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pmentalillness=="none") {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pmentalillness!="none") {
                                                return "Have a cold bath";
                                            }
                                        }
                                    }
                                }
                                else if (data.pweight <= 106) {
                                    if (data.pdoctorphone > 2275096293) {
                                        if (data.page == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.page > 114) {
                                            if (data.pbmi > 25) {
                                                return "Rest a little";
                                            }
                                            else if (data.pbmi <= 25) {
                                                if (data.emergencycontactname == null) {
                                                    return "Take acid reducer";
                                                }
                                                else if (termMatches(data.emergencycontactname, "emergencycontactname", "pleasence") > 0) {
                                                    return "Drink tea";
                                                }
                                                else if (termMatches(data.emergencycontactname, "emergencycontactname", "pleasence") <= 0) {
                                                    return "Take acid reducer";
                                                }
                                            }
                                        }
                                        else if (data.page <= 114) {
                                            if (data.page > 105) {
                                                if (data.pphone == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pphone > 1368532444) {
                                                    if (data.pbloodtype == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pbloodtype=="A") {
                                                        if (data.phashighbloodpressure == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.phashighbloodpressure=="0") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.phashighbloodpressure=="1") {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                    else if (data.pbloodtype!="A") {
                                                        if (data.emergencycontactphone == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.emergencycontactphone > 2458995384) {
                                                            return "Call doctor immediately";
                                                        }
                                                        else if (data.emergencycontactphone <= 2458995384) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                }
                                                else if (data.pphone <= 1368532444) {
                                                    if (data.paddress == null) {
                                                        return "Call doctor immediately";
                                                    }
                                                    else if (termMatches(data.paddress, "paddress", "drive") > 0) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (termMatches(data.paddress, "paddress", "drive") <= 0) {
                                                        return "Call doctor immediately";
                                                    }
                                                }
                                            }
                                            else if (data.page <= 105) {
                                                if (data.pbloodtype == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pbloodtype=="O") {
                                                    if (data.pdoctorid > 5688) {
                                                        if (data.phasosteoporosis == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.phasosteoporosis=="0") {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.phasosteoporosis=="1") {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                    else if (data.pdoctorid <= 5688) {
                                                        if (data.pweight > 72) {
                                                            if (data.pbmi > 19) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.pbmi <= 19) {
                                                                if (data.psmokes == null) {
                                                                    return "Drink tea";
                                                                }
                                                                else if (data.psmokes=="1") {
                                                                    return "Drink tea";
                                                                }
                                                                else if (data.psmokes=="0") {
                                                                    return "Call doctor immediately";
                                                                }
                                                            }
                                                        }
                                                        else if (data.pweight <= 72) {
                                                            if (data.pdoctorphone > 3368506174) {
                                                                return "Take muscle reliever";
                                                            }
                                                            else if (data.pdoctorphone <= 3368506174) {
                                                                if (data.pname == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (termMatches(data.pname, "pname", "sharon") > 0) {
                                                                    return "Call doctor immediately";
                                                                }
                                                                else if (termMatches(data.pname, "pname", "sharon") <= 0) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.pbloodtype!="O") {
                                                    if (data.pdoctorphone > 2713866058) {
                                                        if (data.pdoctorphone > 2937902229) {
                                                            if (data.pbmi > 20) {
                                                                if (data.phasosteoporosis == null) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.phasosteoporosis=="0") {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (data.phasosteoporosis=="1") {
                                                                    return "Eat fruit";
                                                                }
                                                            }
                                                            else if (data.pbmi <= 20) {
                                                                if (data.pbmi > 18) {
                                                                    return "Drink tea";
                                                                }
                                                                else if (data.pbmi <= 18) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                        }
                                                        else if (data.pdoctorphone <= 2937902229) {
                                                            if (data.pemail == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (termMatches(data.pemail, "pemail", "jp") > 0) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (termMatches(data.pemail, "pemail", "jp") <= 0) {
                                                                if (data.paddress == null) {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "87") > 0) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "87") <= 0) {
                                                                    return "Take Aspirin";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.pdoctorphone <= 2713866058) {
                                                        if (data.pgender == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.pgender=="f") {
                                                            if (data.pphone == null) {
                                                                return "Eat fruit";
                                                            }
                                                            else if (data.pphone > 2666365479) {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.pphone <= 2666365479) {
                                                                if (data.pdoctorphone > 2613935781) {
                                                                    return "Call doctor immediately";
                                                                }
                                                                else if (data.pdoctorphone <= 2613935781) {
                                                                    return "Eat fruit";
                                                                }
                                                            }
                                                        }
                                                        else if (data.pgender=="m") {
                                                            if (data.emergencycontactphone == null) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.emergencycontactphone > 767346377) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.emergencycontactphone <= 767346377) {
                                                                return "Take muscle reliever";
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.pdoctorphone <= 2275096293) {
                                        if (data.pdoctorphone > 1677505272) {
                                            if (data.paddress == null) {
                                                return "Take Aspirin";
                                            }
                                            else if (termMatches(data.paddress, "paddress", "road") > 0) {
                                                if (data.pgender == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pgender=="f") {
                                                    if (data.pbmi > 22) {
                                                        return "Do some exercise (cardio)";
                                                    }
                                                    else if (data.pbmi <= 22) {
                                                        return "Eat fruit";
                                                    }
                                                }
                                                else if (data.pgender=="m") {
                                                    return "Have a cold bath";
                                                }
                                            }
                                            else if (termMatches(data.paddress, "paddress", "road") <= 0) {
                                                if (data.pdoctorphone > 1885551288) {
                                                    if (data.pmentalillness == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pmentalillness=="none") {
                                                        if (data.pdoctorid > 5661) {
                                                            if (data.pbmi > 19) {
                                                                return "Do some exercise (cardio)";
                                                            }
                                                            else if (data.pbmi <= 19) {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                        else if (data.pdoctorid <= 5661) {
                                                            if (data.page == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.page > 114) {
                                                                return "Call doctor immediately";
                                                            }
                                                            else if (data.page <= 114) {
                                                                if (data.pweight > 71) {
                                                                    return "Eat hot mushroom soup";
                                                                }
                                                                else if (data.pweight <= 71) {
                                                                    return "Take Aspirin";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.pmentalillness!="none") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                                else if (data.pdoctorphone <= 1885551288) {
                                                    if (data.pdoctorid > 5582) {
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
                                                    else if (data.pdoctorid <= 5582) {
                                                        if (data.pemail == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (termMatches(data.pemail, "pemail", "com") > 0) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (termMatches(data.pemail, "pemail", "com") <= 0) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.pdoctorphone <= 1677505272) {
                                            if (data.pweight > 55) {
                                                if (data.emergencycontactphone == null) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.emergencycontactphone > 2207077866) {
                                                    if (data.pphone == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pphone > 3716349986) {
                                                        if (data.emergencycontactphone > 3478025717) {
                                                            if (data.pdoctorid > 5386) {
                                                                return "Eat fruit";
                                                            }
                                                            else if (data.pdoctorid <= 5386) {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                        else if (data.emergencycontactphone <= 3478025717) {
                                                            return "Drink tea";
                                                        }
                                                    }
                                                    else if (data.pphone <= 3716349986) {
                                                        if (data.currentproblem == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.currentproblem=="Stomachache or stoma") {
                                                            if (data.page == null) {
                                                                return "Have a cold bath";
                                                            }
                                                            else if (data.page > 112) {
                                                                return "Have a cold bath";
                                                            }
                                                            else if (data.page <= 112) {
                                                                if (data.pweight > 95) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (data.pweight <= 95) {
                                                                    return "Eat hot mushroom soup";
                                                                }
                                                            }
                                                        }
                                                        else if (data.currentproblem!="Stomachache or stoma") {
                                                            if (data.pdoctoremail == null) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                                                if (data.paddress == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "street") > 0) {
                                                                    if (data.pphone > 1851197732) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.pphone <= 1851197732) {
                                                                        return "Eat hot mushroom soup";
                                                                    }
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "street") <= 0) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                                                if (data.pphone > 2513572297) {
                                                                    if (data.phashighbloodpressure == null) {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.phashighbloodpressure=="0") {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.phashighbloodpressure=="1") {
                                                                        return "Do some exercise (cardio)";
                                                                    }
                                                                }
                                                                else if (data.pphone <= 2513572297) {
                                                                    if (data.pweight > 72) {
                                                                        if (data.page == null) {
                                                                            return "Take acid reducer";
                                                                        }
                                                                        else if (data.page > 76) {
                                                                            if (data.pbmi > 25) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.pbmi <= 25) {
                                                                                return "Take acid reducer";
                                                                            }
                                                                        }
                                                                        else if (data.page <= 76) {
                                                                            return "Eat fruit";
                                                                        }
                                                                    }
                                                                    else if (data.pweight <= 72) {
                                                                        return "Eat fruit";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.emergencycontactphone <= 2207077866) {
                                                    if (data.phashypertension == null) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.phashypertension=="0") {
                                                        if (data.prespiratorydisease == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.prespiratorydisease=="none") {
                                                            if (data.pdoctorphone > 1400785274) {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.pdoctorphone <= 1400785274) {
                                                                if (data.pbmi > 22) {
                                                                    if (data.currentproblem == null) {
                                                                        return "Take acid reducer";
                                                                    }
                                                                    else if (data.currentproblem=="Chest Pain") {
                                                                        return "Drink tea";
                                                                    }
                                                                    else if (data.currentproblem!="Chest Pain") {
                                                                        if (data.pmentalillness == null) {
                                                                            return "Take acid reducer";
                                                                        }
                                                                        else if (data.pmentalillness=="Bipolar Disorder") {
                                                                            return "Rest a little";
                                                                        }
                                                                        else if (data.pmentalillness!="Bipolar Disorder") {
                                                                            if (data.pbmi > 25) {
                                                                                return "Take Aspirin";
                                                                            }
                                                                            else if (data.pbmi <= 25) {
                                                                                if (data.pallergies == null) {
                                                                                    return "Take acid reducer";
                                                                                }
                                                                                else if (data.pallergies=="Soy") {
                                                                                    return "Call doctor immediately";
                                                                                }
                                                                                else if (data.pallergies!="Soy") {
                                                                                    return "Take acid reducer";
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.pbmi <= 22) {
                                                                    if (data.currentproblem == null) {
                                                                        return "Call doctor immediately";
                                                                    }
                                                                    else if (data.currentproblem=="Stomachache or stoma") {
                                                                        return "Call doctor immediately";
                                                                    }
                                                                    else if (data.currentproblem!="Stomachache or stoma") {
                                                                        if (data.currentproblem=="Back Pain") {
                                                                            return "Take Aspirin";
                                                                        }
                                                                        else if (data.currentproblem!="Back Pain") {
                                                                            return "Drink tea";
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else if (data.prespiratorydisease!="none") {
                                                            if (data.emergencycontactphone > 1134008698) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.emergencycontactphone <= 1134008698) {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                        }
                                                    }
                                                    else if (data.phashypertension=="1") {
                                                        if (data.pheartdisease == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.pheartdisease=="Cardiovascular Disea") {
                                                            if (data.pphone == null) {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.pphone > 505597218) {
                                                                return "Drink tea";
                                                            }
                                                            else if (data.pphone <= 505597218) {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                        }
                                                        else if (data.pheartdisease!="Cardiovascular Disea") {
                                                            if (data.pdoctorid > 5068) {
                                                                if (data.phasosteoporosis == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.phasosteoporosis=="0") {
                                                                    if (data.plastseizure == null) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.plastseizure=="00.00.0000") {
                                                                        if (data.emergencycontactphone > 1053912242) {
                                                                            return "Eat fruit";
                                                                        }
                                                                        else if (data.emergencycontactphone <= 1053912242) {
                                                                            return "Take NSAID (Pain reliever)";
                                                                        }
                                                                    }
                                                                    else if (data.plastseizure!="00.00.0000") {
                                                                        return "Take acid reducer";
                                                                    }
                                                                }
                                                                else if (data.phasosteoporosis=="1") {
                                                                    if (data.pbmi > 24) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.pbmi <= 24) {
                                                                        return "Take acid reducer";
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pdoctorid <= 5068) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.pweight <= 55) {
                                                if (data.pheartdisease == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pheartdisease=="none") {
                                                    if (data.plastseizure == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.plastseizure=="00.00.0000") {
                                                        if (data.emergencycontactphone == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.emergencycontactphone > 2753000235) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.emergencycontactphone <= 2753000235) {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                    else if (data.plastseizure!="00.00.0000") {
                                                        return "Drink tea";
                                                    }
                                                }
                                                else if (data.pheartdisease!="none") {
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
            }
        }
        else if (data.pcognitiveimpairement!="none") {
            if (data.paddress == null) {
                return "Take NSAID (Pain reliever)";
            }
            else if (termMatches(data.paddress, "paddress", "road") > 0) {
                if (data.pbmi == null) {
                    return "Drink tea";
                }
                else if (data.pbmi > 29) {
                    if (data.page == null) {
                        return "Drink tea";
                    }
                    else if (data.page > 78) {
                        if (data.psmokes == null) {
                            return "Drink tea";
                        }
                        else if (data.psmokes=="1") {
                            return "Drink tea";
                        }
                        else if (data.psmokes=="0") {
                            return "Take NSAID (Pain reliever)";
                        }
                    }
                    else if (data.page <= 78) {
                        return "Call doctor immediately";
                    }
                }
                else if (data.pbmi <= 29) {
                    if (data.pdoctorid == null) {
                        return "Rest a little";
                    }
                    else if (data.pdoctorid > 5611) {
                        if (data.phasosteoporosis == null) {
                            return "Rest a little";
                        }
                        else if (data.phasosteoporosis=="0") {
                            return "Have a cold bath";
                        }
                        else if (data.phasosteoporosis=="1") {
                            return "Rest a little";
                        }
                    }
                    else if (data.pdoctorid <= 5611) {
                        if (data.pdoctorid > 5372) {
                            return "Take Aspirin";
                        }
                        else if (data.pdoctorid <= 5372) {
                            return "Take NSAID (Pain reliever)";
                        }
                    }
                }
            }
            else if (termMatches(data.paddress, "paddress", "road") <= 0) {
                if (data.pbloodtype == null) {
                    return "Take NSAID (Pain reliever)";
                }
                else if (data.pbloodtype=="O") {
                    if (data.pdoctorphone == null) {
                        return "Take Aspirin";
                    }
                    else if (data.pdoctorphone > 2897476502) {
                        return "Take Aspirin";
                    }
                    else if (data.pdoctorphone <= 2897476502) {
                        if (termMatches(data.paddress, "paddress", "street") > 0) {
                            if (data.pdoctoremail == null) {
                                return "Eat fruit";
                            }
                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                return "Drink tea";
                            }
                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                return "Eat fruit";
                            }
                        }
                        else if (termMatches(data.paddress, "paddress", "street") <= 0) {
                            if (data.pdoctorid == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pdoctorid > 5541) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pdoctorid <= 5541) {
                                return "Take Aspirin";
                            }
                        }
                    }
                }
                else if (data.pbloodtype!="O") {
                    if (data.emergencycontactphone == null) {
                        return "Take acid reducer";
                    }
                    else if (data.emergencycontactphone > 2555734460) {
                        if (data.emergencycontactphone > 3885925892) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.emergencycontactphone <= 3885925892) {
                            if (data.phashighbloodpressure == null) {
                                return "Take Aspirin";
                            }
                            else if (data.phashighbloodpressure=="0") {
                                if (data.pphone == null) {
                                    return "Take Aspirin";
                                }
                                else if (data.pphone > 2747617098) {
                                    return "Take acid reducer";
                                }
                                else if (data.pphone <= 2747617098) {
                                    return "Take Aspirin";
                                }
                            }
                            else if (data.phashighbloodpressure=="1") {
                                return "Eat fruit";
                            }
                        }
                    }
                    else if (data.emergencycontactphone <= 2555734460) {
                        if (data.page == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.page > 95) {
                            if (data.pweight == null) {
                                return "Take acid reducer";
                            }
                            else if (data.pweight > 102) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pweight <= 102) {
                                return "Take acid reducer";
                            }
                        }
                        else if (data.page <= 95) {
                            if (data.pweight == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pweight > 78) {
                                return "Drink tea";
                            }
                            else if (data.pweight <= 78) {
                                return "Take NSAID (Pain reliever)";
                            }
                        }
                    }
                }
            }
        }
    }
    return null;
}
