//
//

import Container from 'react-bootstrap/Container';
import { MaterialSymbol } from 'react-material-symbols';

import { useNavigate } from "react-router-dom";

import { useQuery } from '@apollo/client';
import { getWX_Q } from '../../utils/queries';



const Header = () => {


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



  //  let var liveAirTemp = "null";

    //* Get Latest Weather Data
  var { loading, data } = useQuery(getWX_Q)

  // while(loading) {
  //   // Wait for loading to complete
  // }

  let wxStationURL = "https://api.weather.com/v2/pws/observations/current?stationId=KCANEWPO204&format=json&units=e&apiKey=f157bb453d9d4a5997bb453d9d9a59af";
  let tideDirIcon;

  var liveWind = "null";
  var liveWaterTemp = "null";
  var liveAirTemp = "null";
  var liveTideMSL = "null";
  var liveTideDir = "null";
  var dataArray = "null";


  async function wxUndergroundFetch() {
      fetch(wxStationURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.observations[0].imperial);
      let liveWxData = data.observations[0].imperial;

      liveWind = liveWxData.windSpeed;
      liveAirTemp = liveWxData.temp;
      liveTideDir = true;


      console.log("WIND: " + liveWind)
      console.log("AIR: " + liveAirTemp)
      console.log("Tide Arrow: " + liveTideDir)

      // loading = false;

    })
  }

  console.log(loading);


  if(loading) {

    return (

      <h1>LOADING!</h1>

    )
    

  }

  if(!loading) {

    // data = String(JSON.stringify(data.getWX))
    // console.log("STRING = " + String(JSON.stringify(data.getWX.airTemp)));
    // console.log("STRING = " + String(JSON.stringify(data.getWX)));
    console.log("STRING = " + String(JSON.stringify(data.getWX)));

    // liveWind = String(JSON.stringify(data));

    liveWind = data.getWX.wind;
    liveAirTemp = data.getWX.airTemp;
    liveWaterTemp = data.getWX.waterTemp;


    liveTideMSL = data.getWX.tideMSL;
    liveTideDir = data.getWX.tideRise;

    // wxUndergroundFetch();

    // var liveData = data;
    // console.log("STRING = " + liveData.getWX);  

    
    if (liveTideDir) {
        tideDirIcon = <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='green' />
    } 

    if (!liveTideDir) {
        tideDirIcon = <MaterialSymbol icon="arrow_downward" size={60} fill grade={-25} color='red' />
    }
    
  } 
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
                        {liveTideMSL} ft
                      </div>
                      <div className="col headerTideArrow pt-0 d-flex align-items-center justify-content-center">
                        {/* <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' /> */}
                        {tideDirIcon}
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
                          {liveWind} mph
                        </div> 
                      </div>
                      <div className="py-1 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="partly_cloudy_day" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="col headerTempText">
                          {liveAirTemp} &deg;F
                        </div> 
                      </div>
                      <div className="py-1 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="waves" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="col headerTempText">
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