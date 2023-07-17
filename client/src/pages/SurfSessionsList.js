
//* Import Components
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

import { useNavigate } from "react-router-dom";

import { getSurfSessionList_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';


function ViewPreviousSessions() {

  //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    const navigate = useNavigate();

    //* Grab Current User ID from JWT Token
    let jwtToken = Auth.getProfile()

    //* Get List of surf sessions for user from Database
    var { loading, data } = useQuery(getSurfSessionList_Q, {
      variables: { userId: jwtToken.data._id },
    });

    
    const displaySurfSession = async (event, reqSessionID) => {
      event.preventDefault()
      // var location = index + arrayOffset

      // console.log("Session ID: " + reqSessionID)

      navigate("/surf_log/surfSession/" + reqSessionID);

    };


    function populateListOfSessions(sessionData) {

      // var sessionListHTML = []

      // console.log("Session ID: " + sessionData._id)
      // console.log("Sesstion Date: " + JSON.stringify(sessionData.sessionDate));
      // console.log("Sesstion Time: " + JSON.stringify(sessionData.sessionTime));
      // console.log("Sesstion Location: " + JSON.stringify(sessionData.sessionLocation));

      
      //* Create Buttons based user sessions pulled from DB
      // sessionListHTML.push(<li key={sessionData._id} onClick={(event) => displayItem(event, sessionData.sessionDate, essionData.sessionTime)} className="subMenuBtns m-4 p-2"><div variant="light">{sessionData._id}</div>{' '}</li>)
      sessionListHTML.push(<li key={sessionData._id} onClick={(event) => displaySurfSession(event, sessionData._id)} className="previousSurfSessionBTN mt-4 p-3">{sessionData.sessionDate} ({sessionData.sessionTime}) @ {sessionData.sessionLocation}</li>)
      // console.log(sessionListHTML)
    }

    if(loading){

    }

    if(!loading){

      var sessionListHTML = []

      //* Generate a button for each surf session in the database for the user
      data.getAllUsersSurfSession.forEach(populateListOfSessions)

      return (

        <div className="d-flex flex-column min-vh-100 surfSessionsBG">
          <header className="">
            <Header />
          </header>

          {/* Weather Widget Component */}
          <WeatherWidget />

          <div className="d-flex row justify-content-center align-items-center surfSessionCol">
          
          <div className="row surfSessionsTitleBox">
            <h1 className="previousSurfSessionTitle justify-content-center align-items-center text-center my-3">Surf Sessions</h1>
          </div>
          
          
            <ul className="row justify-content-center align-items-center text-center viewSurfSessionSpacer w-100 pr-0">
              {sessionListHTML}
            </ul>
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

export default ViewPreviousSessions;