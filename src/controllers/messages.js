const { MessagesFacebook } = require('../database/models');

const getMessage = async (request, response) => {
  try {
    const { id } = request.params;
    const message = await MessagesFacebook.findOne({
      where: {
        id,
      },
    });

    response.send(message);
  } catch (error) {
    console.log(error);
  }
};

const getMessages = async (request, response) => {
  try {
    const messages = await MessagesFacebook.findAll();

    response.send(messages);
  } catch (error) {
    console.log(error);
  }
};

const newMessages = ({ messages, facebookId }) => {
  try {
    return MessagesFacebook.create({
      facebookId,
      messages,
      createdAt: new Date(),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMessage,
  getMessages,
  newMessages,
};
