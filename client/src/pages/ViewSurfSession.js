


//* Import Components
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

import { getSurfSession_Q } from '../utils/queries';
import { DELETE_SURF_SESSION } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';

import { useNavigate } from "react-router-dom";


function ViewSurfSession() {

    //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    const navigate = useNavigate();
    const [deleteSurfSession, { deleteSurfSessionID }] = useMutation(DELETE_SURF_SESSION);

    let surfSessionID = window.location.href.split(`/surf_log/surfSession/`)
    surfSessionID = surfSessionID[1]

    //* Get requested surf session from Database
    var { loading, data } = useQuery(getSurfSession_Q, {
      variables: { sessionId: surfSessionID },
    });

    const handlePreviousSessions = async (event) => {
      // event.preventDefault();
      navigate("/surf_log/view_previous_sessions");
    };

    const handleDeleteSession = async (event) => {
      // event.preventDefault();

      console.log("Delete Session: " + surfSessionID)
      
      let confirmCheck = confirm("Are you sure you want to delete this Surf Session?");

      if(confirmCheck) {
      
        const { surfSessionData } = await deleteSurfSession({

          variables: { 
            sessionId: surfSessionID
          },
        });

        navigate("/surf_log/view_previous_sessions");
        location.reload()
      }
    };


    if(!loading) {
      
      var surfSessionData = data.getSurfSession

      return (

        <div className="d-flex flex-column min-vh-100">
          <header className="">
            <Header />
          </header>

          {/* Weather Widget Component */}
          <WeatherWidget />

          <div className="d-flex flex-column justify-content-center align-items-center">
          
          <h1 className="viewSurfSessionTitle text-center mt-3">Surf Session</h1>

            <div className="d-flex flex-row justify-content-center align-items-center viewSurfSessionDateBox">
              <div className="d-flex p-2 mx-5">
                <div className="flex-col m-2 dateFont justify-content-center align-items-center text-center">
                  <h1>{surfSessionData.sessionLocation}</h1>
                  <div> {surfSessionData.sessionDate} ({surfSessionData.sessionTime})</div>
                  <div>Session Length: {surfSessionData.sessionLength}</div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center viewSurfSessionConditions">
              <div className="d-flex p-2 mx-5">
                <div className="flex-col m-2 justify-content-start align-items-center">
                  <div>Waves: {surfSessionData.waveSize} ft</div>
                  <h1>Sky Conditions: {surfSessionData.skyConditions}</h1>
                  <div>Tide: {surfSessionData.tideLevel} ft ({surfSessionData.tideDirection})</div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center viewSurfSessionSurfboard">
              <div className="d-flex p-2 mx-1">
                <div className="flex-col m-2 my-2 justify-content-start align-items-center">
                  <div> Model: {surfSessionData.surfboardModel}</div>
                  <div> Shaper: {surfSessionData.surfboardShaper}</div>
                  <div> Length: {surfSessionData.surfboardLengthFT}`{surfSessionData.surfboardLengthIN} ft</div>
                  <div> Volume: {surfSessionData.surfboardVolume} L</div>
                  <div> Fin Setup: {surfSessionData.surfboardFinConfig}</div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center viewSurfSessionNotes">
              <div className="d-flex p-2 mx-0">
                <div className="flex-col m-2 justify-content-start align-items-center text-center">
                  <h1 className="">Session Notes:</h1>
                  <p>{surfSessionData.sessionNotes}</p>
                  <h1>Session Rating: {surfSessionData.sessionRating}/5</h1>
                </div>
              </div>
            </div>

          </div>

          <div className="row px-5 py-3 viewSurfSessionSpacer align-items-center justify-content-center">
            <div className="viewSurfSessionListBTN mt-3 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handlePreviousSessions(event)}>Sessions List</div>
            <div className="viewSurfSessionDeleteBTN mt-5 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleDeleteSession(event)}>Delete Session</div>
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

export default ViewSurfSession;