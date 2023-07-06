

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { useNavigate } from "react-router-dom";

import Auth from '../utils/auth';



function SurfLogHome() {


  // User Data from DB
  const usersName = "Slippy";
  const userSessionCount = "69";
  const userFavBoard = "6'0 DHD Phoenix";
  const userFavSpot = "36th ST";
  const userLongestSession = "1:36";
  const userLastSessionDate = "6/12/2023";


  const navigate = useNavigate();

  const handleCreateNewSession = async (event) => {
  event.preventDefault();
  navigate("/surf_log/create_new_session");
  };

  const handlePreviousSessions = async (event) => {
  event.preventDefault();
  navigate("/surf_log/view_previous_sessions");
  };

  let jwtToken = Auth.getToken()
  jwtToken = JSON.parse(jwtToken)

  // console.log(jwtToken)

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* Weather Widget Component */}
      <WeatherWidget />

      <div className="userDataBG">
        <div className="justify-content-center mt-5">

          <h2 className="text-center mt-3 mb-5 welcomeName">{jwtToken.user.memberFirstName} {jwtToken.user.memberLastName}</h2>
          

          <div className="text-center mb-5">
            <img src={require("../img/Avatar.jpg")}
              className="userPhoto"
              alt="Outside Shot of Board Club" />
          </div>
        </div>
        
        <h2 className="text-center mb-3 welcomeText">Surf Sessions:</h2>

        <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
          <div className="sessionDataBox">
            <p className="text-center sessionDetails mt-3"><b>Session Count:</b> {userSessionCount}</p>
            <p className="text-center sessionDetails mt-3"><b>Favroite Board:</b> {userFavBoard}</p>
            <p className="text-center sessionDetails mx-3"><b>Favroite Surf Spot:</b> {userFavSpot}</p>
            <p className="text-center sessionDetails mb-3"><b>Longest Session:</b> {userLongestSession}</p>
            <p className="text-center sessionDetails mb-3"><b>Last Session:</b> {userLastSessionDate}</p>
          </div>
        </div>
      </div>

      <div className="text-center surfLogBTNSection row d-flex align-items-center justify-content-center mt-3">
        <div className="row px-5 py-3">
          <div className="surfLogHomeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleCreateNewSession(event)}>Create New Session</div>
        </div>
        <div className="row px-5 py-3 surfLogSpacer">
          <div className="surfLogHomeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handlePreviousSessions(event)}>Previous Sessions</div>
        </div>
      </div>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default SurfLogHome;