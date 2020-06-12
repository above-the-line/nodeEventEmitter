
const ENV_VARS = require('../secrets-env-vars.js')
const { EventHubProducerClient } = require("@azure/event-hubs");


const connectionString = ENV_VARS.SECRETS.AZURE_EVENT_HUBS_NAMESPACE_CONNECTION_STRING;
const eventHubName = ENV_VARS.SECRETS.AZURE_EVENT_HUB_NAME;


exports.send = async (message) => {

    try{
        // Create a producer client to send messages to the event hub.
        // const producer = new EventHubProducerClient(connectionString, eventHubName);
        console.log("Message Sender says:")
        console.log(message);
        return await null
        // Prepare a batch of three events.
    //     const batch = await producer.createBatch();
    //     batch.tryAdd({ body: message });
            

    //     // Send the batch to the event hub.
    //     await producer.sendBatch(batch);

    //     // Close the producer client.
    //     await producer.close();

    //     console.log("A batch with the below message has been sent to the event hub:");
    //     console.log(message);
    }
    catch(err) {
        console.log("Error occurred: ", err);
    };
}