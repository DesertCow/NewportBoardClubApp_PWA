const jwt = require('jsonwebtoken');

//* Grab Key From ENV File
const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
  signToken: function ({ memberEmail, memberFirstName,memberLastName, _id }) {
    const payload = { memberEmail, memberFirstName, memberLastName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};