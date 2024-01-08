import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const secret = `${process.env.JWT_SECRET}`; 

export const generateToken = (client) => {
    return jwt.sign(
        {
            id: client.id,
            fullName: client.fullName,
            email: client.email,
            role: client.role
        },
        secret, { expiresIn: '24h' }); 
};

export const verifyToken = (token) => {
    return jwt.verify(token, secret);
};