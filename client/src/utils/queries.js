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
