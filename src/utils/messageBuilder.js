// TIGHTLY COUPLED TO THE MESSAGE FORMAT DEFINED IN APPSETTINGS
// 
// Public Methods:
// 1. buildNewMessage - called by the controller


const moment = require('moment')
const ENV_VARS = require('./../secrets')

////////////////////
// 
// Message Builder
// 
////////////////////
// 
// 
// Takes existing state and creates a new one based upon it.
// 
// @Params {object} - Previous Message
// @Returns {object} - New Message
exports.buildNewMessage = (previousMessage) => {
    // GET UTC TIME STAMP AND RANDOM VARS
    let dateTimeUTC = moment.utc().format()
    let FIRSTrandomNumber1to100 = Math.floor((Math.random()*100)+ 1)
    let SECONDrandomNumber1to100 = Math.floor((Math.random()*100)+ 1)
  
    // ENERGY FLOWS MATH FOR TEST DATA SIMULATION
    let newKWhExported = previousMessage["kWh-exported"] + FIRSTrandomNumber1to100
    let newKWhImported = previousMessage["kWh-imported"] + SECONDrandomNumber1to100 
    let newNetExport = newKWhExported - previousMessage["kWh-exported"]   
    let newNetImport = newKWhImported - previousMessage["kWh-imported"]

    // CONSTRUCT NEW MESSAGE
    let newMessage = {
        "deviceGUID": ENV_VARS.SECRETS.DEVICE_GUID,
        "date-time-UTC": dateTimeUTC,
        "kWh-exported": newKWhExported,
        "kWh-imported": newKWhImported,
        "kWh-net-export": newNetExport,
        "kWh-net-import": newNetImport,
    }

    console.log(newMessage)

    return newMessage
}
