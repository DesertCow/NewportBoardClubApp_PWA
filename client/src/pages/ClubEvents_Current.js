import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import EventPageHeaderUpcoming from '../components/EventPageHeader_Upcoming';

import { useQuery } from '@apollo/client';
import { getCurrentEvents_Q } from '../utils/queries';


function ClubEvents_Current() {

  const navigate = useNavigate();

  var finalCurrentEventHTML = []
  
  //* Get Event Data from App Server
  var { loading, data } = useQuery(getCurrentEvents_Q)
  
  //* =========== Event Handlers ===========

  const displayEventDetails = async (event, reqEventID) => {
    event.preventDefault();

    navigate("/club_events/event/" + reqEventID);
  };

  function buildEventBTN(eventData){

    //* Generate IMG and Button for each event
    finalCurrentEventHTML.push(<img src={eventData.eventPhotoURL} key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)} className="eventIconPhoto mb-3" alt="Event Photo" />)

  }


  if(!loading) {


    let currentEventList = data.getCurrentEvents;

    //* Lopp over each current event
    currentEventList.forEach(buildEventBTN)

    return (

      <div className="d-flex flex-column min-vh-100">
        <header className="">
          <Header />
        </header>

        {/* Weather Widget Component */}
        <WeatherWidget />
        
        <div>
          <EventPageHeaderUpcoming />
        </div>

        <div className="text-center mt-3 eventListMain">
          {finalCurrentEventHTML} 
        </div>

        <footer className="mt-auto mb-0">
          <NavFooter />
        </footer>
      </div>

    )

  }

 

}

export default ClubEvents_Current;