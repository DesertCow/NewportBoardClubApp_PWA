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

  // console.log("TEST");

  if(!loading){

      // console.log(data.getWidgetWX);

    return (

      <div className="modal fade px-2 opacity-75 weatherWidgetMain" id="weatherWidget" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-body weatherWidgetBody weatherWidgetMain">
              {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button> */}
              <div className="d-flex w-100 justify-content-around">
                <div className="d-flex col-8">
                  <div className="row-3">
                  </div>
                    <div className="d-flex align-items-center justify-content-center row-3 px-3">
                    <MaterialSymbol icon="waves" size={50} fill grade={-25} color='black' />
                    </div>
                    <div className="row-3 px-3 weatherWidgetTempFont d-flex align-items-center justify-content-center">
                      {data.getWidgetWX.waterTemp} &deg;F
                    </div>
                  </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                  <MaterialSymbol icon="waves" size={50} fill grade={-25} color='black' />
                </div>
              </div>
              <div className="d-flex w-100 justify-content-around mt-3">
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
                      {data.getWidgetWX.wind} mph
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
                      <MaterialSymbol icon="keyboard_double_arrow_up" size={60} fill grade={-25} color='black' />
                    </div>
                    <div className="row-3 weatherWidgetTideText d-flex align-items-center justify-content-center">
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