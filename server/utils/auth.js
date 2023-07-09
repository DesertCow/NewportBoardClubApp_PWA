const jwt = require('jsonwebtoken');

const secret = 'fGu8zUbHCFJBOc8qETXjwPIxR';
const expiration = '2h';

module.exports = {
  signToken: function ({ memberEmail, memberFirstName,memberLastName, _id }) {
    const payload = { memberEmail, memberFirstName, memberLastName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};