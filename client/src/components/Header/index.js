//
//

import Container from 'react-bootstrap/Container';
import { MaterialSymbol } from 'react-material-symbols';

import { useNavigate } from "react-router-dom";

import { useQuery } from '@apollo/client';
import { getWX_Q } from '../../utils/queries';



const Header = () => {


  //* Event Handlers

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


  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getWX_Q)


  let tideDirIcon;
  let previousTideMeasurement;

  var liveWind = "null";
  var liveWaterTemp = "null";
  var liveAirTemp = "null";
  var liveTideMSL = "null";
  var liveTideDir = "null";

  if(loading) {

    return (

      <h1>LOADING!</h1>

    )
    

  }

  if(!loading) {

    liveWind = data.getWX.wind;
    liveAirTemp = data.getWX.airTemp;
    liveWaterTemp = data.getWX.waterTemp;
    liveTideMSL = data.getWX.tideMSL;
    
    
    //? Not Working!
    liveTideDir = data.getWX.tideRise;


    //* Logic for Tide Direction Icon


    if (liveTideDir) {
        tideDirIcon = <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='green' />
    } 

    if (!liveTideDir) {
        tideDirIcon = <MaterialSymbol icon="arrow_downward" size={60} fill grade={-25} color='red' />
    }
    
  } 

    return (

        <div className="HeaderClass mt-auto mb-0">

            <div className="container">
              <div className="row">

                <div className="col d-flex align-items-center justify-content-center">
                  <div className="text-center" onClick={(event) => handleLogoClick(event)}>
                    <img src={require("../../img/BC_Logo_Clear_1.png")}
                      className="homePageLogo"
                      alt="Board Club Logo" />
                  </div>
                </div>

                {/* <div className="col-2"> */}
                    {/* SPACER BOX! */}
                {/* </div> */}

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
                        {liveTideMSL} ft
                      </div>
                      <div className="col headerTideArrow pt-0 d-flex align-items-center justify-content-center">
                        {/* <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' /> */}
                        {tideDirIcon}
                      </div>
                    </div>
                </div>

                <div className="col-3 d-flex align-items-center" onClick={(event) => handleWeatherWidgetClick(event)}>
                  <div className="col px-3">
                    <div className="row d-flex align-items-center">
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="air" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerWindSpeed">
                          {liveWind} mph
                        </div> 
                      </div>
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="partly_cloudy_day" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerTempText">
                          {liveAirTemp} &deg;F
                        </div> 
                      </div>
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="waves" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerTempText">
                          {liveWaterTemp} &deg;F
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