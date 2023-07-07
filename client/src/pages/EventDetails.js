

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

function EventDetails() {

  let eventID = window.location.href.split(`/club_events/event/`)
  eventID = eventID[1]

  return (

        <div className="d-flex flex-column min-vh-100">
          <header className="">
            <Header />
          </header>

          {/* Weather Widget Component */}
          <WeatherWidget />

          <div className="d-flex flex-column justify-content-center align-items-center surfSessionCol">
          
          <h1 className="text-center mt-3">Surf Event ({eventID})</h1>
          
            {/* <ul className="text-center viewSurfSessionSpacer">
              {sessionListHTML}
            </ul> */}
          </div>

          <footer className="mt-auto mb-0">
            <NavFooter />
          </footer>
        </div>
  )
}

export default EventDetails;