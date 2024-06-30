const { newToken } = require('../helpers/tokenHelper');

const getNewToken = (request, response) => {
    const expires   = 24;
    const userData  = { name: 'user: anonymous' };

    const token     = newToken(userData, expires); 
    const expiresIn = `${expires} hours`;

    response.json({ token, expiresIn });
};

module.exports = { getNewToken };
