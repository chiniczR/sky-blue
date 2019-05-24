// This is the code that goes into the Google Action
// Officially, it goes in the "fulfillment" of the action
// This is just an example, with a few lines to help integrate
// with Azure. The original example simply listened for a color
// and responded with a lucky number

'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the azure-nodejs-express-functions
const express = require('express');
const {createHandler} = require('azure-function-express');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// This is just an example
// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color.length;
    // Respond with the user's lucky number and end the conversation.
    conv.close('Your lucky number is ' + luckyNumber);
});

const expressApp = express();
// Our decision function's name will go in here, instead of <FUNCTION_NAME>
expressApp.post('/api/<FUNCTION_NAME>', app);

module.exports = createHandler(expressApp);
