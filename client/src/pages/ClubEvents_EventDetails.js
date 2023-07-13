

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { getEvent_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

import { Interweave } from 'interweave';

function EventDetails() {

  let eventID = window.location.href.split(`/club_events/event/`)
  eventID = eventID[1]

  //* Get requested Event from Database
  var { loading, data } = useQuery(getEvent_Q, {
    variables: { eventId: eventID },
  });



  if(!loading)
  {

    let eventData = data.getEvent

    console.log(eventData)

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
                  onClick={(event) => handleClubEvents(event)}
                  alt="Event Photo" 
                />
              </div>

              <h1 className="mt-2 px-3 text-center eventDetailsEventTitle">{data.getEvent.eventName}</h1>

              <h3 className="mt-2 eventDetailsEventSlogan">{data.getEvent.eventSlogan}</h3>

              <div className="mt-0 eventBottomMargin text-center">
                <Interweave content={data.getEvent.eventBody} />
              </div>
            
            </div>

            <footer className="mt-auto mb-0">
              <NavFooter />
            </footer>
          </div>
    )

  }


}

export default EventDetails;