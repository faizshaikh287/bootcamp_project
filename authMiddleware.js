const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = verifyToken(token);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;

    
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error authenticating user' });
  }
};


const verifyToken = (token) => {
  
  const decoded = jwt.verify(token, 'secret');
  return decoded;
};

module.exports = authMiddleware;
