// Send a JSON message to an Azure IOT Hub instance every 30 minutes
// to simulate field data.

const messageController = require('./utils/messageController')
const ENV_VARS = require('./appSettings')


let interval = ENV_VARS.APP_VARS.MESSAGE_INTERVAL_RATE_IN_MILLISECONDS


function mainLoop () {
    // For every n time period, call the message controller.
    setInterval(messageController.messengerService,interval)
}

mainLoop()