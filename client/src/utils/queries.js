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
query GetCurrentEvents {
  getCurrentEvents
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
