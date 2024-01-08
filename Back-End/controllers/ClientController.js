import db from '../models/index.js';
import { generateToken } from '../utils/jwt.js';
const {ClientModel} = db
export const signup = async (req, res) => {
    const { fullName, email, password,role} = req.body;
    try {
        const existingUser = await ClientModel.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Create new user
        
        const client = await ClientModel.create({ fullName,password, email,role});

   

        res.status(201).json({ message: 'User created successfully', client });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const client = await ClientModel.findOne({ where: { email } });
        if (!client || !client.validPassword(password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(client);
      
        // Set token in HTTP-only cookie
        res.cookie('token', token, { httpOnly: true,secure: true,
        sameSite: 'None',})
        res.status(200).json({ status: 200, message: 'Login successful' });
        
        
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loggedInUser = (req,res) =>{

        res.json({ client: req.user }).status(200);
   
}

export const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message:'Logged out'});
}