
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { MaterialSymbol } from 'react-material-symbols';
import { useNavigate } from "react-router-dom";


const NavFooter = () => {


  const navigate = useNavigate();

  const handleHomeClicked = async (event) => {
    event.preventDefault();
    navigate("/home");
    window.scrollTo(0, 0);
  };

  const handleSurfLogClicked = async (event) => {
    event.preventDefault();
    navigate("/surf_log");
    window.scrollTo(0, 0);
  };

  const handleEventClicked = async (event) => {
    event.preventDefault();
    navigate("/club_events");
    window.scrollTo(0, 0);
  };

  const handleUserSettingsClicked = async (event) => {
    event.preventDefault();
    navigate("/user_settings");
    window.scrollTo(0, 0);
  };


  return (

    <div className="mb-0 mt-2 footerContainer">
      <Navbar className="d-flex FooterClass" fixed="bottom" expand="lg">
        <Container className="p-0 justify-content-center footerContainer">
          <Nav className="d-flex flex-row p-0">
            <Nav.Link className="col mx-3 px-2" onClick={(event) => handleHomeClicked(event)}>
              <div className="text-center">
                <MaterialSymbol icon="house" size={60} fill grade={-25} color='black' />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-3 px-2" onClick={(event) => handleSurfLogClicked(event)}>
              <div className="text-center">
                {/* <MaterialSymbol icon="import_contacts" size={60} fill grade={-25} color='black' /> */}
                <img src={require("../../img/surfing_icon.png")} className='mt-2' alt="Surfing Icon" />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-3 px-2" onClick={(event) => handleEventClicked(event)}>
              <div className="text-center">
                <img src={require("../../img/event_icon.png")} className='mt-2' alt="Event Icon" />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-3 px-2" onClick={(event) => handleUserSettingsClicked(event)}>
              <div className="text-center">
                <MaterialSymbol icon="settings" size={60} fill grade={-25} color='black' />
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

  );
};

export default NavFooter;


//!========================= EOF =========================