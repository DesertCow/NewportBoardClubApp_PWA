//
//

import Container from 'react-bootstrap/Container';
import { MaterialSymbol } from 'react-material-symbols';



const Header = () => {

  const currentWindSpeed = 10;
  const currentAirTemp = 75;
  const currentWaterTemp = 63;
  const currentTide = 2.4;
  const currentTideDirection = "Rising";


  return (

    <div className="HeaderClass mt-auto mb-0 mr-5">

      {/* <div className="d-flex align-items-center justify-content-left"> */}
        {/* <div className="text-center">
          <img src={require("../../img/BC_Logo_Clear_1.png")}
            className="homePageLogo"
            alt="Board Club Logo" />
        </div> */}

        <div class="container">
          <div class="row">

            <div class="col d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={require("../../img/BC_Logo_Clear_1.png")}
                  className="homePageLogo"
                  alt="Board Club Logo" />
              </div>
            </div>

            <div class="col-2">
                 {/* SPACER BOX! */}
            </div>

            <div class="col-2 d-flex align-items-center justify-content-center">
                <div class="row mt-2">
                  <div class="col headerTideIcon py-2 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img src={require("../../img/tide_icon.png")}
                        className="headerTideIcon"
                      alt="Tide Icon" />
                    </div>
                  </div>
                  <div class="col headerCurrentTide pt-3 d-flex align-items-center justify-content-center">
                    {currentTide} ft
                  </div>
                  <div class="col headerTideArrow pt-0 d-flex align-items-center justify-content-center">
                     <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' />
                  </div>
                </div>
            </div>

            <div class="col-3 d-flex align-items-center">
              <div class="col">
                <div class="row d-flex align-items-center">
                  <div class="py-1 d-flex align-items-center justify-content-center">
                    <div class="col">
                      <MaterialSymbol icon="air" size={30} fill grade={-25} color='black' />
                    </div>
                    <div class="col headerWindSpeed">
                      {currentWindSpeed} mph
                    </div> 
                  </div>
                  <div class="py-1 d-flex align-items-center justify-content-center">
                    <div class="col">
                      <MaterialSymbol icon="partly_cloudy_day" size={30} fill grade={-25} color='black' />
                    </div>
                    <div class="col headerTempText">
                      {currentAirTemp} &deg;F
                    </div> 
                  </div>
                  <div class="py-1 d-flex align-items-center justify-content-center">
                    <div class="col">
                      <MaterialSymbol icon="waves" size={30} fill grade={-25} color='black' />
                    </div>
                    <div class="col headerTempText">
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