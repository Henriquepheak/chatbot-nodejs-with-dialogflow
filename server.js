const bodyParser = require('body-parser');
const express = require('express');
const { bottender, getClient } = require('bottender');
const {
  handleWebhook: WebhookDialogflow,
} = require('./src/services/dialogflow/index');
const { newMessages } = require('./src/controllers/messages');
const { newUser } = require('./src/controllers/user');
const { verifyWebhookDialogflow } = require('./src/middlewares/verifyAuth');
const messageRoute = require('./src/routes/messageRoutes');
const userRoute = require('./src/routes/userRoutes');

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});
const client = getClient('messenger');

const port = Number(process.env.PORT) || 5000;

// the request handler of the bottender app
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  const verify = (req, _, buf) => {
    req.rawBody = buf.toString();
  };
  server.use(bodyParser.json({ verify }));
  server.use(bodyParser.urlencoded({ extended: false, verify }));

  server.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // your custom route
  server.use('/api/v1', messageRoute);
  server.use('/api/v1', userRoute);

  // route for webhook request
  server.post('/webhook/dialogflow', (req, res, next) => {
    verifyWebhookDialogflow(req, res, next);
    WebhookDialogflow(req, res);
  });

  server.all('*', async (req, res) => {
    // Parse the request body from the POST
    let body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {
      body.entry.forEach(function (entry) {
        // Gets the body of the webhook event
        if (entry.messaging && !entry.messaging[0].postback) {
          const userId = entry.messaging[0].sender.id;
          const messages = entry.messaging[0].message.text;
          client
            .getUserProfile(userId)
            .then(async ({ id, firstName, lastName }) => {
              await newUser({ firstName, lastName, facebookId: id });
              await newMessages({ facebookId: id, messages });
            });
        }
      });

      // Return a '200 OK' response to all events
      res.status(200).send('EVENT_RECEIVED');
    }

    return await handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

module.exports = server;
