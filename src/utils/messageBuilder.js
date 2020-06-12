// Send to the cloud every n minutes the following JSON message

// {
//     deviceID: ,
//     time-UTC: ,
//     kWh-exported: ,
//     kWh-imported: ,
//     actual-state: ,
//     optimal-state: ,
// }


const moment = require('moment')

const message = () => {
    let nowAsNumber = moment.utc().seconds()
    let timeUTC = moment.utc().format()
    let message = {
        "deviceGUID": "F9168C5E-AVI_RASP_PI",
        "time-UTC": nowAsNumber,
        "kWh-exported": "",
        "kWh-imported": "",
        "actual-state": "",
        "optimal-state": "",
    }
    console.log(nowAsNumber)
    console.log(timeUTC)
    // return message
}


exports.message = message()