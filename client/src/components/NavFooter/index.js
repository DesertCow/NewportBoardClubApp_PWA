
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { MaterialSymbol } from 'react-material-symbols';



const NavFooter = () => {


  return (

    <div className="mb-0 mt-4">
      <Navbar className="NavBarClass d-flex" fixed="bottom" expand="lg" variant="light" bg="light">
        <Container className="p-0 justify-content-center">
          <Nav className="d-flex flex-row p-0">
            <Nav.Link className="col mx-5 px-3" href="/">
              <div className="text-center">
                {/* <img src={require("../../img/Home_Icon.png")} className="navFooterHomeIcon" alt="Home Icon" /> */}
                <MaterialSymbol icon="house" size={60} fill grade={-25} color='black' />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-5 px-3" href="/main_Menu">
              <div className="text-center">
                {/* <img src={require("../../img/Restauran_Menu_Icon.png")} className="navFooterHomeIcon" alt="Home Icon" /> */}
                <MaterialSymbol icon="account_circle" size={60} fill grade={-25} color='black' />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-5 px-3" href="/user/cart">
              <div className="text-center">
                {/* <img src={require("../../img/Take_Out_Icon.png")} className="navFooterHomeIcon" alt="Home Icon" /> */}
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