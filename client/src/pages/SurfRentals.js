

import Container from 'react-bootstrap/esm/Container';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';



function SurfRentals() {

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      <h1 className="rentalTitle text-center mt-5"> Rental Pricing</h1>

      <p className="text-center rentalDes px-4 mt-4">
        Includes <u>unlimited</u> surfboard exchanges during your rental period and access to the outdoor rinse shower and the hot indoor shower for after your surf session.
      </p>

      <Container className="d-flex align-items-center justify-content-center mt-5">
        <div className="d-flex rentalBox ">
            <div className="flex-col p-4">
              <div className="rentalItemsTitle flex-row mt-0">
                 <pre> </pre>
              </div>
              <div className="rentalItemsTitle flex-row mt-4">
                Longboard
              </div>
              <div className="rentalItemsTitle flex-row mt-4">
                Shortboard
              </div>
              <div className="rentalItemsTitle flex-row mt-4">
                Soft Top
              </div>
              <div className="rentalItemsTitle flex-row mt-4">
                Wetsuit
              </div>
              <div className="rentalItemsTitle flex-row mt-4">
                Beach Item
              </div>
            </div>
            <div className="flex-col p-4 text-center">
              <div className="rentalItemsPrice flex-row mt-0">
                4hrs
              </div>
              <div className="rentalItemsPrice flex-row mt-3">
                $35
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-1">
                $35
              </div>
              <div className="rentalItemsPrice flex-row mt-4">
                $25
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-0">
                $20
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-0">
                $10
              </div>
            </div>
            <div className="flex-col p-4 text-center">
              <div className="rentalItemsPrice flex-row mt-0">
                24hrs
              </div>
              <div className="rentalItemsPrice flex-row mt-3">
                $45
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-1">
                $45
              </div>
              <div className="rentalItemsPrice flex-row mt-4">
                $30
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-0">
                $25
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-0">
                $15
              </div>
            </div>
            <div className="flex-col p-4 text-center">
              <div className="rentalItemsPrice flex-row mt-0">
                Week
              </div>
              <div className="rentalItemsPrice flex-row mt-3">
                $180
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-1">
                $180
              </div>
              <div className="rentalItemsPrice flex-row mt-4">
                $100
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-0">
                $75
              </div>
              <div className="rentalItemsPrice flex-row mt-4 pt-0">
                $35
              </div>
            </div>
        </div>
      </Container>

      <Container className="d-flex justify-content-center mt-5 rentalsSpacer">
        <div className="rentalQuestion text-center">
          <p className="pt-3">Any Questions? Give Us A Call</p>
          <a style={{textDecoration: 'none'}} href="tel:19494387171">(949) 438-7171</a>
        </div>
      </Container>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default SurfRentals;