// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// import { MaterialSymbol } from 'react-material-symbols';



const WeatherWidget = () => {


  return (

    <div className="modal fade px-4 opacity-75 weatherWidgetMain" id="weatherWidget" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">

          <div className="modal-body weatherWidgetBody weatherWidgetMain">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="d-flex w-100 justify-content-around">
              <div class="col-3">
                1 piece
              </div>
              <div class="col-6">
                2 pieces piece
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