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
const messageSender = require('./utils/messageSender')


function mainLoop () {
    let interval = ENV_VARS.APP_VARS.MESSAGE_INTERVAL_RATE_IN_MILLISECONDS

    setInterval(
        function MessageDispatcher(){messageSender.send()}, interval
    )
}


mainLoop()