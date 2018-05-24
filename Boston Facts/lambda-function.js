'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

const APP_ID = undefined;
const SKILL_NAME = 'Facts about Boston by Faraz Khalid';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a Boston fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
    'The first American lighthouse was built in Boston Harbor in 1716',
    'Boston Common is stretch of green sanctuary within the city of Boston dates back to 1634. It’s the oldest public park in the United States and continues to welcome residents and tourists alike.',
    'The very first chocolate factory in the United States was build in the Lower Mills section in the Dorchester neighborhood of Boston.',
    'Boston built America’s first subway, the Tremont Street Subway, back in 1897.',
    'The Boston University Bridge’s claim to fame is that it’s the only place anywhere in the world where a boat can sail under a train going under a vehicle driving under an airplane.',
    'Boston’s Ted Williams Tunnel is the deepest in North America, running nearly 90 feet underneath the earth’s surface.',
    'The United States’ first public beach was Revere Beach in Boston.',
    'Some of the many nicknames given to Boston over the years include the City on the Hill, City of Notions, Title Town, Beantown, and the Hub.',
    'About 13% of Boston citizens commute by foot, giving it the highest percentage of pedestrian commuters in major cities of the United States.',
    'The Boston Fire Department (1678) is the oldest in the United States.',
    'The Mather School of Boston (1639) was the first public elementary school in the United States.',
    'The oldest restaurant in continuous service in the United States is Bostons The Union Oyster House, established in 1826.',
    'Keeping a mule on a second story floor of a Boston building is considered illegal, unless there is more than one exit available.',
];

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFactNumber = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFactNumber;

        this.response.cardRenderer(SKILL_NAME, randomFactNumber);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
