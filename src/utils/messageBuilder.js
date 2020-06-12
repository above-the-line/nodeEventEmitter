// TIGHTLY COUPLED TO THE MESSAGE FORMAT DEFINED
// IN APPSETTINGS


const moment = require('moment')
const ENV_VARS = require('./../secrets')

exports.message = (previousMessage) => {
    let dateTimeUTC = moment.utc().format()
    let randomNumber1to100 = Math.floor((Math.random()*100)+ 1)
    
    console.log(previousMessage["kWh-exported"])
    // console.log(previousMessage.kWh-exported)


    let newMessage = {
        "deviceGUID": ENV_VARS.SECRETS.DEVICE_GUID,
        "date-time-UTC": dateTimeUTC,
        "kWh-exported": previousMessage["kWh-exported"] + randomNumber1to100,
        "kWh-imported": previousMessage["kWh-imported"] + randomNumber1to100,
        "actual-state": "",
        "optimal-state": "",
    }
    // console.log(secondsUTC)
    // console.log(dateTimeUTC)
    // console.log(randomNumber1to100)
    console.log(newMessage)
    
    return newMessage
}
