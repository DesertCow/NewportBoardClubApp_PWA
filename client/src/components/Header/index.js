//
//

import Container from 'react-bootstrap/Container';
import { MaterialSymbol } from 'react-material-symbols';

import { useNavigate } from "react-router-dom";

import { useQuery } from '@apollo/client';
import { getWX_Q } from '../../utils/queries';

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/PuffLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};



const Header = () => {


  //* Event Handlers

  const navigate = useNavigate();

  const handleLogoClick = async (event) => {
  event.preventDefault();
  navigate("/home");
  // console.log("BC Logo Clicked");
  };

  const handleWeatherWidgetClick = async (event) => {
  event.preventDefault();
  // navigate("/");
  console.log("Display Weather Widget Overlay!");
  };


  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getWX_Q)

  let [loadingData, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");


  let tideDirIcon;

  if(loading) {

    return (

      <div className="HeaderClass mt-auto mb-0">

            <div className="container">
              <div className="row px-1">

                <div className="col d-flex align-items-center">
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
                        <ClipLoader
                          color={color}
                          loading={loadingData}
                          cssOverride={override}
                          size={30}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </div>
                      <div className="col headerTideArrow pt-0 mt-2 mb-2 d-flex align-items-center justify-content-center">
                        <ClipLoader
                          color={color}
                          loading={loadingData}
                          cssOverride={override}
                          size={45}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
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
                          <ClipLoader
                            color={color}
                            loading={loadingData}
                            cssOverride={override}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        </div> 
                      </div>
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="partly_cloudy_day" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerTempText">
                          <ClipLoader
                            color={color}
                            loading={loadingData}
                            cssOverride={override}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        </div> 
                      </div>
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="waves" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerTempText">
                          <ClipLoader
                            color={color}
                            loading={loadingData}
                            cssOverride={override}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

        </div>

    )
    

  }

  if(!loading) {


    //* Logic for Tide Direction Icon
      if (data.getWX.tideRise) {
          tideDirIcon = <MaterialSymbol icon="keyboard_double_arrow_up" size={60} fill grade={-25} color='black' />
      } 

      if (!data.getWX.tideRise) {
          tideDirIcon = <MaterialSymbol icon="keyboard_double_arrow_down" size={60} fill grade={-25} color='black' />
      }
    
  } 

    return (

        <div className="HeaderClass mt-auto mb-0">

            <div className="container">
              <div className="row px-1">

                <div className="col d-flex align-items-center">
                  <div className="text-center" onClick={(event) => handleLogoClick(event)}>
                    <img src={require("../../img/BC_Logo_Clear_1.png")}
                      className="homePageLogo"
                      alt="Board Club Logo" />
                  </div>
                </div>

                {/* <div className="col-2"> */}
                    {/* SPACER BOX! */}
                {/* </div> */}

                <div className="col-2 d-flex align-items-center justify-content-center" type="button" data-toggle="modal" data-target="#weatherWidget">
                    <div className="row mt-2">
                      <div className="col headerTideIcon py-2 d-flex align-items-center justify-content-center">
                        <div className="text-center">
                          <img src={require("../../img/tide_icon.png")}
                            className="headerTideIcon"
                          alt="Tide Icon" />
                        </div>
                      </div>
                      <div className="col headerCurrentTide pt-3 d-flex align-items-center justify-content-center">
                        {data.getWX.tideMSL} ft
                      </div>
                      <div className="col headerTideArrow pt-0 d-flex align-items-center justify-content-center">
                        {/* <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' /> */}
                        {tideDirIcon}
                      </div>
                    </div>
                </div>

                <div className="col-3 d-flex align-items-center" data-toggle="modal" type="button" data-target="#weatherWidget">
                  <div className="col px-3">
                    <div className="row d-flex align-items-center">
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="air" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerWindSpeed">
                          {data.getWX.wind} mph
                        </div> 
                      </div>
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="partly_cloudy_day" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerTempText">
                          {data.getWX.airTemp} &deg;F
                        </div> 
                      </div>
                      <div className="px-3 py-2 d-flex align-items-center justify-content-center">
                        <div className="col">
                          <MaterialSymbol icon="waves" size={30} fill grade={-25} color='black' />
                        </div>
                        <div className="px-3 headerTempText">
                          {data.getWX.waterTemp} &deg;F
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