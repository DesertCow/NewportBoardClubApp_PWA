
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

export const NAME_UPDATE = gql`
  mutation Mutation($id: String!, $memberFirstName: String!, $memberLastName: String!) {
    updateName(_id: $id, memberFirstName: $memberFirstName, memberLastName: $memberLastName) {
      user {
        memberFirstName
        memberLastName
      }
    }
  }
`;

export const CREATE_SURF_SESSION = gql`
  mutation CreateSurfSession($userId: String!, $sessionDate: String!, $sessionTime: String!, $skyConditions: String!, $waveSize: String!, $sessionLength: String!, $sessionLocation: String, $tideLevel: Float, $tideDirection: String, $surfboardShaper: String, $surfboardModel: String, $surfboardLengthFt: Int, $surfboardLengthIn: Int, $surfboardVolume: Int, $surfboardFinConfig: String, $sessionNotes: String, $sessionRating: Int) {
    createSurfSession(userID: $userId, sessionDate: $sessionDate, sessionTime: $sessionTime, skyConditions: $skyConditions, waveSize: $waveSize, sessionLength: $sessionLength, sessionLocation: $sessionLocation, tideLevel: $tideLevel, tideDirection: $tideDirection, surfboardShaper: $surfboardShaper, surfboardModel: $surfboardModel, surfboardLengthFT: $surfboardLengthFt, surfboardLengthIN: $surfboardLengthIn, surfboardVolume: $surfboardVolume, surfboardFinConfig: $surfboardFinConfig, sessionNotes: $sessionNotes, sessionRating: $sessionRating) {
      _id
    }
  }
`;