
import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

import EventPageHeaderUpcoming from '../components/EventPageHeader_Upcoming';

function ClubEvents_Current() {


  //Event Handlers

  const navigate = useNavigate();

  const handleClubEvents = async (event) => {

    console.log("Upcoming Event Clicked!");

    event.preventDefault();
    navigate("/club_events/current_events");
  };

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      
      <div>
        <EventPageHeaderUpcoming />
      </div>

      {/* <h1 className="text-center mt-5"> CURRENT EVENTS PAGE!</h1> */}

      <div className="mb-5 pb-3">
         <div className="px-2 py-3">
          <div className="currentEventsBtns mb-2 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Current Club Event #1</div>
          <div className="currentEventsBtns my-4 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Current Club Event #2</div>
        </div>
      </div>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default ClubEvents_Current;