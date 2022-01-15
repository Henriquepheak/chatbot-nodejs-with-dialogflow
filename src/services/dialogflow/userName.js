const { updateUser } = require('../../controllers/user');

const UserName = async (request, response) => {
  const tag = request.body.queryResult.intent.displayName;
  let jsonResponse = {};

  if (
    tag === 'UserName' &&
    request.body.session &&
    request.body.queryResult.parameters.UserName
  ) {
    const session = request.body.session;
    const userId = session.split(':')[1];
    const name = request.body.queryResult.parameters.UserName;

    if (name && userId) {
      await updateUser({
        facebookId: userId,
        nickname: name[0],
      });

      jsonResponse = {
        fulfillment_messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [`Hallo ${name}, nice to meet you.`],
            },
          },
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [
                `To know you more, when you born?`,
                `What's your birthday?`,
              ],
            },
          },
        ],
      };
    } else {
      //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
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
    }
  } else {
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
  }

  await response.send(jsonResponse);
};

module.exports = UserName;
