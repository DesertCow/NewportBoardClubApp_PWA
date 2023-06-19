import { useNavigate } from "react-router-dom";

function EventPageHeader() {


  //Event Handlers

  const navigate = useNavigate();

  const handleCurrentEvents = async (event) => {
    event.preventDefault();
    navigate("/club_events/current_events");
  };

  const handleEventHistory = async (event) => {
    event.preventDefault();
    navigate("/club_events/eventHistory");
  };

  return (

    <div className="">

      {/* <h1 className="homeTitle text-center mt-5"> Club Events Page!</h1> */}

      <div className="eventsTabBox">
         {/* <div className="d-flex align-items-center justify-content-center col px-5 py-3"> */}
         <div className="d-flex flex-col px-0 py-1 align-items-center justify-content-center">
          <div className="eventPageBtns_Upcoming p-3 m-3 text-center" onClick={(event) => handleCurrentEvents(event)}>Upcoming Events</div>
          <div className="eventPageBtns_History p-3 m-3 text-center" onClick={(event) => handleEventHistory(event)}>Previous Events</div>
        </div>
      </div>

    </div>

  )

}

export default EventPageHeader;