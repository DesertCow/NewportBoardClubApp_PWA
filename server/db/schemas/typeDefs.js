

//* GraphQL Schema Definition
const { gql } = require("@apollo/server");

//getSubMenu(menuID: Int): [String]

const typeDefs = `#graphql

  type Query {
    login(email: String!, password: String!): Auth
    getWX: WX
    getWidgetWX: WidgetWX
  }

  type Mutation {
    createUser(email: String!, password: String!, clubPassword: String!, memberFirstName: String!, memberLastName: String!): Auth
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
    memberFirstName: String
    memberLastName: String
  }

  type WX {
        wind: Int
        airTemp: Int
        waterTemp: Float
        tideMSL: Float
        tideRise: Boolean
  }

  type WidgetWX {
        wind: Int
        windType: String
        airTemp: Int
        waterTemp: Float
        tideMSL: Float
        tideRise: Boolean
        nextTideType: String
        nextTideHeight: Float
        nextTideTime: String
        surfHeightBlackies: String
        surfHeight36th: String
        surfHeight56th: String
        surfHeightRiver: String
  }

`;

module.exports = typeDefs;