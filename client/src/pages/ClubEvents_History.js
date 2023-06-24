import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import EventPageHeaderHistory from '../components/EventPageHeader_History';

function ClubEvents_Current() {


  //Event Handlers

  const navigate = useNavigate();

  const handleClubEvents = async (event) => {

    console.log("Historic Event Clicked!");

    event.preventDefault();
    navigate("/club_events/eventHistory");
  };

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      <EventPageHeaderHistory />

      {/* Weather Widget Component */}
      <WeatherWidget />

      {/* <h1 className="homeTitle text-center flex-row"> CLUB EVENTS HISTORY!</h1> */}

      <div className="mb-5 pb-3">
         <div className="px-2 py-3">
          <div className="historyEventsBtns mb-2 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Historic Club Event #1</div>
          <div className="historyEventsBtns my-4 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Historic Club Event #2</div>
          <div className="historyEventsBtns my-4 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Historic Club Event #3</div>
          <div className="historyEventsBtns my-4 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Historic Club Event #4</div>
        </div>
      </div>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default ClubEvents_Current;