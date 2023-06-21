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

  var liveWind = "null";
  var liveWaterTemp = "null";
  var liveAirTemp = "null";
  var liveTideMSL = "null";
  var liveTideDir = "null";
  var dataArray = "null";

  if (!loading) {
    // data = String(JSON.stringify(data.getWX))
    console.log("STRING = " + String(JSON.stringify(data)));
    // console.log("STRING = " + data[1]);
    // console.log("Weather Data 1 = " + data.getWX.airTemp);
    // dataArray = data.split(",");
    // console.log("Weather Data 2a = " + dataArray[0]);
    
    // console.log("Weather Data 2b = " + dataArray[1]);

    var liveAirTemp = data.getWX.airTemp;
    // var liveAirTemp = data.getWX.airTemp;
    // var liveAirTemp = data.getWX;
    console.log("Air Temp: " + liveAirTemp)
    // var liveAirTempArray = liveAirTemp.split(":");
    // liveAirTemp = liveAirTempArray[1];
    // liveAirTemp = liveAirTemp.split("}}");
    // console.log("Air Temp (Live): " + liveAirTemp);

    // liveWind = dataArray[5];
    // var liveWind = data.getWX.wind;
    // liveWind = liveWindArray[1];
    // liveWind = liveWind.split("}}");
    // liveWind = liveWind[0].split(",");
    console.log("Wind (Live): " + liveWind);

    // liveWaterTemp = dataArray[4];
    // var liveWaterTempArray = liveWaterTemp.split(":");
    // liveWaterTemp = liveWaterTempArray[1];
    // console.log("Water Temp (Demo): = " + liveWaterTemp);
    console.log("Water Temp (Live): " + liveWaterTemp);
    
    // liveTideMSL = dataArray[2];
    // var liveTideMSLArray = liveTideMSL.split(":");
    // liveTideMSL = liveTideMSLArray[1];
    // console.log("Tide MSL (Demo): = " + liveTideMSL);
    // console.log("Weather Data 2c = " + dataArray[2]);
    console.log("Tide (Live): " + liveTideMSL);
    
    // liveTideDir = dataArray[3];
    // var liveTideDirArray = liveTideDir.split(":");
    // liveTideDir = liveTideDirArray[1];
    // console.log("Tide Rising (Demo): = " + liveTideDir);

    // console.log("Weather Data 2d = " + dataArray[3]);
    // console.log("Weather Data 2e = " + dataArray[4]);
    // console.log("Weather Data 2f = " + dataArray[5]);

    console.log("Tide Rising (Live): " + liveTideDir);

  }



  // WX Variables


  
  // const currentWindSpeed = liveWind;
  // const currentAirTemp = liveAirTemp;
  // const currentWaterTemp = liveWaterTemp;
  const currentTide = liveTideMSL;
  const currentTideRise = liveTideDir;

  let tideDirIcon;

  if (liveTideDir == "true") {
      tideDirIcon = <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' />
  } 

  if (liveTideDir == "false") {
      tideDirIcon = <MaterialSymbol icon="arrow_downward" size={60} fill grade={-25} color='black' />
  }
  if (liveTideDir == "Null") {
      tideDirIcon = <MaterialSymbol icon="arrow_downward" size={60} fill grade={-25} color='red' />
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
                    {currentTide} ft
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