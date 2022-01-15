const { chain } = require('bottender');
const dialogflow = require('@bottender/dialogflow');

async function SayHello(context) {
  await context.sendText('Hello!');
}

async function Unknown(context) {
  await context.sendText('Sorry, I don’t know what you say.');
}

async function GetStarted(context, props) {
  if (context.event.isPayload) {
    if (context.event.payload === 'GET_STARTED') {
      await context.sendText(`Hello! I am Jarvis your personal assistant.`);
      await context.sendText(`What is your name?.`);
    } else {
      return props.next;
    }
  } else {
    return props.next;
  }
}

const Dialogflow = dialogflow({
  projectId: process.env.GOOGLE_APPLICATION_PROJECT_ID,
  actions: {
    greeting: SayHello,
  },
});

module.exports = async function App() {
  return await chain([
    GetStarted,
    Dialogflow, //
    Unknown,
  ]);
};
