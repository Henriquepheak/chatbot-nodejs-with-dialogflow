'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFacebook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.MessagesFacebook, {
        foreignKey: 'facebookId',
        as: 'messages',
        sourceKey: 'facebookId',
      });
    }
  }
  UserFacebook.init(
    {
      facebookId: DataTypes.BIGINT,
      nickname: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      bornAt: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'UserFacebook',
    }
  );
  return UserFacebook;
};
