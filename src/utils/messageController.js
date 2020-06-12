// LOOSLY COUPLED CONTROLLER WITH ONE INTERNAL SIDE EFFECT
// 
// Public Methods:
// 1. messengerService - called by the mainLoop in App,js

const messageDispatcher = require('./messageDispatcher')
const messageBuilder = require('./messageBuilder')
const ENV_VARS = require('./../appSettings')

let previousState = ENV_VARS.initialState


////////////////////
// 
// Message Controller (Messenger Service)
// 
////////////////////
// 
// 
// Passes an existing message to the Message Builder.
// Passes the new message returned from the Message Builder
// to the Message Dispatcher, which sends it to Azure IOT Hub
// 
// 
// @SideEffect {modifies object} - modifies private variable previousState
//                                 so as to store the last sent message 
exports.messengerService = () => {
    let newMessage = messageBuilder.buildNewMessage(previousState)
    previousState = newMessage
    messageDispatcher.send(newMessage)
}
