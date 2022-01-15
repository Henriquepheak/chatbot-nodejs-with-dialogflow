const UserName = require('./userName');
const UserBorn = require('./userBorn');
const CountBirthday = require('./countBirthday');

// TODO: Add handleWebhook to 'Entry point' in the Google Cloud Function
const handleWebhook = (request, response) => {
  // console.log("Request body: ", request.body.originalDetectIntentRequest.payload);
  const tag = request.body.queryResult.intent.displayName;

  let jsonResponse = {};
  // console.log('tag', tag);
  switch (tag) {
    case 'UserName':
      UserName(request, response);
      break;

    case 'UserBorn':
      UserBorn(request, response);
      break;

    case 'CountBirthday':
      CountBirthday(request, response);
      break;

    default:
      jsonResponse = {
        fulfillment_messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [`Sorry, I don't understand`],
            },
          },
        ],
      };

      response.send(jsonResponse);
      break;
  }
};

module.exports = {
  handleWebhook,
};
