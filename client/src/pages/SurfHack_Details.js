import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

import { getSurfHack_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

import { Interweave } from 'interweave';

import { useNavigate } from "react-router-dom";

function SurfHackDetails() {

  const navigate = useNavigate();

  //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    let surfHackID = window.location.href.split(`/surf_hacks/`)
    surfHackID = surfHackID[1]

    // console.log("Hack ID = " + surfHackID)

    //* Get requested Event from Database
    var { loading, data } = useQuery(getSurfHack_Q, {
      variables: { surfHackId: surfHackID },
    });

    //* Handles Event Switch Changes
    const handleReturnSurfHacks = async (event) => {
      event.preventDefault();
      navigate("/surf_hacks");
      window.scrollTo(0, 0);
    };


    if(!loading)
    {

      // let surfHackData = data.getSurfHack

      // console.log(surfHackData)

      return (

            <div className="d-flex flex-column min-vh-100">
              <header className="">
                <Header />
              </header>

              {/* Weather Widget Component */}
              <WeatherWidget />

              <div className="d-flex flex-column justify-content-center align-items-center surfSessionCol">

                <div className="mt-4 ml-3 d-flex justify-content-center align-items-center">
                  <img src={data.getSurfHack.hackPhotoURL}
                    className="surfHackDetailsPhoto mb-3"
                    alt={data.getSurfHack.hackTitle} 
                  />
                </div>

                <h1 className="mt-2 px-3 text-center eventDetailsEventTitle">{data.getSurfHack.hackTitle}</h1>

                <div className="mt-0 text-center">
                  <Interweave content={data.getSurfHack.hackBody} />
                </div>

                <div className="eventDetailReturnBTN eventBottomMargin p-2 mt-4 d-flex align-items-center justify-content-center" onClick={(event) => handleReturnSurfHacks(event)}>Surf Hack Home</div>
              
              </div>

              <footer className="mt-auto mb-0">
                <NavFooter />
              </footer>
            </div>
      )

    }
  }
  
  
  
  else {

    return(
      <div className="d-flex flex-column align-items-center justify-content-center">

        <LoginPage />

      </div>   
    )
  }

}

export default SurfHackDetails;