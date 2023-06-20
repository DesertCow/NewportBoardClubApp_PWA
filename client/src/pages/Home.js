

import { useNavigate } from "react-router-dom";
import { MaterialSymbol } from 'react-material-symbols';

// import menuPDF from '../img/Salt_Lick_Menu_DWood-PDF.pdf';
// import MainFooter from '../components/Footer';

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

//* React Toastify
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// var fileDownload = require('js-file-download');

function Home() {


  const navigate = useNavigate();

  const handleClubEvents = async (event) => {
  event.preventDefault();
  navigate("/club_events/current_events");
  };

  const handleSurfLog = async (event) => {
  event.preventDefault();
  navigate("/surf_log");
  };

  const handleSurfKnowledge = async (event) => {
  event.preventDefault();
  navigate("/surf_knowledge");
  };

  const handleRentals = async (event) => {
  event.preventDefault();
  navigate("/surf_rentals");
  };

  const handleAbout = async (event) => {
  event.preventDefault();
  navigate("/about_club");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <header className="mt-auto mb-0"> */}
      <header className="">
        <Header />
      </header>

      {/* <h1 className="homeTitle text-center mt-5"> The Board Club App [From Homes.js]</h1> */}

      {/* <NavFooter /> */}

      {/* <MaterialSymbol icon="folder" size={24} fill grade={-25} color='red' /> */}

      {/* <NavFooter /> */}

      {/* <div className="text-center">
        <img src={require("../img/BC_Logo_Clear_1.png")}
          className="homePageLogo"
          alt="Board Club Logo" />
      </div> */}

      <div className="text-center homeMenu row d-flex align-items-center justify-content-center">
        <div className="row px-5 py-3">
          <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Club Events</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleSurfLog(event)}>Surf Log</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleSurfKnowledge(event)}>Surf Knowledge</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleRentals(event)}>Rentals</div>
        </div>
        <div className="row px-5 py-3 mb-5">
          <div className="homeBTNs p-2 mb-5 d-flex align-items-center justify-content-center" onClick={(event) => handleAbout(event)}>About</div>
        </div>
      </div>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  );

}

export default Home;