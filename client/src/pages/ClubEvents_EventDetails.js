

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

import { getEvent_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

import { Interweave } from 'interweave';

import { useNavigate } from "react-router-dom";

function EventDetails() {

  const navigate = useNavigate();

  //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    let eventID = window.location.href.split(`/club_events/event/`)
    eventID = eventID[1]

    //* Get requested Event from Database
    var { loading, data } = useQuery(getEvent_Q, {
      variables: { eventId: eventID },
    });

    //* Handles Event Switch Changes
    const handleReturnEvents = async (event) => {
      event.preventDefault();
      navigate("/club_events");
      window.scrollTo(0, 0);
    };


    if(!loading)
    {

      let eventData = data.getEvent

      // console.log(eventData)

      return (

            <div className="d-flex flex-column min-vh-100">
              <header className="">
                <Header />
              </header>

              {/* Weather Widget Component */}
              <WeatherWidget />

              <div className="d-flex flex-column justify-content-center align-items-center surfSessionCol">

                <div className="mt-4 ml-3 d-flex justify-content-center align-items-center">
                  <img src={data.getEvent.eventPhotoURL}
                    className="eventDetailsPhoto mb-3"
                    // onClick={(event) => handleClubEvents(event)}
                    alt={data.getEvent.eventName} 
                  />
                </div>

                <h1 className="mt-2 px-3 text-center eventDetailsEventTitle">{data.getEvent.eventName}</h1>

                <h3 className="mt-2 eventDetailsEventSlogan">{data.getEvent.eventSlogan}</h3>

                <div className="mt-0 text-center">
                  <Interweave content={data.getEvent.eventBody} />
                </div>

                <h3 className="mt-5 eventDateBox p-3">Event Date: {data.getEvent.eventDate}</h3>

                <div className="eventDetailReturnBTN eventBottomMargin p-2 mt-4 d-flex align-items-center justify-content-center" onClick={(event) => handleReturnEvents(event)}>Club Events Home</div>
              
              </div>

              <footer className="mt-auto mb-0">
                <NavFooter />
              </footer>
            </div>
      )

    }
  }
  else {

    return(
      <div className="d-flex flex-column align-items-center justify-content-center">

        <LoginPage />

      </div>   
    )
  }

}

export default EventDetails;