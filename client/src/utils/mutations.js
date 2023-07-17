
import { gql } from '@apollo/client';


export const CREATE_USER = gql`
mutation CreateUser($memberEmail: String!, $password: String!, $clubPassword: String!, $memberFirstName: String!, $memberLastName: String!) {
  createUser(memberEmail: $memberEmail, password: $password, clubPassword: $clubPassword, memberFirstName: $memberFirstName, memberLastName: $memberLastName) {
    token
  }
}
`;

export const LOGIN_M = gql`
  mutation Login($password: String!, $memberEmail: String!) {
    login(password: $password, memberEmail: $memberEmail) {
      token
      admin
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
      token
    }
  }
`;

export const CREATE_SURF_SESSION = gql`
  mutation CreateSurfSession($userId: String!, $sessionDate: String!, $sessionTime: String!, $skyConditions: String!, $waveSize: String!, $sessionLength: String!, $sessionLocation: String, $tideLevel: Float, $tideDirection: String, $surfboardShaper: String, $surfboardModel: String, $surfboardLengthFt: Int, $surfboardLengthIn: Int, $surfboardVolume: Float, $surfboardFinConfig: String, $sessionNotes: String, $sessionRating: Int) {
    createSurfSession(userID: $userId, sessionDate: $sessionDate, sessionTime: $sessionTime, skyConditions: $skyConditions, waveSize: $waveSize, sessionLength: $sessionLength, sessionLocation: $sessionLocation, tideLevel: $tideLevel, tideDirection: $tideDirection, surfboardShaper: $surfboardShaper, surfboardModel: $surfboardModel, surfboardLengthFT: $surfboardLengthFt, surfboardLengthIN: $surfboardLengthIn, surfboardVolume: $surfboardVolume, surfboardFinConfig: $surfboardFinConfig, sessionNotes: $sessionNotes, sessionRating: $sessionRating) {
      _id
    }
  }
`;

export const DELETE_SURF_SESSION = gql`
  mutation Mutation($sessionId: String!) {
    deleteSurfSession(sessionID: $sessionId)
  }
`;

export const DELETE_SHAPER = gql`
  mutation DeleteShaper($shaperId: String!) {
    deleteShaper(shaperID: $shaperId)
  }
`;

export const ADD_SHAPER = gql`
  mutation CreateShaper($shaperName: String!) {
    createShaper(shaperName: $shaperName) {
      _id
      shaperName
    }
  }
`;

export const ADD_SURF_HACK = gql`
  mutation CreateSurfHack($hackTitle: String!, $hackBody: String!, $hackPhotoUrl: String!) {
    createSurfHack(hackTitle: $hackTitle, hackBody: $hackBody, hackPhotoURL: $hackPhotoUrl) {
      hackTitle
      hackBody
      hackPhotoURL
    }
  }
`;

export const DELETE_SURF_HACK_M = gql`
  mutation Mutation($hackId: String!) {
    deleteSurfHack(hackID: $hackId)
  }
`;

export const UPDATE_SURF_HACK =gql`
  mutation Mutation($hackId: String!, $newHackTitle: String, $newHackBody: String, $newHackPhotoUrl: String) {
    updateSurfHack(hackID: $hackId, newHackTitle: $newHackTitle, newHackBody: $newHackBody, newHackPhotoURL: $newHackPhotoUrl) {
      _id
      hackTitle
      hackBody
      hackPhotoURL
    }
  }
`;

export const DELETE_EVENT_M = gql`
  mutation DeleteEvent($eventId: String!) {
    deleteEvent(eventID: $eventId)
  }
`;