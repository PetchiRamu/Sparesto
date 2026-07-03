'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define(
    'User',
    {
      companyName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      otp: {
        type: DataTypes.STRING
      },

      otpExpire: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'Users'
    }
  );

  return User;

};