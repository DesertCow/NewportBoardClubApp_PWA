
import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

import EventPageHeaderUpcoming from '../components/EventPageHeader_Upcoming';

function ClubEvents_Current() {


  //Event Handlers

  const navigate = useNavigate();

  const handleClubEvents = async (event) => {
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

      <h1 className="text-center mt-5"> CURRENT EVENTS PAGE!</h1>

      {/* <div>
         <div className="row px-5 py-3">
          <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Club Events</div>
        </div>
      </div> */}

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default ClubEvents_Current;