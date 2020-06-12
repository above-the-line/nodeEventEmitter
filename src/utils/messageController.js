const messageDispatcher = require('./messageDispatcher')
const messageBuilder = require('./messageBuilder')
const ENV_VARS = require('./../appSettings')

let previousState = ENV_VARS.initialState


exports.messageController = () => {
    let newMessage = messageBuilder.message(previousState)
    previousState = newMessage
    // messageDispatcher.send(currentMessage)


}
