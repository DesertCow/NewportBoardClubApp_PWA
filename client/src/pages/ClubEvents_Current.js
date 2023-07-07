
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

    finalCurrentEventHTML.push(<li key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)} className="previousSurfSessionBTN m-4 p-3">{eventData.eventName} @ {eventData.eventDate}</li>)

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

      {/* <h1 className="text-center mt-5"> CURRENT EVENTS PAGE!</h1> */}

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
          {finalCurrentEventHTML}
          {/* <div dangerouslySetInnerHTML={{__html: finalCurrentEventHTML[0]}} /> */}
          <div>
            {/* {parse(finalCurrentEventHTML[1])} */}
            {/* {parse(`<div className="text-center"><img src={require("../img/Spencer+Pirdy.jpeg")} className="eventPhoto mb-3" onClick={(event) => handleClubEvents(event)} alt="Outside Shot of Board Club" /></div>`)} */}
          </div>
          {/* {finalCurrentEventHTML[1]} */}

          {/* <div className="currentEventsBtns mb-2 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Current Club Event #1</div>
          <div className="currentEventsBtns my-4 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Current Club Event #2</div> */}
        </div>
      </div>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default ClubEvents_Current;