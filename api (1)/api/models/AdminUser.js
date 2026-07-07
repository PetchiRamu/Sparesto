'use strict';

module.exports = (sequelize, DataTypes) => {
  const AdminUser = sequelize.define(
    'AdminUser',
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
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Admin'
      }
    },
    {
      tableName: 'AdminUsers'
    }
  );

  AdminUser.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return AdminUser;
};