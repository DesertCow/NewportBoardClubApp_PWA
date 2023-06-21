import { gql } from '@apollo/client';


export const getWX_Q = gql`
    query GetWX {
      getWX {
        airTemp
        tideMSL
        tideRise
        waterTemp
        wind
      }
    }
`;
