// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import { MaterialSymbol } from 'react-material-symbols';

import { useQuery } from '@apollo/client';
import { getWidgetWX_Q } from '../../utils/queries';

import { React } from 'react';

const WeatherWidget = () => {
    
  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getWidgetWX_Q)

  let tideDirIcon;

  if(!loading){

    //* Logic for Tide Direction Icon
    if (data.getWidgetWX.tideRise) {
        // tideDirIcon = <MaterialSymbol icon="keyboard_double_arrow_up" size={60} fill grade={-25} color='black' />
        tideDirIcon = <img src={require("../../img/Tide_Rising.png")} className="headerTideDir" alt="Tide Icon" />
    } 

    if (!data.getWidgetWX.tideRise) {
        tideDirIcon = <img src={require("../../img/Tide_Falling.png")} className="headerTideDir" alt="Tide Icon" />
    }

    return (

      <div className="modal fade px-2 opacity-100 weatherWidgetMain" id="weatherWidget" tabIndex="-1" role="dialog" aria-labelledby="WeatherModel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-body weatherWidgetBody weatherWidgetMain">
              <div className="d-flex w-100 justify-content-center">
                <div className="d-flex col-8">
                  <div className="row-3">
                  </div>
                    <div className="d-flex align-items-center justify-content-center row-3 px-3">
                      <img src={require("../../img/water-temp-icon.png")}
                        className="waterTempIcon"
                        alt="Water Temperature Icon" />
                    </div>
                    <div className="row-3 px-3 weatherWidgetTempFont d-flex align-items-center justify-content-center">
                      {data.getWidgetWX.waterTemp} &deg;F
                    </div>
                  </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../../img/surf-wave-icon.jpg")}
                    className="weatherWidgetWavesIcon"
                    alt="Tide Icon" />
                </div>
              </div>
              <div className="d-flex w-100 justify-content-center mt-3">
                <div className="d-flex col-8">
                  <div className="row-3">
                  </div>
                    <div className="d-flex align-items-center justify-content-center row-3 px-3">
                    <MaterialSymbol icon="sunny" size={50} fill grade={-25} color='black' />
                    </div>
                    <div className="row-3 px-3 weatherWidgetTempFont d-flex align-items-center justify-content-center">
                      {data.getWidgetWX.airTemp} &deg;F
                    </div>
                  </div>
                <div className="col-6 d-flex align-items-center justify-content-left">
                  <div className="weatherWidgetLabelSurfText d-flex align-items-center justify-content-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blackies:&nbsp;&nbsp;&nbsp;
                    <div className="weatherWidgetSurfText">
                        {data.getWidgetWX.surfHeightBlackies} ft
                    </div>
                </div>              
                </div>
              </div>
              <div className="d-flex w-100 justify-content-around mt-3">
                <div className="d-flex col-8">
                  <div className="row-3">
                  </div>
                    <div className="d-flex align-items-center justify-content-center row-3 px-3">
                    <MaterialSymbol icon="air" size={50} fill grade={-25} color='black' />
                    </div>
                    <div className="row-3 px-3 weatherWidgetTempFont d-flex align-items-center justify-content-center">
                      <div className="col mr-4 px-0">{data.getWidgetWX.wind} mph</div> <div className="col mx-0 px-0 windType">({data.getWidgetWX.windType})</div>
                    </div>
                  </div>
                <div className="col-6 d-flex align-items-center justify-content-left">
                  <div className="weatherWidgetLabelSurfText d-flex align-items-center justify-content-center">
                    36th Street:&nbsp;&nbsp;&nbsp;
                    <div className="weatherWidgetSurfText">
                        {data.getWidgetWX.surfHeight36th} ft
                    </div>
                </div>              
                </div>
              </div>
              <div className="d-flex w-100 justify-content-around mt-3">
                <div className="d-flex col-8">
                  <div className="row-3">
                  </div>
                    <div className="d-flex align-items-center justify-content-center row-3 px-3">
                      <div className="text-center">
                        <img src={require("../../img/tide_icon.png")}
                          className="headerTideIcon"
                        alt="Tide Icon" />
                      </div>
                    </div>
                    <div className="row-3 px-3 weatherWidgetTempFont d-flex align-items-center justify-content-center">
                      {/* {liveAirTemp} &deg;F */}
                      {data.getWidgetWX.tideMSL} ft
                    </div>
                  </div>
                <div className="col-6 d-flex align-items-center justify-content-left">
                  <div className="weatherWidgetLabelSurfText d-flex align-items-center justify-content-center">
                    56th Street:&nbsp;&nbsp;&nbsp;
                    <div className="weatherWidgetSurfText">
                        {data.getWidgetWX.surfHeight56th} ft
                    </div>
                </div>              
                </div>
              </div>
              <div className="d-flex w-100 justify-content-around mt-3">
                <div className="d-flex col-8">
                  <div className="row-3">
                  </div>
                    <div className="d-flex align-items-center justify-content-center row-3 px-2">
                      {/* <MaterialSymbol icon="keyboard_double_arrow_up" size={60} fill grade={-25} color='black' /> */}
                      {tideDirIcon}
                    </div>
                    <div className="row-3 weatherWidgetTideText d-flex ml-2 align-items-center justify-content-center">
                      {/* {liveAirTemp} &deg;F */}
                      {data.getWidgetWX.nextTideHeight} {data.getWidgetWX.nextTideType} at {data.getWidgetWX.nextTideTime}
                    </div>
                  </div>
                <div className="col-6 d-flex align-items-center justify-content-left">
                  <div className="weatherWidgetLabelSurfText d-flex align-items-center justify-content-center">
                    River Jetties:&nbsp;&nbsp;
                    <div className="weatherWidgetSurfText">
                        {data.getWidgetWX.surfHeightRiver} ft
                    </div>
                </div>              
                </div>
              </div>

            </div>
              
          </div>
        </div>
      </div>
    );
  }
};

export default WeatherWidget;


//!========================= EOF =========================