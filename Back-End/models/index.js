import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import Client from "./client.js";
import Product from './product.js';

dotenv.config()
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
      host: process.env.DB_HOST,
      dialect: 'mysql'
  }
);


const ClientModel = Client(sequelize,Sequelize);
const ProductModel = Product(sequelize,Sequelize);

const db ={
  sequelize,
  Sequelize,
  ClientModel,
  ProductModel
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
