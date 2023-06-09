

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

      {/* <div className="text-center homeMenu row d-flex align-items-center justify-content-center">
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleMainMenu(event)}>Order</div>
        </div>
        <div className="row px-5 py-3">
          <a href={menuPDF} className="pdfDownload" download="Salt_Lick_Menu_DWood-PDF.pdf" target='_blank' rel="noreferrer">
            <h1 type="submit" className="pdfDownloadText m-2">Menu Download (PDF)</h1>
          </a>
        </div>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleLogin(event)}>Login</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleRegister(event)}>Sign Up</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleContact(event)}>Contact Information</div>
        </div>

      </div> */}

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  );

}

export default Home;