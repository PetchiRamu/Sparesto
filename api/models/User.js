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
        unique: true,
        set(value) {
          if (value) {
            this.setDataValue('email', value.toLowerCase());
          }
        }
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

      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Admin'
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

  User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    delete values.otp;
    delete values.otpExpire;
    return values;
  };

  return User;

};