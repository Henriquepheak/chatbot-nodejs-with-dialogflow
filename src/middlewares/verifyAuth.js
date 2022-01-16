const verifyWebhookDialogflow = (req, res, next) => {
  try {
    const { verify_token } = req.headers;

    if (!verify_token) {
      return res.status(400).send('Unauthorized');
    }

    if (verify_token != process.env.DIALOGFLOW_VERIFY_TOKEN) {
      return res.status(401).send('Unauthorized token');
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  verifyWebhookDialogflow,
};
