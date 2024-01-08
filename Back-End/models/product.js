'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.ClientModel);
    }
  }
  Product.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    supplier: DataTypes.STRING,
    clientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};