
import { gql } from '@apollo/client';


export const CREATE_USER = gql`
mutation CreateUser($memberEmail: String!, $password: String!, $clubPassword: String!, $memberFirstName: String!, $memberLastName: String!) {
  createUser(memberEmail: $memberEmail, password: $password, clubPassword: $clubPassword, memberFirstName: $memberFirstName, memberLastName: $memberLastName) {
    user {
      memberEmail
      password
      loginToken
      loginValid
      memberFirstName
      memberLastName
    }
  }
}
`;

export const LOGIN_M = gql`
  mutation Login($password: String!, $memberEmail: String!) {
    login(password: $password, memberEmail: $memberEmail) {
      user {
        memberEmail
        memberFirstName
        memberLastName
        _id
      }
    }
  }
`;

export const EMAIL_UPDATE = gql`
  mutation Mutation($id: String!, $memberEmail: String!) {
    updateEmail(_id: $id, memberEmail: $memberEmail) {
      token
    }
  }
`;

export const PASS_UPDATE = gql`
  mutation UpdatePassword($id: String!, $password: String!) {
    updatePassword(_id: $id, password: $password) {
      token
    }
  }
`;