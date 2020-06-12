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


const ENV_VARS = require('./secrets-env-vars')
const messageDispatcher = require('./utils/messageDispatcher')
const messageBuilder = require('./utils/messageBuilder')

function mainLoop () {
  
    let interval = ENV_VARS.APP_VARS.MESSAGE_INTERVAL_RATE_IN_MILLISECONDS

    let message = messageBuilder.message

    let messagePackager = (messageForDispatch) => {
        messageDispatcher.send(messageForDispatch)
    }

    // Message Send Loop
    // setInterval(messagePackager,interval, message)

    console.log(messagePackager(message))

}


mainLoop()