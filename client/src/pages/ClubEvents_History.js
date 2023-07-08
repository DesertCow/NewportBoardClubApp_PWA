import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import EventPageHeaderHistory from '../components/EventPageHeader_History';

import { useQuery } from '@apollo/client';
import { getHistoryEvents_Q } from '../utils/queries';

function ClubEvents_Current() {


  //Event Handlers

  const navigate = useNavigate();

  var finalHistoryEventHTML = []

  //* Get Event Data from App Server
  var { loading, data } = useQuery(getHistoryEvents_Q)

  //* =========== Event Handlers ===========

  const displayEventDetails = async (event, reqEventID) => {

    // console.log("Upcoming Event (" + reqEventID + ") Clicked!");

    event.preventDefault();
    navigate("/club_events/event/" + reqEventID);
  };

  function buildEventBTN(eventData){

    // console.log("Event Name (" + eventData._id + "): " + eventData.eventName)
    // console.log(eventData.eventPhotoURL)

    // finalHistoryEventHTML.push(<li key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)} className="previousSurfSessionBTN m-4 p-3">{eventData.eventName} @ {eventData.eventDate}</li>)
    finalHistoryEventHTML.push(<img src={require("../img/Events/SummerArtFair.jpg")} key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)} className="eventIconPhoto mb-3" alt="Event Photo" />)

  }


  if(!loading)
  {

    let historyEventList = data.getPreviousEvents;

    //* Lopp over each current event
    historyEventList.forEach(buildEventBTN)
    
    return (

      <div className="d-flex flex-column min-vh-100">
        <header className="">
          <Header />
        </header>


        {/* Weather Widget Component */}
        <WeatherWidget />

        <div>
          <EventPageHeaderHistory />
        </div>

        <div className="text-center mt-3">
          {finalHistoryEventHTML} 
        </div>

        {/* <div className="mb-5 pb-3">
          <div className="px-2 py-3">
            <div className="text-center">
              <img src={require("../img/Events/Stab_In_The_Dark.jpg")}
              className="eventPhoto2 mb-3"
              onClick={(event) => handleClubEvents(event)}
              alt="Event Photo" />
            </div>
            <div className="text-center">
              <img src={require("../img/Events/Solid_Surf_Demo_Day.jpg")}
              className="eventPhoto2 mb-3"
              onClick={(event) => handleClubEvents(event)}
              alt="Event Photo" />
            </div>
            <div className="text-center">
              <img src={require("../img/Events/Hallowen.jpg")}
              className="eventPhoto2 mb-3"
              onClick={(event) => handleClubEvents(event)}
              alt="Event Photo" />
            </div>
          </div>
        </div> */}

        <footer className="mt-auto mb-0">
          <NavFooter />
        </footer>
      </div>

    )

  }



}

export default ClubEvents_Current;