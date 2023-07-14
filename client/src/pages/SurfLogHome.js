

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { useNavigate } from "react-router-dom";

import Auth from '../utils/auth';

import { getSurfSessionList_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';


function SurfLogHome() {

  const navigate = useNavigate();

  //* Grab/Decode Current User ID from JWT Token
  let jwtToken = Auth.getProfile()

  //* Get List of surf sessions for user from Database
  var { loading, data } = useQuery(getSurfSessionList_Q, {
    variables: { userId: jwtToken.data._id },
  });

  //TODO: Temp Hard Code till features working...
  const userFavBoard = "6'0 DHD Phoenix";
  const userFavSpot = "36th ST";
  const userLongestSession = "1:36";
  const userLastSessionDate = "6/12/2023";

  const handleCreateNewSession = async (event) => {
    event.preventDefault();
    navigate("/surf_log/create_new_session");
    window.scrollTo(0, 0);
  };

  const handlePreviousSessions = async (event) => {
    event.preventDefault();
    navigate("/surf_log/view_previous_sessions");
    window.scrollTo(0, 0);
  };

  if(!loading)
  {

    return (

      <div className="d-flex flex-column min-vh-100">
        <header className="">
          <Header />
        </header>

        {/* Weather Widget Component */}
        <WeatherWidget />

        <div className="userDataBG">
          <div className="justify-content-center mt-5">

            <h2 className="text-center mt-3 mb-5 welcomeName">{jwtToken.data.memberFirstName} {jwtToken.data.memberLastName}</h2>
            

            <div className="text-center mb-5">
              <img src={"https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/" + jwtToken.data._id + ".jpg"}
                className="userPhoto"
                alt="User Profile Picture" />
            </div>
          </div>
          
          <h2 className="text-center mb-3 welcomeText">Surf Sessions:</h2>

          <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
            <div className="sessionDataBox">
              <p className="text-center sessionDetails mt-3"><b>Session Count:</b> {data.getAllUsersSurfSession.length}</p>
              <p className="text-center sessionDetails mt-3"><b><s>Favroite Board:</s></b> {userFavBoard}</p>
              <p className="text-center sessionDetails mx-3"><b><s>Favroite Surf Spot:</s></b> {userFavSpot}</p>
              <p className="text-center sessionDetails mb-3"><b><s>Longest Session:</s></b> {userLongestSession}</p>
              <p className="text-center sessionDetails mb-3"><b><s>Last Session:</s></b> {userLastSessionDate}</p>
            </div>
          </div>
        </div>

        <div className="text-center surfLogBTNSection row d-flex align-items-center justify-content-center mt-3">
          <div className="row px-5 py-3">
            <div className="surfLogHomeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleCreateNewSession(event)}>Create New Session</div>
          </div>
          <div className="row px-5 py-3 surfLogSpacer">
            <div className="surfLogHomeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handlePreviousSessions(event)}>List Of Sessions</div>
          </div>
        </div>

        <footer className="mt-auto mb-0">
          <NavFooter />
        </footer>
      </div>

      )

  }



}

export default SurfLogHome;