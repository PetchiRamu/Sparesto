'use strict';

module.exports = (sequelize, DataTypes) => {

  const RegistrationOTP = sequelize.define(
    'RegistrationOTP',
    {
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

      otp: {
        type: DataTypes.STRING,
        allowNull: false
      },

      otpExpire: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'RegistrationOTPs'
    }
  );

  return RegistrationOTP;

};