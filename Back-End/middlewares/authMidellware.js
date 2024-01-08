import { verifyToken } from '../utils/jwt.js'

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Not Authenticated' });
    }
    const decoded = verifyToken(token);
    req.client = decoded
    
    next();
} catch (error) {
    res.status(401).json({ message: error });
}
};

export const checkRole = (roles) => (req, res, next) => {
    if (req.client && roles.includes(req.client.role)) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: You do not have the required permissions.' });
    }
};