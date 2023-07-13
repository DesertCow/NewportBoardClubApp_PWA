import { gql } from '@apollo/client';


export const getWX_Q = gql`
    query WeatherData {
      getWX {
        airTemp
        tideMSL
        tideRise
        waterTemp
        wind
      }
    }
`;

export const getWidgetWX_Q = gql`
    query GetWX {
      getWidgetWX {
        wind
        windType
        airTemp
        waterTemp
        tideMSL
        tideRise
        nextTideType
        nextTideHeight
        nextTideTime
        surfHeightBlackies
        surfHeight36th
        surfHeight56th
        surfHeightRiver
      }
    }
`;

export const getCurrentEvents_Q = gql`
  query Query {
    getCurrentEvents {
      _id
      eventName
      eventSlogan
      eventDate
      eventLength
      eventDescription
      eventPhotoURL
      eventCurrent
    }
  }
`;

export const getHistoryEvents_Q = gql`
  query Query {
    getPreviousEvents {
      _id
      eventName
      eventSlogan
      eventDate
      eventLength
      eventDescription
      eventPhotoURL
      eventCurrent
    }
  }
`;

export const getSurfSessionList_Q = gql`
  query Query($userId: String!) {
    getAllUsersSurfSession(userID: $userId) {
      _id
      sessionDate
      sessionTime
      sessionLocation
    }
  }
`;

export const getSurfSession_Q = gql`
  query GetSurfSession($sessionId: String!) {
    getSurfSession(sessionID: $sessionId) {
      _id
      userID
      sessionDate
      sessionTime
      sessionLocation
      skyConditions
      waveSize
      tideLevel
      tideDirection
      sessionLength
      surfboardShaper
      surfboardModel
      surfboardLengthFT
      surfboardLengthIN
      surfboardVolume
      surfboardFinConfig
      sessionNotes
      sessionRating
    }
  }
`;

export const getEvent_Q = gql`
  query GetEvent($eventId: String) {
    getEvent(eventID: $eventId) {
      _id
      eventName
      eventSlogan
      eventDate
      eventLength
      eventDescription
      eventPhotoURL
      eventCurrent
    }
  }
`;

export const getURLupload_Q = gql`
query Query($userId: String!) {
  uploadUserProfilePicture(userID: $userId)
}
`;