//
//

import Container from 'react-bootstrap/Container';
import { MaterialSymbol } from 'react-material-symbols';



const Header = () => {


  return (

    <div className="HeaderClass mt-auto mb-0">

      <div className="d-flex align-items-center justify-content-left">
        <div className="text-center">
          <img src={require("../../img/BC_Logo_Clear_1.png")}
            className="homePageLogo"
            alt="Board Club Logo" />
        </div>

        <Container className="m-5">
          <div className="d-flex flex-col">
            <div className="d-flex flex-row">
              <div className="text-center">
                <img src={require("../../img/tide_icon.png")}
                  className="headerTideIcon"
                  alt="Tide Icon" />
              </div>
            </div>
            <div className="d-flex flex-row">
              <MaterialSymbol icon="settings" size={60} fill grade={-25} color='black' />
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default Header;


//!========================= EOF =========================