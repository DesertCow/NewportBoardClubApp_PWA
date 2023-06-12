//
//

import Container from 'react-bootstrap/Container';
import { MaterialSymbol } from 'react-material-symbols';

import { useNavigate } from "react-router-dom";



const Header = () => {

  // WX Variables

  const currentWindSpeed = 10;
  const currentAirTemp = 75;
  const currentWaterTemp = 63;
  const currentTide = 2.4;
  const currentTideDirection = "Rising";

  // Event Handlers

  const navigate = useNavigate();

  const handleLogoClick = async (event) => {
  event.preventDefault();
  navigate("/");
  // console.log("BC Logo Clicked");
  };

  const handleWeatherWidgetClick = async (event) => {
  event.preventDefault();
  // navigate("/");
  console.log("Display Weather Widget Overlay!");
  };

  return (

    <div className="HeaderClass mt-auto mb-0 mr-5">

        <div className="container">
          <div className="row">

            <div className="col d-flex align-items-center justify-content-center">
              <div className="text-center" onClick={(event) => handleLogoClick(event)}>
                <img src={require("../../img/BC_Logo_Clear_1.png")}
                  className="homePageLogo"
                  alt="Board Club Logo" />
              </div>
            </div>

            <div className="col-2">
                 {/* SPACER BOX! */}
            </div>

            <div className="col-2 d-flex align-items-center justify-content-center" onClick={(event) => handleWeatherWidgetClick(event)}>
                <div className="row mt-2">
                  <div className="col headerTideIcon py-2 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img src={require("../../img/tide_icon.png")}
                        className="headerTideIcon"
                      alt="Tide Icon" />
                    </div>
                  </div>
                  <div className="col headerCurrentTide pt-3 d-flex align-items-center justify-content-center">
                    {currentTide} ft
                  </div>
                  <div className="col headerTideArrow pt-0 d-flex align-items-center justify-content-center">
                     <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' />
                  </div>
                </div>
            </div>

            <div className="col-3 d-flex align-items-center" onClick={(event) => handleWeatherWidgetClick(event)}>
              <div className="col">
                <div className="row d-flex align-items-center">
                  <div className="py-1 d-flex align-items-center justify-content-center">
                    <div className="col">
                      <MaterialSymbol icon="air" size={30} fill grade={-25} color='black' />
                    </div>
                    <div className="col headerWindSpeed">
                      {currentWindSpeed} mph
                    </div> 
                  </div>
                  <div className="py-1 d-flex align-items-center justify-content-center">
                    <div className="col">
                      <MaterialSymbol icon="partly_cloudy_day" size={30} fill grade={-25} color='black' />
                    </div>
                    <div className="col headerTempText">
                      {currentAirTemp} &deg;F
                    </div> 
                  </div>
                  <div className="py-1 d-flex align-items-center justify-content-center">
                    <div className="col">
                      <MaterialSymbol icon="waves" size={30} fill grade={-25} color='black' />
                    </div>
                    <div className="col headerTempText">
                      {currentWaterTemp} &deg;F
                    </div>                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

    </div>
  );
};

export default Header;


//!========================= EOF =========================