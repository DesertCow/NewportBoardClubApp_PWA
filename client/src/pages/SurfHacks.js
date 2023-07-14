import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";


function SurfHacks() {


  const navigate = useNavigate();




  return (

    <div className="d-flex flex-column min-vh-100">
      {/* <header className="mt-auto mb-0"> */}
      <header className="">
        <Header />
      </header>

      
      {/* Weather Widget Component */}
      <WeatherWidget />


      <h1>Surf Hacks</h1>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )


}

export default SurfHacks;