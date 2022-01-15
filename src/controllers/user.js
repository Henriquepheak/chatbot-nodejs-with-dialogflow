const { UserFacebook, MessagesFacebook } = require('../database/models');

const getUser = async ({ facebookId }) => {
  try {
    return await UserFacebook.findOne({
      where: {
        facebookId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (request, response) => {
  try {
    const users = await UserFacebook.findAll();
    response.send(users);
  } catch (error) {
    console.log(error);
  }
};

const getSummary = async (request, response) => {
  try {
    const user = await UserFacebook.findAll({
      include: [
        {
          model: MessagesFacebook,
          as: 'messages',
        },
      ],
    });

    response.send(user);
  } catch (error) {
    console.log(error);
  }
};

const newUser = async ({ firstName, lastName, nickname, facebookId }) => {
  try {
    const user = await UserFacebook.findOne({
      where: {
        facebookId,
      },
    });

    if (!user) {
      return await UserFacebook.create({
        firstName,
        lastName,
        nickname,
        facebookId,
        createdAt: new Date(),
      });
    } else {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async ({
  firstName,
  lastName,
  nickname,
  bornAt,
  facebookId,
}) => {
  try {
    const user = await UserFacebook.findOne({
      where: {
        facebookId,
      },
    });

    if (!user) {
      await newUser({ firstName, lastName, nickname, facebookId });
    } else {
      await user.update({
        firstName,
        lastName,
        nickname,
        bornAt,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
  getUsers,
  getSummary,
  newUser,
  updateUser,
};
