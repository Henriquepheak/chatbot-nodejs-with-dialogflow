const moment = require('moment');
const { getUser, updateUser } = require('../../controllers/user');

const UserBorn = async (request, response) => {
  const tag = request.body.queryResult.intent.displayName;
  let jsonResponse = {};
  // console.log('session', request.body.session)
  if (
    tag === 'UserBorn' &&
    request.body.session &&
    request.body.queryResult.parameters.date
  ) {
    const session = request.body.session;
    const userId = session.split(':')[1];
    const dateBorn = request.body.queryResult.parameters.date;

    if (dateBorn && userId) {
      let bornAt = moment(dateBorn, 'YYYY-MM-DD hh:mm:ss');
      bornAt = bornAt.format('YYYY-MM-DD');

      await updateUser({
        facebookId: userId,
        bornAt,
      });

      const user = await getUser({
        facebookId: userId,
      });

      // console.log(user);

      //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
      jsonResponse = {
        fulfillment_messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [
                `I have saved your date of birth on ${bornAt} to our database.`,
              ],
            },
          },
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [
                `Do you want to know how many days are until your birthday?`,
              ],
            },
          },
        ],
      };
    } else {
      console.log('no date');
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

module.exports = UserBorn;
