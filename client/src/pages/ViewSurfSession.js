


//* Import Components
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { getSurfSession_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';



function ViewSurfSession() {

let surfSessionID = window.location.href.split(`/surf_log/surfSession/`)
surfSessionID = surfSessionID[1]

//* Get requested surf session from Database
  var { loading, data } = useQuery(getSurfSession_Q, {
    variables: { sessionId: surfSessionID },
  });

  


  if(!loading) {

    console.log(data)

    return (

      <div className="d-flex flex-column min-vh-100">
        <header className="">
          <Header />
        </header>

        {/* Weather Widget Component */}
        <WeatherWidget />

        <div className="d-flex flex-column justify-content-center align-items-center">
         
         <h1 className="previousSurfSessionTitle text-center mt-3">Surf Session</h1>
         <h3 className="text-center mt-3">{surfSessionID}</h3>
        
        </div>

        <footer className="mt-auto mb-0">
          <NavFooter />
        </footer>
      </div>
    )

  }


}

export default ViewSurfSession;