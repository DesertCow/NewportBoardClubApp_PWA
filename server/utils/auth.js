
const jwt = require('jsonwebtoken');


module.exports = {
  signToken: function ({ memberEmail, memberFirstName,memberLastName, _id }) {
    const payload = { memberEmail, memberFirstName, memberLastName, _id };
    return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TOKEN_VALID_LENGTH });
  },
};