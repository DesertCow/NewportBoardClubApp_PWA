

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { useNavigate } from "react-router-dom";


function SurfKnowledge() {


  // Event Handlers
    const handleNewportSurfMap = async (event) => {
    event.preventDefault();
    // navigate("/club_events");
    console.log("Newport Surf Map Clicked");
    };

    const handleSurfHacks = async (event) => {
    event.preventDefault();
    // navigate("/surf_log");
    console.log("Surf Hacks Clicked");
    };

    const handleEquipmentTips = async (event) => {
    event.preventDefault();
    // navigate("/surf_knowledge");
    console.log("Equipment Tips Clicked");
    };

    const handleSurfTechnique = async (event) => {
    event.preventDefault();
    // navigate("/surf_rentals");
    console.log("Surf Technique Clicked");
    };

    const handleSurfMedia = async (event) => {
    event.preventDefault();
    // navigate("/about_club");
    console.log("Surf Media Clicked");
    };

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* Weather Widget Component */}
      <WeatherWidget />

      <div className="text-center homeMenu row d-flex align-items-center justify-content-center">
        <div className="row px-5 py-3">
          <div className="surfKnowledgeBTN p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleNewportSurfMap(event)}>Newport Surf Map</div>
        </div>
        <div className="row px-5 py-3">
          <div className="surfKnowledgeBTN p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleSurfHacks(event)}>Surf Hacks</div>
        </div>
        <div className="row px-5 py-3">
          <div className="surfKnowledgeBTN p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleEquipmentTips(event)}>Equipment Tips</div>
        </div>
        <div className="row px-5 py-3">
          <div className="surfKnowledgeBTN p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleSurfTechnique(event)}>Surf Technique</div>
        </div>
        <div className="row px-5 py-3 mb-5">
          <div className="surfKnowledgeBTN p-2 mb-5 d-flex align-items-center justify-content-center" onClick={(event) => handleSurfMedia(event)}>Local Surf Media</div>
        </div>
      </div>


      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  );

}

export default SurfKnowledge;