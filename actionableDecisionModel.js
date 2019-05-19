/**
*  Predictor for BESTSOLUTION from model/5ce1d7c2eba31d499d0003bf
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictBestsolution(data) {

    var TERM_ANALYSIS = {
        "paddress": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
        "pdoctorname": {
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
        "pnearesthospital": {
                "token_mode": 'all',
                "case_sensitive": false,
        },
    }
    var TERM_FORMS = {
        "paddress": {
        },

        "pnearesthospital": {
        },

        "pdoctorname": {
        },

        "pemail": {
        },

        "pdoctoremail": {
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

    if (data.plaststroke == null) {
        return "Take NSAID (Pain reliever)";
    }
    else if (data.plaststroke=="00.00.0000") {
        if (data.page == null) {
            return "Take NSAID (Pain reliever)";
        }
        else if (data.page > 117) {
            if (data.pdoctorid == null) {
                return "Take NSAID (Pain reliever)";
            }
            else if (data.pdoctorid > 5747) {
                if (data.emergencycontactphone == null) {
                    return "Take NSAID (Pain reliever)";
                }
                else if (data.emergencycontactphone > 2027964966) {
                    if (data.page > 118) {
                        if (data.pbmi == null) {
                            return "Take Aspirin";
                        }
                        else if (data.pbmi > 25) {
                            return "Have a cold bath";
                        }
                        else if (data.pbmi <= 25) {
                            return "Take Aspirin";
                        }
                    }
                    else if (data.page <= 118) {
                        return "Drink tea";
                    }
                }
                else if (data.emergencycontactphone <= 2027964966) {
                    if (data.pweight == null) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.pweight > 85) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.pweight <= 85) {
                        return "Call doctor immediately";
                    }
                }
            }
            else if (data.pdoctorid <= 5747) {
                if (data.currentproblem == null) {
                    return "Take NSAID (Pain reliever)";
                }
                else if (data.currentproblem=="Headache") {
                    if (data.pbmi == null) {
                        return "Do some exercise (cardio)";
                    }
                    else if (data.pbmi > 27) {
                        return "Do some exercise (cardio)";
                    }
                    else if (data.pbmi <= 27) {
                        return "Take Aspirin";
                    }
                }
                else if (data.currentproblem!="Headache") {
                    if (data.pdoctorphone == null) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.pdoctorphone > 1765673427) {
                        if (data.pdoctorid > 5655) {
                            return "Eat hot mushroom soup";
                        }
                        else if (data.pdoctorid <= 5655) {
                            if (data.pdoctorphone > 2471200636) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pdoctorphone <= 2471200636) {
                                return "Take Aspirin";
                            }
                        }
                    }
                    else if (data.pdoctorphone <= 1765673427) {
                        if (data.emergencycontactphone == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.emergencycontactphone > 3973702278) {
                            return "Drink tea";
                        }
                        else if (data.emergencycontactphone <= 3973702278) {
                            if (data.emergencycontactphone > 1559628554) {
                                if (data.pdoctorphone > 1320323046) {
                                    return "Have a cold bath";
                                }
                                else if (data.pdoctorphone <= 1320323046) {
                                    return "Take NSAID (Pain reliever)";
                                }
                            }
                            else if (data.emergencycontactphone <= 1559628554) {
                                return "Have a cold bath";
                            }
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
                if (data.pnearesthospital == null) {
                    return "Take NSAID (Pain reliever)";
                }
                else if (termMatches(data.pnearesthospital, "pnearesthospital", "engineering") > 0) {
                    if (data.phashighbloodpressure == null) {
                        return "Call doctor immediately";
                    }
                    else if (data.phashighbloodpressure=="0") {
                        return "Call doctor immediately";
                    }
                    else if (data.phashighbloodpressure=="1") {
                        return "Take NSAID (Pain reliever)";
                    }
                }
                else if (termMatches(data.pnearesthospital, "pnearesthospital", "engineering") <= 0) {
                    if (data.pemail == null) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (termMatches(data.pemail, "pemail", "uk") > 0) {
                        if (data.pweight > 73) {
                            if (data.pheartdisease == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.pheartdisease=="none") {
                                if (data.page > 83) {
                                    if (data.hourswithproblem == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.hourswithproblem > 61) {
                                        if (data.phasosteoporosis == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phasosteoporosis=="0") {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.phasosteoporosis=="1") {
                                            return "Drink tea";
                                        }
                                    }
                                    else if (data.hourswithproblem <= 61) {
                                        return "Take muscle reliever";
                                    }
                                }
                                else if (data.page <= 83) {
                                    if (data.pweight > 104) {
                                        return "Take Aspirin";
                                    }
                                    else if (data.pweight <= 104) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                }
                            }
                            else if (data.pheartdisease!="none") {
                                return "Take Aspirin";
                            }
                        }
                        else if (data.pweight <= 73) {
                            if (data.page > 70) {
                                if (data.pweight > 65) {
                                    if (data.currentproblem == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.currentproblem=="Headache") {
                                        return "Take muscle reliever";
                                    }
                                    else if (data.currentproblem!="Headache") {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                }
                                else if (data.pweight <= 65) {
                                    return "Take acid reducer";
                                }
                            }
                            else if (data.page <= 70) {
                                if (data.hourswithproblem == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.hourswithproblem > 39) {
                                    return "Take acid reducer";
                                }
                                else if (data.hourswithproblem <= 39) {
                                    return "Eat hot mushroom soup";
                                }
                            }
                        }
                    }
                    else if (termMatches(data.pemail, "pemail", "uk") <= 0) {
                        if (data.currentproblem == null) {
                            return "Take NSAID (Pain reliever)";
                        }
                        else if (data.currentproblem=="Migrane") {
                            if (data.pweight > 64) {
                                if (data.hourswithproblem == null) {
                                    return "Drink tea";
                                }
                                else if (data.hourswithproblem > 45) {
                                    if (data.pweight > 93) {
                                        if (data.phashighbloodpressure == null) {
                                            return "Take Aspirin";
                                        }
                                        else if (data.phashighbloodpressure=="0") {
                                            if (data.pdoctorphone == null) {
                                                return "Drink tea";
                                            }
                                            else if (data.pdoctorphone > 2308075918) {
                                                if (data.hourswithproblem > 73) {
                                                    return "Do some exercise (cardio)";
                                                }
                                                else if (data.hourswithproblem <= 73) {
                                                    return "Take muscle reliever";
                                                }
                                            }
                                            else if (data.pdoctorphone <= 2308075918) {
                                                if (data.page > 79) {
                                                    if (data.hourswithproblem > 70) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.hourswithproblem <= 70) {
                                                        return "Take Aspirin";
                                                    }
                                                }
                                                else if (data.page <= 79) {
                                                    return "Drink tea";
                                                }
                                            }
                                        }
                                        else if (data.phashighbloodpressure=="1") {
                                            if (data.hourswithproblem > 61) {
                                                if (data.pweight > 100) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pweight <= 100) {
                                                    return "Have a cold bath";
                                                }
                                            }
                                            else if (data.hourswithproblem <= 61) {
                                                return "Eat fruit";
                                            }
                                        }
                                    }
                                    else if (data.pweight <= 93) {
                                        if (data.pdoctorphone == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pdoctorphone > 2050026863) {
                                            if (data.pdoctorphone > 3823847234) {
                                                if (data.pbmi == null) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pbmi > 21) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pbmi <= 21) {
                                                    return "Take Aspirin";
                                                }
                                            }
                                            else if (data.pdoctorphone <= 3823847234) {
                                                if (data.hourswithproblem > 53) {
                                                    if (data.hourswithproblem > 92) {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.hourswithproblem <= 92) {
                                                        if (data.pdoctorphone > 3336993958) {
                                                            return "Drink tea";
                                                        }
                                                        else if (data.pdoctorphone <= 3336993958) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                }
                                                else if (data.hourswithproblem <= 53) {
                                                    return "Take Aspirin";
                                                }
                                            }
                                        }
                                        else if (data.pdoctorphone <= 2050026863) {
                                            if (data.page > 101) {
                                                if (data.pcurrentprescriptions == null) {
                                                    return "Do some exercise (cardio)";
                                                }
                                                else if (data.pcurrentprescriptions=="Zocor-Simvastatin") {
                                                    return "Do some exercise (cardio)";
                                                }
                                                else if (data.pcurrentprescriptions!="Zocor-Simvastatin") {
                                                    return "Take acid reducer";
                                                }
                                            }
                                            else if (data.page <= 101) {
                                                if (data.pphone == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pphone > 1618653440) {
                                                    if (data.pdoctorid == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pdoctorid > 5530) {
                                                        return "Eat hot mushroom soup";
                                                    }
                                                    else if (data.pdoctorid <= 5530) {
                                                        if (data.emergencycontactphone == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.emergencycontactphone > 1031401460) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.emergencycontactphone <= 1031401460) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                }
                                                else if (data.pphone <= 1618653440) {
                                                    if (data.hourswithproblem > 54) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.hourswithproblem <= 54) {
                                                        return "Take muscle reliever";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.hourswithproblem <= 45) {
                                    if (data.hourswithproblem > 27) {
                                        if (data.pdoctorphone == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pdoctorphone > 1445002835) {
                                            if (data.page > 91) {
                                                if (data.pbmi == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pbmi > 28) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pbmi <= 28) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                            else if (data.page <= 91) {
                                                if (data.hourswithproblem > 30) {
                                                    if (data.pdoctorid == null) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.pdoctorid > 5203) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.pdoctorid <= 5203) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                                else if (data.hourswithproblem <= 30) {
                                                    return "Eat fruit";
                                                }
                                            }
                                        }
                                        else if (data.pdoctorphone <= 1445002835) {
                                            if (data.pbmi == null) {
                                                return "Drink tea";
                                            }
                                            else if (data.pbmi > 25) {
                                                return "Drink tea";
                                            }
                                            else if (data.pbmi <= 25) {
                                                return "Call doctor immediately";
                                            }
                                        }
                                    }
                                    else if (data.hourswithproblem <= 27) {
                                        if (data.page > 76) {
                                            if (data.emergencycontactphone == null) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.emergencycontactphone > 2139641442) {
                                                if (data.paddress == null) {
                                                    return "Drink tea";
                                                }
                                                else if (termMatches(data.paddress, "paddress", "52") > 0) {
                                                    return "Call doctor immediately";
                                                }
                                                else if (termMatches(data.paddress, "paddress", "52") <= 0) {
                                                    if (data.pdoctorid == null) {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pdoctorid > 5663) {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pdoctorid <= 5663) {
                                                        return "Take muscle reliever";
                                                    }
                                                }
                                            }
                                            else if (data.emergencycontactphone <= 2139641442) {
                                                if (data.hourswithproblem > 8) {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                                else if (data.hourswithproblem <= 8) {
                                                    if (data.pbmi == null) {
                                                        return "Take acid reducer";
                                                    }
                                                    else if (data.pbmi > 27) {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pbmi <= 27) {
                                                        return "Take acid reducer";
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.page <= 76) {
                                            if (data.pdoctorid == null) {
                                                return "Take acid reducer";
                                            }
                                            else if (data.pdoctorid > 5768) {
                                                return "Call doctor immediately";
                                            }
                                            else if (data.pdoctorid <= 5768) {
                                                if (data.pdoctorid > 5591) {
                                                    return "Drink tea";
                                                }
                                                else if (data.pdoctorid <= 5591) {
                                                    return "Take acid reducer";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.pweight <= 64) {
                                if (data.page > 89) {
                                    if (data.pbmi == null) {
                                        return "Have a cold bath";
                                    }
                                    else if (data.pbmi > 23) {
                                        return "Have a cold bath";
                                    }
                                    else if (data.pbmi <= 23) {
                                        return "Take muscle reliever";
                                    }
                                }
                                else if (data.page <= 89) {
                                    if (data.pdoctoremail == null) {
                                        return "Take acid reducer";
                                    }
                                    else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                        return "Take acid reducer";
                                    }
                                    else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                        return "Eat hot mushroom soup";
                                    }
                                }
                            }
                        }
                        else if (data.currentproblem!="Migrane") {
                            if (data.hourswithproblem == null) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.hourswithproblem > 13) {
                                if (data.hourswithproblem > 95) {
                                    if (data.pweight > 87) {
                                        if (data.pphone == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pphone > 3603651669) {
                                            return "Take Aspirin";
                                        }
                                        else if (data.pphone <= 3603651669) {
                                            if (data.pweight > 107) {
                                                return "Drink tea";
                                            }
                                            else if (data.pweight <= 107) {
                                                if (data.pmentalillness == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pmentalillness=="Bipolar Disorder") {
                                                    return "Drink tea";
                                                }
                                                else if (data.pmentalillness!="Bipolar Disorder") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                        }
                                    }
                                    else if (data.pweight <= 87) {
                                        if (data.pdoctorid == null) {
                                            return "Drink tea";
                                        }
                                        else if (data.pdoctorid > 5198) {
                                            if (data.pdoctorid > 5650) {
                                                if (data.pcurrentprescriptions == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pcurrentprescriptions=="none") {
                                                    return "Take muscle reliever";
                                                }
                                                else if (data.pcurrentprescriptions!="none") {
                                                    return "Eat fruit";
                                                }
                                            }
                                            else if (data.pdoctorid <= 5650) {
                                                return "Drink tea";
                                            }
                                        }
                                        else if (data.pdoctorid <= 5198) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                    }
                                }
                                else if (data.hourswithproblem <= 95) {
                                    if (data.pdoctorphone == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pdoctorphone > 2135174785) {
                                        if (data.pbmi == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pbmi > 18) {
                                            if (termMatches(data.pemail, "pemail", "com") > 0) {
                                                if (data.emergencycontactphone == null) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.emergencycontactphone > 846927621) {
                                                    if (data.emergencycontactphone > 2836899031) {
                                                        if (data.hourswithproblem > 36) {
                                                            if (data.pdoctorid == null) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.pdoctorid > 5391) {
                                                                if (data.pallergies == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.pallergies=="Wheat") {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.pallergies!="Wheat") {
                                                                    if (data.emergencycontactphone > 3297291280) {
                                                                        return "Take acid reducer";
                                                                    }
                                                                    else if (data.emergencycontactphone <= 3297291280) {
                                                                        return "Call doctor immediately";
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pdoctorid <= 5391) {
                                                                if (data.paddress == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "road") > 0) {
                                                                    return "Call doctor immediately";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "road") <= 0) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                        }
                                                        else if (data.hourswithproblem <= 36) {
                                                            if (data.hourswithproblem > 27) {
                                                                return "Have a cold bath";
                                                            }
                                                            else if (data.hourswithproblem <= 27) {
                                                                if (data.pbmi > 29) {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (data.pbmi <= 29) {
                                                                    return "Eat fruit";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.emergencycontactphone <= 2836899031) {
                                                        if (data.pdoctorid == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.pdoctorid > 5528) {
                                                            if (data.pbmi > 31) {
                                                                if (data.currentproblem=="Stomachache or stoma") {
                                                                    return "Eat hot mushroom soup";
                                                                }
                                                                else if (data.currentproblem!="Stomachache or stoma") {
                                                                    return "Drink tea";
                                                                }
                                                            }
                                                            else if (data.pbmi <= 31) {
                                                                if (data.currentproblem=="Sour Throat") {
                                                                    return "Eat hot mushroom soup";
                                                                }
                                                                else if (data.currentproblem!="Sour Throat") {
                                                                    if (data.pheartdisease == null) {
                                                                        return "Take acid reducer";
                                                                    }
                                                                    else if (data.pheartdisease=="none") {
                                                                        return "Take acid reducer";
                                                                    }
                                                                    else if (data.pheartdisease!="none") {
                                                                        return "Drink tea";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else if (data.pdoctorid <= 5528) {
                                                            if (data.pweight > 85) {
                                                                if (data.hourswithproblem > 67) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.hourswithproblem <= 67) {
                                                                    return "Do some exercise (cardio)";
                                                                }
                                                            }
                                                            else if (data.pweight <= 85) {
                                                                if (data.phasosteoporosis == null) {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.phasosteoporosis=="0") {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.phasosteoporosis=="1") {
                                                                    return "Eat fruit";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.emergencycontactphone <= 846927621) {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.pcurrentprescriptions=="none") {
                                                        if (data.pweight > 83) {
                                                            return "Have a cold bath";
                                                        }
                                                        else if (data.pweight <= 83) {
                                                            return "Eat fruit";
                                                        }
                                                    }
                                                    else if (data.pcurrentprescriptions!="none") {
                                                        if (data.pdoctorid == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.pdoctorid > 5544) {
                                                            return "Call doctor immediately";
                                                        }
                                                        else if (data.pdoctorid <= 5544) {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                }
                                            }
                                            else if (termMatches(data.pemail, "pemail", "com") <= 0) {
                                                if (data.emergencycontactphone == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.emergencycontactphone > 3176922686) {
                                                    if (data.pcurrentprescriptions == null) {
                                                        return "Drink tea";
                                                    }
                                                    else if (data.pcurrentprescriptions=="Zocor-Simvastatin") {
                                                        if (data.pbmi > 27) {
                                                            return "Call doctor immediately";
                                                        }
                                                        else if (data.pbmi <= 27) {
                                                            if (data.pdoctoremail == null) {
                                                                return "Drink tea";
                                                            }
                                                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "newviewgifts") > 0) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (termMatches(data.pdoctoremail, "pdoctoremail", "newviewgifts") <= 0) {
                                                                return "Drink tea";
                                                            }
                                                        }
                                                    }
                                                    else if (data.pcurrentprescriptions!="Zocor-Simvastatin") {
                                                        if (data.pdoctorphone > 3131837901) {
                                                            if (data.emergencycontactphone > 3366948123) {
                                                                if (data.hourswithproblem > 23) {
                                                                    if (data.pbmi > 22) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.pbmi <= 22) {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                }
                                                                else if (data.hourswithproblem <= 23) {
                                                                    return "Take acid reducer";
                                                                }
                                                            }
                                                            else if (data.emergencycontactphone <= 3366948123) {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                        else if (data.pdoctorphone <= 3131837901) {
                                                            if (data.page > 83) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.page <= 83) {
                                                                return "Have a cold bath";
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.emergencycontactphone <= 3176922686) {
                                                    if (data.paddress == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (termMatches(data.paddress, "paddress", "road") > 0) {
                                                        if (data.pdoctorid == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.pdoctorid > 5716) {
                                                            if (data.pbmi > 25) {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                            else if (data.pbmi <= 25) {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                        else if (data.pdoctorid <= 5716) {
                                                            if (data.pallergies == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pallergies=="Wheat") {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pallergies!="Wheat") {
                                                                if (data.plastheartevent == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (data.plastheartevent=="00.00.0000") {
                                                                    if (data.pdiabetestype == null) {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                    else if (data.pdiabetestype > 0) {
                                                                        return "Take Aspirin";
                                                                    }
                                                                    else if (data.pdiabetestype <= 0) {
                                                                        if (data.pbmi > 30) {
                                                                            return "Take acid reducer";
                                                                        }
                                                                        else if (data.pbmi <= 30) {
                                                                            if (data.hourswithproblem > 79) {
                                                                                return "Take acid reducer";
                                                                            }
                                                                            else if (data.hourswithproblem <= 79) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.plastheartevent!="00.00.0000") {
                                                                    return "Take Aspirin";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (termMatches(data.paddress, "paddress", "road") <= 0) {
                                                        if (data.pbmi > 31) {
                                                            if (data.pdoctorid == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pdoctorid > 5403) {
                                                                return "Call doctor immediately";
                                                            }
                                                            else if (data.pdoctorid <= 5403) {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                        else if (data.pbmi <= 31) {
                                                            if (data.hourswithproblem > 19) {
                                                                if (data.pweight > 94) {
                                                                    if (termMatches(data.pnearesthospital, "pnearesthospital", "systems") > 0) {
                                                                        return "Eat hot mushroom soup";
                                                                    }
                                                                    else if (termMatches(data.pnearesthospital, "pnearesthospital", "systems") <= 0) {
                                                                        if (data.pbmi > 25) {
                                                                            if (data.pbloodtype == null) {
                                                                                return "Drink tea";
                                                                            }
                                                                            else if (data.pbloodtype=="B") {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.pbloodtype!="B") {
                                                                                if (data.pcurrentprescriptions == null) {
                                                                                    return "Drink tea";
                                                                                }
                                                                                else if (data.pcurrentprescriptions=="none") {
                                                                                    return "Drink tea";
                                                                                }
                                                                                else if (data.pcurrentprescriptions!="none") {
                                                                                    return "Eat hot mushroom soup";
                                                                                }
                                                                            }
                                                                        }
                                                                        else if (data.pbmi <= 25) {
                                                                            if (data.pdoctorid == null) {
                                                                                return "Take acid reducer";
                                                                            }
                                                                            else if (data.pdoctorid > 5609) {
                                                                                return "Take Aspirin";
                                                                            }
                                                                            else if (data.pdoctorid <= 5609) {
                                                                                return "Take acid reducer";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.pweight <= 94) {
                                                                    if (data.pbmi > 23) {
                                                                        if (data.emergencycontactphone > 900123042) {
                                                                            if (data.pbmi > 25) {
                                                                                if (data.currentproblem=="Headache") {
                                                                                    return "Take Aspirin";
                                                                                }
                                                                                else if (data.currentproblem!="Headache") {
                                                                                    return "Take NSAID (Pain reliever)";
                                                                                }
                                                                            }
                                                                            else if (data.pbmi <= 25) {
                                                                                if (data.currentproblem=="Back Pain") {
                                                                                    return "Take NSAID (Pain reliever)";
                                                                                }
                                                                                else if (data.currentproblem!="Back Pain") {
                                                                                    return "Take Aspirin";
                                                                                }
                                                                            }
                                                                        }
                                                                        else if (data.emergencycontactphone <= 900123042) {
                                                                            return "Drink tea";
                                                                        }
                                                                    }
                                                                    else if (data.pbmi <= 23) {
                                                                        if (data.hourswithproblem > 42) {
                                                                            if (data.pweight > 80) {
                                                                                return "Drink tea";
                                                                            }
                                                                            else if (data.pweight <= 80) {
                                                                                return "Eat fruit";
                                                                            }
                                                                        }
                                                                        else if (data.hourswithproblem <= 42) {
                                                                            if (data.pweight > 76) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.pweight <= 76) {
                                                                                return "Take acid reducer";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            else if (data.hourswithproblem <= 19) {
                                                                if (data.pmentalillness == null) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.pmentalillness=="none") {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.pmentalillness!="none") {
                                                                    return "Call doctor immediately";
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.pbmi <= 18) {
                                            if (data.pbloodtype == null) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                            else if (data.pbloodtype=="A") {
                                                if (data.pdoctorid == null) {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pdoctorid > 5465) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pdoctorid <= 5465) {
                                                    return "Take acid reducer";
                                                }
                                            }
                                            else if (data.pbloodtype!="A") {
                                                if (data.pcurrentprescriptions == null) {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                                else if (data.pcurrentprescriptions=="Hydrocodone-Acetaminophen") {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pcurrentprescriptions!="Hydrocodone-Acetaminophen") {
                                                    if (data.pdoctorphone > 3940981187) {
                                                        if (data.hourswithproblem > 52) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.hourswithproblem <= 52) {
                                                            return "Eat fruit";
                                                        }
                                                    }
                                                    else if (data.pdoctorphone <= 3940981187) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.pdoctorphone <= 2135174785) {
                                        if (data.page > 85) {
                                            if (data.pcurrentprescriptions == null) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.pcurrentprescriptions=="Zocor-Simvastatin") {
                                                if (data.pdoctorid == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.pdoctorid > 5498) {
                                                    if (data.pphone == null) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.pphone > 2131562207) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.pphone <= 2131562207) {
                                                        if (data.pgender == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.pgender=="f") {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.pgender=="m") {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                }
                                                else if (data.pdoctorid <= 5498) {
                                                    if (data.pweight > 69) {
                                                        if (data.pbmi == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.pbmi > 23) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pbmi <= 23) {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                    else if (data.pweight <= 69) {
                                                        return "Drink tea";
                                                    }
                                                }
                                            }
                                            else if (data.pcurrentprescriptions!="Zocor-Simvastatin") {
                                                if (data.pbmi == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pbmi > 31) {
                                                    if (data.emergencycontactphone == null) {
                                                        return "Eat fruit";
                                                    }
                                                    else if (data.emergencycontactphone > 2646732155) {
                                                        if (data.pweight > 85) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.pweight <= 85) {
                                                            return "Take Aspirin";
                                                        }
                                                    }
                                                    else if (data.emergencycontactphone <= 2646732155) {
                                                        if (data.hourswithproblem > 26) {
                                                            if (data.hourswithproblem > 50) {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                            else if (data.hourswithproblem <= 50) {
                                                                return "Drink tea";
                                                            }
                                                        }
                                                        else if (data.hourswithproblem <= 26) {
                                                            return "Eat fruit";
                                                        }
                                                    }
                                                }
                                                else if (data.pbmi <= 31) {
                                                    if (data.pdoctorid == null) {
                                                        return "Take Aspirin";
                                                    }
                                                    else if (data.pdoctorid > 5598) {
                                                        if (data.pweight > 69) {
                                                            if (data.pdoctorphone > 833177054) {
                                                                if (data.page > 86) {
                                                                    if (data.pdoctorphone > 1199455305) {
                                                                        if (data.page > 95) {
                                                                            if (data.pphone == null) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.pphone > 2236106153) {
                                                                                return "Take NSAID (Pain reliever)";
                                                                            }
                                                                            else if (data.pphone <= 2236106153) {
                                                                                if (data.pphone > 552508019) {
                                                                                    return "Take anti-depressant";
                                                                                }
                                                                                else if (data.pphone <= 552508019) {
                                                                                    return "Take Aspirin";
                                                                                }
                                                                            }
                                                                        }
                                                                        else if (data.page <= 95) {
                                                                            return "Take Aspirin";
                                                                        }
                                                                    }
                                                                    else if (data.pdoctorphone <= 1199455305) {
                                                                        return "Take NSAID (Pain reliever)";
                                                                    }
                                                                }
                                                                else if (data.page <= 86) {
                                                                    return "Drink tea";
                                                                }
                                                            }
                                                            else if (data.pdoctorphone <= 833177054) {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                        else if (data.pweight <= 69) {
                                                            if (data.pdoctorphone > 739723234) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pdoctorphone <= 739723234) {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                    }
                                                    else if (data.pdoctorid <= 5598) {
                                                        if (data.pheartdisease == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.pheartdisease=="Cardiovascular Disea") {
                                                            if (data.pallergies == null) {
                                                                return "Take muscle reliever";
                                                            }
                                                            else if (data.pallergies=="none") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.pallergies!="none") {
                                                                if (data.pphone == null) {
                                                                    return "Take muscle reliever";
                                                                }
                                                                else if (data.pphone > 1711185565) {
                                                                    return "Take muscle reliever";
                                                                }
                                                                else if (data.pphone <= 1711185565) {
                                                                    return "Call doctor immediately";
                                                                }
                                                            }
                                                        }
                                                        else if (data.pheartdisease!="Cardiovascular Disea") {
                                                            if (data.pdoctorphone > 1415567778) {
                                                                if (data.pallergies == null) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.pallergies=="Fish") {
                                                                    return "Take acid reducer";
                                                                }
                                                                else if (data.pallergies!="Fish") {
                                                                    if (data.pdoctorid > 5481) {
                                                                        if (data.emergencycontactphone == null) {
                                                                            return "Take acid reducer";
                                                                        }
                                                                        else if (data.emergencycontactphone > 2587042857) {
                                                                            return "Eat fruit";
                                                                        }
                                                                        else if (data.emergencycontactphone <= 2587042857) {
                                                                            return "Take acid reducer";
                                                                        }
                                                                    }
                                                                    else if (data.pdoctorid <= 5481) {
                                                                        if (data.pdoctoremail == null) {
                                                                            return "Eat fruit";
                                                                        }
                                                                        else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                                                            return "Take Aspirin";
                                                                        }
                                                                        else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                                                            return "Eat fruit";
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pdoctorphone <= 1415567778) {
                                                                if (data.pdoctorid > 5538) {
                                                                    return "Call doctor immediately";
                                                                }
                                                                else if (data.pdoctorid <= 5538) {
                                                                    if (data.hourswithproblem > 67) {
                                                                        if (data.emergencycontactphone == null) {
                                                                            return "Take acid reducer";
                                                                        }
                                                                        else if (data.emergencycontactphone > 3878730777) {
                                                                            return "Call doctor immediately";
                                                                        }
                                                                        else if (data.emergencycontactphone <= 3878730777) {
                                                                            if (data.paddress == null) {
                                                                                return "Take acid reducer";
                                                                            }
                                                                            else if (termMatches(data.paddress, "paddress", "10") > 0) {
                                                                                return "Take Aspirin";
                                                                            }
                                                                            else if (termMatches(data.paddress, "paddress", "10") <= 0) {
                                                                                return "Take acid reducer";
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.hourswithproblem <= 67) {
                                                                        if (data.emergencycontactphone == null) {
                                                                            return "Take NSAID (Pain reliever)";
                                                                        }
                                                                        else if (data.emergencycontactphone > 2037317533) {
                                                                            if (data.pdoctorid > 5362) {
                                                                                if (data.pdoctorname == null) {
                                                                                    return "Take NSAID (Pain reliever)";
                                                                                }
                                                                                else if (termMatches(data.pdoctorname, "pdoctorname", "crystal") > 0) {
                                                                                    return "Take Aspirin";
                                                                                }
                                                                                else if (termMatches(data.pdoctorname, "pdoctorname", "crystal") <= 0) {
                                                                                    return "Take NSAID (Pain reliever)";
                                                                                }
                                                                            }
                                                                            else if (data.pdoctorid <= 5362) {
                                                                                if (data.hourswithproblem > 29) {
                                                                                    return "Take NSAID (Pain reliever)";
                                                                                }
                                                                                else if (data.hourswithproblem <= 29) {
                                                                                    return "Take acid reducer";
                                                                                }
                                                                            }
                                                                        }
                                                                        else if (data.emergencycontactphone <= 2037317533) {
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
                                        else if (data.page <= 85) {
                                            if (data.hourswithproblem > 56) {
                                                if (data.psmokes == null) {
                                                    return "Eat fruit";
                                                }
                                                else if (data.psmokes=="0") {
                                                    if (data.pdoctorphone > 1848633341) {
                                                        if (data.pbmi == null) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pbmi > 24) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                        else if (data.pbmi <= 24) {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                    }
                                                    else if (data.pdoctorphone <= 1848633341) {
                                                        if (data.pweight > 96) {
                                                            if (data.pgender == null) {
                                                                return "Take acid reducer";
                                                            }
                                                            else if (data.pgender=="f") {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.pgender=="m") {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                        else if (data.pweight <= 96) {
                                                            if (data.pdoctorid == null) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.pdoctorid > 5485) {
                                                                return "Eat fruit";
                                                            }
                                                            else if (data.pdoctorid <= 5485) {
                                                                return "Take Aspirin";
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.psmokes=="1") {
                                                    if (data.hourswithproblem > 71) {
                                                        if (data.prespiratorydisease == null) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.prespiratorydisease=="none") {
                                                            if (data.pweight > 66) {
                                                                if (data.emergencycontactphone == null) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.emergencycontactphone > 944987176) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (data.emergencycontactphone <= 944987176) {
                                                                    return "Call doctor immediately";
                                                                }
                                                            }
                                                            else if (data.pweight <= 66) {
                                                                return "Take acid reducer";
                                                            }
                                                        }
                                                        else if (data.prespiratorydisease!="none") {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                    else if (data.hourswithproblem <= 71) {
                                                        if (data.emergencycontactphone == null) {
                                                            return "Take Aspirin";
                                                        }
                                                        else if (data.emergencycontactphone > 2461963315) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.emergencycontactphone <= 2461963315) {
                                                            if (data.page > 73) {
                                                                return "Take Aspirin";
                                                            }
                                                            else if (data.page <= 73) {
                                                                return "Eat hot mushroom soup";
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.hourswithproblem <= 56) {
                                                if (data.pweight > 90) {
                                                    if (data.pdoctorid == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pdoctorid > 5223) {
                                                        if (data.pdoctorid > 5647) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (data.pdoctorid <= 5647) {
                                                            if (data.pphone == null) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                            else if (data.pphone > 2691942307) {
                                                                if (data.pdoctoremail == null) {
                                                                    return "Take Aspirin";
                                                                }
                                                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                                                    return "Take Aspirin";
                                                                }
                                                            }
                                                            else if (data.pphone <= 2691942307) {
                                                                return "Take NSAID (Pain reliever)";
                                                            }
                                                        }
                                                    }
                                                    else if (data.pdoctorid <= 5223) {
                                                        if (data.pdoctoremail == null) {
                                                            return "Take acid reducer";
                                                        }
                                                        else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                                            return "Call doctor immediately";
                                                        }
                                                        else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                                            return "Take acid reducer";
                                                        }
                                                    }
                                                }
                                                else if (data.pweight <= 90) {
                                                    if (data.pphone == null) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                    else if (data.pphone > 1373708796) {
                                                        if (data.pallergies == null) {
                                                            return "Eat fruit";
                                                        }
                                                        else if (data.pallergies=="Wheat") {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                        else if (data.pallergies!="Wheat") {
                                                            if (data.pdoctorphone > 947752696) {
                                                                if (data.paddress == null) {
                                                                    return "Eat fruit";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "blvd") > 0) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "blvd") <= 0) {
                                                                    if (data.emergencycontactphone == null) {
                                                                        return "Eat fruit";
                                                                    }
                                                                    else if (data.emergencycontactphone > 3917595386) {
                                                                        return "Take acid reducer";
                                                                    }
                                                                    else if (data.emergencycontactphone <= 3917595386) {
                                                                        return "Eat fruit";
                                                                    }
                                                                }
                                                            }
                                                            else if (data.pdoctorphone <= 947752696) {
                                                                if (data.paddress == null) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "street") > 0) {
                                                                    return "Drink tea";
                                                                }
                                                                else if (termMatches(data.paddress, "paddress", "street") <= 0) {
                                                                    return "Take NSAID (Pain reliever)";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.pphone <= 1373708796) {
                                                        if (data.emergencycontactphone == null) {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                        else if (data.emergencycontactphone > 1656946495) {
                                                            return "Do some exercise (cardio)";
                                                        }
                                                        else if (data.emergencycontactphone <= 1656946495) {
                                                            return "Take NSAID (Pain reliever)";
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.hourswithproblem <= 13) {
                                if (data.pphone == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.pphone > 1201579833) {
                                    if (data.pdoctorid == null) {
                                        return "Take NSAID (Pain reliever)";
                                    }
                                    else if (data.pdoctorid > 5825) {
                                        if (data.pheartdisease == null) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pheartdisease=="none") {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pheartdisease!="none") {
                                            return "Drink tea";
                                        }
                                    }
                                    else if (data.pdoctorid <= 5825) {
                                        if (data.pweight > 86) {
                                            if (data.pbloodtype == null) {
                                                return "Take Aspirin";
                                            }
                                            else if (data.pbloodtype=="O") {
                                                if (data.pgender == null) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pgender=="f") {
                                                    return "Drink tea";
                                                }
                                                else if (data.pgender=="m") {
                                                    return "Take NSAID (Pain reliever)";
                                                }
                                            }
                                            else if (data.pbloodtype!="O") {
                                                if (data.pphone > 3261912030) {
                                                    return "Take Aspirin";
                                                }
                                                else if (data.pphone <= 3261912030) {
                                                    if (data.emergencycontactphone == null) {
                                                        return "Have a cold bath";
                                                    }
                                                    else if (data.emergencycontactphone > 2661166420) {
                                                        return "Do some exercise (cardio)";
                                                    }
                                                    else if (data.emergencycontactphone <= 2661166420) {
                                                        return "Have a cold bath";
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.pweight <= 86) {
                                            if (data.pphone > 2292343335) {
                                                if (data.pbloodtype == null) {
                                                    return "Eat hot mushroom soup";
                                                }
                                                else if (data.pbloodtype=="B") {
                                                    return "Take acid reducer";
                                                }
                                                else if (data.pbloodtype!="B") {
                                                    if (data.pdoctorid > 5587) {
                                                        return "Eat hot mushroom soup";
                                                    }
                                                    else if (data.pdoctorid <= 5587) {
                                                        return "Take NSAID (Pain reliever)";
                                                    }
                                                }
                                            }
                                            else if (data.pphone <= 2292343335) {
                                                return "Take NSAID (Pain reliever)";
                                            }
                                        }
                                    }
                                }
                                else if (data.pphone <= 1201579833) {
                                    if (data.page > 90) {
                                        if (data.pphone > 829703916) {
                                            return "Eat fruit";
                                        }
                                        else if (data.pphone <= 829703916) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                    }
                                    else if (data.page <= 90) {
                                        if (data.pdoctorid == null) {
                                            return "Have a cold bath";
                                        }
                                        else if (data.pdoctorid > 5304) {
                                            return "Eat hot mushroom soup";
                                        }
                                        else if (data.pdoctorid <= 5304) {
                                            return "Have a cold bath";
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
                            if (data.emergencycontactphone == null) {
                                return "Drink tea";
                            }
                            else if (data.emergencycontactphone > 3165524115) {
                                return "Take NSAID (Pain reliever)";
                            }
                            else if (data.emergencycontactphone <= 3165524115) {
                                return "Drink tea";
                            }
                        }
                    }
                }
                else if (data.page <= 107) {
                    if (data.pweight > 51) {
                        if (data.paddress == null) {
                            return "Drink tea";
                        }
                        else if (termMatches(data.paddress, "paddress", "street") > 0) {
                            if (data.page > 90) {
                                if (data.pweight > 54) {
                                    return "Take Aspirin";
                                }
                                else if (data.pweight <= 54) {
                                    return "Drink tea";
                                }
                            }
                            else if (data.page <= 90) {
                                if (data.pdoctoremail == null) {
                                    return "Eat fruit";
                                }
                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") > 0) {
                                    return "Eat fruit";
                                }
                                else if (termMatches(data.pdoctoremail, "pdoctoremail", "com") <= 0) {
                                    if (data.pweight > 53) {
                                        return "Drink tea";
                                    }
                                    else if (data.pweight <= 53) {
                                        return "Take Aspirin";
                                    }
                                }
                            }
                        }
                        else if (termMatches(data.paddress, "paddress", "street") <= 0) {
                            if (data.pdoctorphone == null) {
                                return "Drink tea";
                            }
                            else if (data.pdoctorphone > 1825137984) {
                                if (termMatches(data.paddress, "paddress", "road") > 0) {
                                    if (data.emergencycontactphone == null) {
                                        return "Eat fruit";
                                    }
                                    else if (data.emergencycontactphone > 1192547226) {
                                        if (data.pbmi == null) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pbmi > 19) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.pbmi <= 19) {
                                            return "Eat hot mushroom soup";
                                        }
                                    }
                                    else if (data.emergencycontactphone <= 1192547226) {
                                        return "Eat fruit";
                                    }
                                }
                                else if (termMatches(data.paddress, "paddress", "road") <= 0) {
                                    if (data.pmentalillness == null) {
                                        return "Drink tea";
                                    }
                                    else if (data.pmentalillness=="Anxiety") {
                                        return "Take acid reducer";
                                    }
                                    else if (data.pmentalillness!="Anxiety") {
                                        if (data.hourswithproblem == null) {
                                            return "Drink tea";
                                        }
                                        else if (data.hourswithproblem > 73) {
                                            return "Take NSAID (Pain reliever)";
                                        }
                                        else if (data.hourswithproblem <= 73) {
                                            return "Drink tea";
                                        }
                                    }
                                }
                            }
                            else if (data.pdoctorphone <= 1825137984) {
                                if (data.pphone == null) {
                                    return "Take acid reducer";
                                }
                                else if (data.pphone > 3516900771) {
                                    return "Drink tea";
                                }
                                else if (data.pphone <= 3516900771) {
                                    if (data.pphone > 629783000) {
                                        if (data.pphone > 1587277991) {
                                            return "Take acid reducer";
                                        }
                                        else if (data.pphone <= 1587277991) {
                                            return "Take muscle reliever";
                                        }
                                    }
                                    else if (data.pphone <= 629783000) {
                                        return "Eat fruit";
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
                                    if (data.page > 87) {
                                        return "Have a cold bath";
                                    }
                                    else if (data.page <= 87) {
                                        return "Drink tea";
                                    }
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
                                if (data.pbmi == null) {
                                    return "Take NSAID (Pain reliever)";
                                }
                                else if (data.pbmi > 32) {
                                    return "Take acid reducer";
                                }
                                else if (data.pbmi <= 32) {
                                    return "Take NSAID (Pain reliever)";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (data.plaststroke!="00.00.0000") {
        if (data.emergencycontactphone == null) {
            return "Take Aspirin";
        }
        else if (data.emergencycontactphone > 2503577977) {
            if (data.hourswithproblem == null) {
                return "Take acid reducer";
            }
            else if (data.hourswithproblem > 47) {
                if (data.phashighbloodpressure == null) {
                    return "Take Aspirin";
                }
                else if (data.phashighbloodpressure=="0") {
                    return "Rest a little";
                }
                else if (data.phashighbloodpressure=="1") {
                    if (data.pbmi == null) {
                        return "Take Aspirin";
                    }
                    else if (data.pbmi > 24) {
                        return "Take NSAID (Pain reliever)";
                    }
                    else if (data.pbmi <= 24) {
                        return "Take Aspirin";
                    }
                }
            }
            else if (data.hourswithproblem <= 47) {
                if (data.pmentalillness == null) {
                    return "Take acid reducer";
                }
                else if (data.pmentalillness=="Anxiety") {
                    return "Take NSAID (Pain reliever)";
                }
                else if (data.pmentalillness!="Anxiety") {
                    return "Take acid reducer";
                }
            }
        }
        else if (data.emergencycontactphone <= 2503577977) {
            if (data.phasosteoporosis == null) {
                return "Take Aspirin";
            }
            else if (data.phasosteoporosis=="0") {
                if (data.pdoctorphone == null) {
                    return "Take Aspirin";
                }
                else if (data.pdoctorphone > 2685860649) {
                    return "Take acid reducer";
                }
                else if (data.pdoctorphone <= 2685860649) {
                    if (data.pdoctorphone > 1002388314) {
                        if (data.hourswithproblem == null) {
                            return "Take Aspirin";
                        }
                        else if (data.hourswithproblem > 94) {
                            return "Have a cold bath";
                        }
                        else if (data.hourswithproblem <= 94) {
                            return "Take Aspirin";
                        }
                    }
                    else if (data.pdoctorphone <= 1002388314) {
                        return "Eat fruit";
                    }
                }
            }
            else if (data.phasosteoporosis=="1") {
                if (data.psmokes == null) {
                    return "Take Aspirin";
                }
                else if (data.psmokes=="0") {
                    return "Drink tea";
                }
                else if (data.psmokes=="1") {
                    return "Take Aspirin";
                }
            }
        }
    }
    return null;
}
