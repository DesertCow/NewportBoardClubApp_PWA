

//* GraphQL Schema Definition
const { gql } = require("@apollo/server");

//getSubMenu(menuID: Int): [String]

const typeDefs = `#graphql

  type Query {
    login(email: String!, password: String!): Auth
  }

  type Mutation {
    createUser(email: String!, password: String!, customerName: String!): Auth
    login(email: String!, password: String!): Auth
    updateEmail(_id: String!, email: String!): Auth
    updatePassword(_id: String!, password: String!): Auth
    updateName(_id: String!, name: String!): Auth
  }

  type UserCreated {
    password: String
    user: User
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
    admin: Boolean
  }

  type User {
    _id: ID
    email: String
    password: String
    loginValid: Boolean
    loginToken: String
    customerName: String
  }

`;

module.exports = typeDefs;