import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

function NewportSurfMap() {


  const navigate = useNavigate();


  //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    return (

      <div className="d-flex flex-column min-vh-100">
        {/* <header className="mt-auto mb-0"> */}
        <header className="">
          <Header />
        </header>

        
        {/* Weather Widget Component */}
        <WeatherWidget />

        <h1 className="text-center my-3 surfMapTitle">Newport Surf Map</h1>
        <div className="surfMapBox">
          <img src={require("../img/Newport_Surf_Map_Sat_1.png")}
        className="surfMap"
        alt="Board Club Logo" /> 
        </div>
                

        <footer className="mt-auto mb-0">
          <NavFooter />
        </footer>
      </div>
    )
  }
  else {

    return(
      <div className="d-flex flex-column align-items-center justify-content-center">

        <LoginPage />

      </div>   
    )
  }

}

export default NewportSurfMap;