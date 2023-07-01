const jwt = require('jsonwebtoken');

const secret = 'fGu8zUbHCFJBOc8qETXjwPIxR';
const expiration = '2h';

module.exports = {
  signToken: function ({ memberEmail, name, _id }) {
    const payload = { memberEmail, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};