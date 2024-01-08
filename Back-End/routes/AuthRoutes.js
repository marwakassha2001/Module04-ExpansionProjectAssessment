import express from 'express';
import { authenticate } from '../middlewares/authMidellware.js';
import {
  signup,
  login,
  loggedInUser,
  logout
  
} from '../controllers/ClientController.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/login-user', authenticate,loggedInUser);
router.post('/logout', logout);


export default router