const jwt       = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET_KEY;

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401); // No llegó token => 401: No autorizado
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.sendStatus(403); // Token no válido => 403: Prohibido
      req.user = user;
      next();
    });
}

const newToken = (userData, hours) => {
  return jwt.sign(userData, secretKey, { expiresIn: `${hours}h` }); // Token expira en [hours] hora
}

module.exports = { authenticateToken, newToken };
