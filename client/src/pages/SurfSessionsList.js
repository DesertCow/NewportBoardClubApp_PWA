
//* Import Components
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { useNavigate } from "react-router-dom";

import { getSurfSessionList_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

function ViewPreviousSessions() {

  const navigate = useNavigate();

  //* Grab Current User ID from JWT Token
  let jwtToken = Auth.getToken()
  jwtToken = JSON.parse(jwtToken)

  //* Get List of surf sessions for user from Database
  var { loading, data } = useQuery(getSurfSessionList_Q, {
    variables: { userId: jwtToken.user._id },
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
    sessionListHTML.push(<li key={sessionData._id} onClick={(event) => displaySurfSession(event, sessionData._id)} className="previousSurfSessionBTN m-4 p-2">{sessionData.sessionDate} ({sessionData.sessionTime}) @ {sessionData.sessionLocation}</li>)
    // console.log(sessionListHTML)
  }

  if(loading){

  }

  if(!loading){

    var sessionListHTML = []

    //* Generate a button for each surf session in the database for the user
    data.getAllUsersSurfSession.forEach(populateListOfSessions)

    return (

      <div className="d-flex flex-column min-vh-100">
        <header className="">
          <Header />
        </header>

        {/* Weather Widget Component */}
        <WeatherWidget />

        <div className="d-flex flex-column justify-content-center align-items-center surfSessionCol">
         
         <h1 className="previousSurfSessionTitle text-center mt-3">Surf Sessions</h1>
        
          <ul className="text-center viewSurfSessionSpacer">
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

export default ViewPreviousSessions;