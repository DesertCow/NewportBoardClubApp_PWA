
import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import EventPageHeaderUpcoming from '../components/EventPageHeader_Upcoming';

import { useQuery } from '@apollo/client';
import { getCurrentEvents_Q } from '../utils/queries';

// import




function ClubEvents_Current() {

  const navigate = useNavigate();

  var finalCurrentEventHTML = []
  
  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getCurrentEvents_Q)
  
  //* =========== Event Handlers ===========

  const displayEventDetails = async (event, reqEventID) => {

    // console.log("Upcoming Event (" + reqEventID + ") Clicked!");

    event.preventDefault();
    navigate("/club_events/event/" + reqEventID);
  };

  function buildEventBTN(eventData){

    // console.log("Event Name (" + eventData._id + "): " + eventData.eventName)
    console.log(eventData.eventPhotoURL)

    // finalCurrentEventHTML.push(<li key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)} className="previousSurfSessionBTN m-4 p-3">{eventData.eventName} @ {eventData.eventDate}</li>)
    finalCurrentEventHTML.push(<img src={require("../img/Events/SummerArtFair.jpg")} key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)} className="eventIconPhoto mb-3" alt="Event Photo" />)

  }

  if(!loading) {


    let currentEventList = data.getCurrentEvents;

    //* Lopp over each current event
    currentEventList.forEach(buildEventBTN)

  }

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

      <div className="mb-5 pb-3">
        <div className="py-3">
          {/* <div className="text-center">
            <img src={require("../img/Events/SummerArtFair.jpg")}
            className="eventPhoto mb-3"
            onClick={(event) => handleClubEvents(event)}
            alt="Event Photo" />
          </div>
          <div className="text-center">
            <img src={require("../img/Events/Spencer+Pirdy.jpeg")}
            className="eventPhoto2 mb-3"
            onClick={(event) => handleClubEvents(event)}
            alt="Event Photo" />
          </div> */}
          <div className="text-center">
           {finalCurrentEventHTML} 
          </div>
        </div>
      </div>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default ClubEvents_Current;