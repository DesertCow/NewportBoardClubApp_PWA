

import { useNavigate } from "react-router-dom";
import { MaterialSymbol } from 'react-material-symbols';

import { useQuery } from '@apollo/client';
import { getWX_Q } from '../utils/queries';

import { React } from 'react';


import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

//* React Toastify
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// var fileDownload = require('js-file-download');

function Home() {


  const navigate = useNavigate();

  const handleClubEvents = async (event) => {
    event.preventDefault();
    navigate("/club_events");
    window.scrollTo(0, 0);
  };

  const handleSurfLog = async (event) => {
    event.preventDefault();
    navigate("/surf_log");
    window.scrollTo(0, 0);
  };

  const handleSurfHacks = async (event) => {
    event.preventDefault();
    navigate("/surf_hacks");
    window.scrollTo(0, 0);
  };

  const handleNewportSurfMap = async (event) => {
    event.preventDefault();
    navigate("/newport_surf_map");
    window.scrollTo(0, 0);
  };

  const handleCommunityForum = async (event) => {
    event.preventDefault();
    navigate("/community_forum");
    window.scrollTo(0, 0);
  };

  const handleRentals = async (event) => {
    event.preventDefault();
    navigate("/surf_rentals");
    window.scrollTo(0, 0);
  };

  const handleAbout = async (event) => {
    event.preventDefault();
    navigate("/about_club");
    window.scrollTo(0, 0);
  };


  //* Validate JWT Token/Login
  // if(Auth.loggedIn()){
  if(true){

    return (

      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        {/* <header className="mt-auto mb-0"> */}
        <header className="">
          <Header />
        </header>

        
        {/* Weather Widget Component */}
        <WeatherWidget />


        <div className="text-center homeMenu row d-flex align-items-center justify-content-center">
          <div className="row px-5 py-3">
            <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Club Events</div>
          </div>
          <div className="row px-5 py-3">
            <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleSurfLog(event)}>Surf Log</div>
          </div>
          <div className="row px-5 py-3">
            <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleCommunityForum(event)}>Community Forum</div>
          </div>
          <div className="row px-5 py-3">
            <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleSurfHacks(event)}>Surf Hacks</div>
          </div>
          <div className="row px-5 py-3">
            <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleNewportSurfMap(event)}>Newport Surf Map</div>
          </div>
          <div className="row px-5 py-3">
            <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleRentals(event)}>Rentals</div>
          </div>
          <div className="row px-5 py-3 mb-5">
            <div className="homeBTNs p-2 mb-5 d-flex align-items-center justify-content-center" onClick={(event) => handleAbout(event)}>About</div>
          </div>
        </div>

        <footer className="mt-auto mb-0">
          <NavFooter />
        </footer>
      </div>
    );
  }
  else {

    return(
      <div className="d-flex flex-column align-items-center justify-content-center">

        <LoginPage />

      </div>   
    )
  }

}

export default Home;