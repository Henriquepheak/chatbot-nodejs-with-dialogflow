const moment = require('moment');
const { getUser } = require('../../controllers/user');

const daysUntil = (date) => {
  let birthday = moment(date);

  // uncomment this line to simulate it is your birthday and comment the next one to test it.
  // var today = moment("2017-03-25");
  let today = moment().format('YYYY-MM-DD');

  // calculate age of the person
  let age = moment(today).diff(birthday, 'years');
  moment(age).format('YYYY-MM-DD');
  // console.log('person age', age);

  let nextBirthday = moment(birthday).add(age, 'years');
  moment(nextBirthday).format('YYYY-MM-DD');

  /* added one more year in case the birthday has already passed
    to calculate date till next one. */
  if (nextBirthday.isSame(today)) {
    return 0;
  } else {
    nextBirthday = moment(birthday).add(age + 1, 'years');
    return nextBirthday.diff(today, 'days');
  }
};

const CountBirthday = async (request, response) => {
  const tag = request.body.queryResult.intent.displayName;
  let jsonResponse = {};
  if (tag === 'CountBirthday' && request.body.session) {
    const session = request.body.session;
    const userId = session.split(':')[1];

    if (userId) {
      const user = await getUser({
        facebookId: userId,
      });

      if (user && user.bornAt) {
        const days = daysUntil(user.bornAt);

        //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
        jsonResponse = {
          fulfillment_messages: [
            {
              text: {
                //fulfillment text response to be sent to the agent
                text: [
                  `Hi ${user.firstName}, you have ${days} days until your birthday.`,
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

module.exports = CountBirthday;
