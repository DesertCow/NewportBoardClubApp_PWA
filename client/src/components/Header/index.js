//
//

import Container from 'react-bootstrap/Container';
import { MaterialSymbol } from 'react-material-symbols';



const Header = () => {


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
            <div class="col">
              <div className="text-center">
                <img src={require("../../img/BC_Logo_Clear_1.png")}
                  className="homePageLogo"
                  alt="Board Club Logo" />
              </div>
            </div>
            <div class="col d-flex align-items-center">
                 {/* SPACER BOX! */}
            </div>
            <div class="col d-flex align-items-center">
                 {/* SPACER BOX! */}
            </div>
            <div class="col d-flex align-items-center">
                <div class="row">
                  <div class="col headerTideIcon pt-0 mt-3">
                    <div className="text-center">
                      <img src={require("../../img/tide_icon.png")}
                        className="headerTideIcon"
                      alt="Tide Icon" />
                    </div>
                  </div>
                  <div class="col headerCurrentTide text-center pt-2">
                    0.4 ft
                  </div>
                  <div class="col headerTideArrow pt-0">
                     <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' />
                  </div>
                </div>
            </div>
            <div class="col d-flex align-items-center">
              <div class="row">
                <div class="col">
                  Column
                </div>
                <div class="col">
                  Column
                </div>
                <div class="w-100"></div>
                <div class="col">
                  Column
                </div>
                <div class="col">
                  Column
                </div>
              </div>
            </div>
          </div>
          {/* <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              2 of 3
            </div>
            <div class="col">
              3 of 3
            </div>
          </div> */}
        </div>
          {/* <div class="d-flex flex-column justify-content-end">
              <div className="text-center">
                <img src={require("../../img/tide_icon.png")}
                  className="headerTideIcon"
                  alt="Tide Icon" />
              </div>
            <div>
              <p className="m-2 headerTideText text-center">3.4 ft</p>
            </div>
            <div className="text-center">
                <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' />
            </div>

            <div class='some-page-wrapper'>
              <div class='flex-row'>
                <div class='flex-column'>
                  <div class='blue-column'>
                    Some Text in Column One
                  </div>
                </div>
                <div class='column'>
                  <div class='green-column'>
                    Some Text in Column Two
                  </div>
                </div>
              </div>
            </div> */}

          {/* <div class="d-flex flex-column justify-content-end">
              <div className="text-center">
                <img src={require("../../img/tide_icon.png")}
                  className="headerTideIcon"
                  alt="Tide Icon" />
              </div>
            <div>
              <p className="m-2 headerTideText">3.4 ft</p>
            </div>
            <div className="">
                <MaterialSymbol icon="arrow_upward" size={60} fill grade={-25} color='black' />
            </div>
          </div> */}
          {/* </div> */}


        {/* </Container> */}
      {/* </div> */}
    </div>
  );
};

export default Header;


//!========================= EOF =========================