
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { MaterialSymbol } from 'react-material-symbols';



const NavFooter = () => {


  return (

    <div className="mb-0 mt-3">
      <Navbar className="d-flex FooterClass" fixed="bottom" expand="lg">
        <Container className="p-0 justify-content-center">
          <Nav className="d-flex flex-row p-0">
            <Nav.Link className="col mx-5 px-2" href="/home">
              <div className="text-center">
                <MaterialSymbol icon="house" size={60} fill grade={-25} color='black' />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-5 px-2" href="/surf_log">
              <div className="text-center">
                <MaterialSymbol icon="import_contacts" size={60} fill grade={-25} color='black' />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-5 px-2" href="/user_settings">
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