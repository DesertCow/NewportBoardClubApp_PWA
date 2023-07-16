import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

import { getSurfHackList_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

function SurfHacks() {

  const navigate = useNavigate();

  var finalSurfHackListHTML = []

  //* Get List of surf hacks for user from Database
  var { loading, data } = useQuery(getSurfHackList_Q);

  //* Build Events HTML based off passed Event Data
  function buildEventBTN(surfHackData){

    //* Generate IMG and Button for each event
    finalSurfHackListHTML.push(
      <div className="surfHackDisplayBox" key={surfHackData._id} onClick={(event) => displaySurfHackDetails(event, surfHackData._id)}>
        <h1 className="mt-0 mb-2 pt-3 px-3">{surfHackData.hackTitle}</h1>
        <img src={surfHackData.hackPhotoURL} 
          className="eventIconPhoto mb-4 px-3" 
          alt="Surf Hack Photo" />
        {/* <h1 className="mb- mt-2">{surfHackData.eventDate}</h1> */}
      </div>)

  }

  const displaySurfHackDetails = async (event, reqSurfHackID) => {
    event.preventDefault();

    navigate("/surf_hacks/" + reqSurfHackID);
  };

  //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    if(!loading) {

      let surfHackList = data.getSurfHackList

      //* Lopp over each current event
      surfHackList.forEach(buildEventBTN)

      return (

        <div className="d-flex flex-column min-vh-100">
          {/* <header className="mt-auto mb-0"> */}
          <header className="">
            <Header />
          </header>

          
          {/* Weather Widget Component */}
          <WeatherWidget />


          <h1 className="text-center mt-2 surfHacksTitle">Surf Hacks</h1>

          <div className="text-center surfHackListMain">
            {finalSurfHackListHTML} 
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

export default SurfHacks;