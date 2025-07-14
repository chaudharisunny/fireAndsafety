import JWT from 'jsonwebtoken'
import process from 'process'; 
import dotenv from 'dotenv';
dotenv.config();

function newToken(user) {
    const payload = {
      email: user.email,
      username: user.username,
    };
    return JWT.sign(payload,process.env.JWT_SECRET , { expiresIn: '8h' });
  }
  
  function verifyToken(token) {
    try {
      return JWT.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
  export { newToken, verifyToken };
  