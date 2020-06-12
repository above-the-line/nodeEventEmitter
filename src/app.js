/*
Send to the cloud every n minutes the following JSON message


{
    deviceID: ,
    time-UTC: ,
    kWh-exported: ,
    kWh-imported: ,
    actual-state: ,
    optimal-state: ,
}


function mainLoop (interval-time) {
    
    setInterval(
        MessageDispatcher, interval-time
    )
}


function MessageDispatcher(){
    let now = moment
    let message = randomMessageGenerator(now)
    message.timeUTC = now
    return await send(message) 
}


function randomMessageGenerator(now){




    return 
        {
            deviceID: ,
            time-UTC: ,
            kWh-exported: ,
            kWh-imported: ,
            actual-state: ,
            optimal-state: ,
        }
}

*/


const controller = require('./utils/messageController')
const ENV_VARS = require('./appSettings')


let interval = ENV_VARS.APP_VARS.MESSAGE_INTERVAL_RATE_IN_MILLISECONDS


function mainLoop () {
    // Message Send Loop
    // For every n time period, call the message controller.
    setInterval(controller.messageController,interval)

    // console.log(typeof(messageController.messageController))
    // console.log(previousState)
    // console.log(interval)

}


mainLoop()