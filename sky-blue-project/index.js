const express = require('express');
const bodyParser = require('body-parser');
const {dialogflow} = require('actions-on-google');

const port = process.env.PORT || 4567;

const app = dialogflow();

app.intent('Default Welcome Intent', conv => {
    conv.close('Hello, Azure!');
});

const expressApp = express().use(bodyParser.json());
expressApp.post('/', app);

expressApp.listen(port);
