'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessagesFacebook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      // this.belongsTo(models.UserFacebook, {
      //   foreignKey: 'facebookId',
      // });
    }
  }
  MessagesFacebook.init(
    {
      facebookId: DataTypes.BIGINT,
      messages: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'MessagesFacebook',
    }
  );
  return MessagesFacebook;
};
