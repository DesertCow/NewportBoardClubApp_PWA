

//* GraphQL Schema Definition
const { gql } = require("@apollo/server");

//getSubMenu(menuID: Int): [String]

const typeDefs = `#graphql

  type Query {
    login(memberEmail: String!, password: String!): Auth
    getWX: WX
    getWidgetWX: WidgetWX
  }

  type Mutation {
    createUser(memberEmail: String!, password: String!, clubPassword: String!, memberFirstName: String!, memberLastName: String!): Auth
    login(memberEmail: String!, password: String!): Auth
    updateEmail(_id: String!, memberEmail: String!): Auth
    updatePassword(_id: String!, password: String!): Auth
    updateName(_id: String!, memberFirstName: String!, memberLastName: String!): Auth
    createEvent( eventName: String!, eventSlogan: String!, eventDate: String!, eventLength: String, eventDescription: String!, eventPhotoURL: String!): Event
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

  type Event {
    eventName: String
    eventSlogan: String
    eventDate: String
    eventLength: String
    eventDescription: String
    eventPhotoURL: String
  }

  type User {
    _id: ID
    memberEmail: String
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