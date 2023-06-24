// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import { MaterialSymbol } from 'react-material-symbols';



const WeatherWidget = () => {


  return (

    <div className="modal fade px-4 opacity-75 weatherWidgetMain" id="weatherWidget" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">

          <div className="modal-body weatherWidgetBody weatherWidgetMain">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="d-flex w-100 justify-content-around">
              <div className="d-flex col-8">
                <div className="row-3">
                </div>
                  <div className="d-flex align-items-center justify-content-center row-3 px-3">
                  <MaterialSymbol icon="waves" size={50} fill grade={-25} color='black' />
                  </div>
                  <div className="row-3 px-3 weatherWidgetTempFont d-flex align-items-center justify-content-center">
                    {/* {liveAirTemp} &deg;F */}
                    64 &deg;F
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
                    {/* {liveAirTemp} &deg;F */}
                    72 &deg;F
                  </div>
                </div>
              <div className="col-6">
                Blackies: 
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
                    {/* {liveAirTemp} &deg;F */}
                    12 mph
                  </div>
                </div>
              <div className="col-6">
                36th Street:
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
                    2.0 ft
                  </div>
                </div>
              <div className="col-6">
                56th Street:
              </div>
            </div>
            <div className="d-flex w-100 justify-content-around mt-3">
              <div className="d-flex col-8">
                <div className="row-3">
                </div>
                  <div className="d-flex align-items-center justify-content-center row-3 px-2">
                    <MaterialSymbol icon="keyboard_double_arrow_up" size={60} fill grade={-25} color='black' />
                  </div>
                  <div className="row-3 weatherWidgetTideFont d-flex align-items-center justify-content-center">
                    {/* {liveAirTemp} &deg;F */}
                    3.1 High at 3:49pm
                  </div>
                </div>
              <div className="col-6">
                River Jetties:
              </div>
            </div>

          </div>
            
        </div>
      </div>
    </div>

  );
};

export default WeatherWidget;


//!========================= EOF =========================