'use strict';
import { Model } from 'sequelize';
import bcrypt from 'bcrypt'
export default (sequelize, DataTypes) => {
  class Client extends Model {
    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
      static associate(models) {
        Client.hasMany(models.ProductModel,{
          foreignKey:'clientId',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        });
    }
  }
  Client.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      },
    },
  });
  return Client;
};