import sequelize from "./config/db.js";
import express from "express";
import cors from "cors";
import db from './models/index.js';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import AuthRoutes from './routes/AuthRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'
dotenv.config();

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error("Failed to synchronize database: ", error);
  });

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth',AuthRoutes);
app.use('/product',ProductRoutes);

app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  })