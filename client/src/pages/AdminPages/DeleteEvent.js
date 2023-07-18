import AdminSideBar from "../../components/AdminSidebar";

import { useNavigate } from "react-router-dom";

import { getEventList_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { DELETE_EVENT_M } from '../../utils/mutations';

import Button from 'react-bootstrap/Button';

const DeleteEvent = () => {

  const navigate = useNavigate();

  const [deleteEvent_M, { eventID }] = useMutation(DELETE_EVENT_M);

  //* Get List of Events from Database
  var { loading, data } = useQuery(getEventList_Q);

  var eventListHTML = []

  const deleteEvent = async (event, eventID, eventTitle) => {
    // event.preventDefault()

    console.log("Delete Event: " + eventTitle + " (" + eventID +")")

    let confirmDelete = confirm("Are you sure you want to delete [" + eventTitle +"] from the Surf Hack database?");

    if(confirmDelete){
      const { eventData } = await deleteEvent_M({

        variables: { 
          eventId: eventID
        },
      });

      navigate("/admin/deleteEvent");
      location.reload()
      window.scrollTo(0, 0);
    } else {
      navigate("/admin/deleteEvent");
    }
  };

  const updateEvent = async (event, eventID) => {

    
  navigate("/admin/updateEvent/" + eventID);

  };

  function populateListOfEvents(eventData) {

    //* Create Shaper List
    eventListHTML.push(<li className="d-flex col justify-content-center align-items-center" onClick={(event) => updateEvent(event, eventData._id)} key={eventData._id} className="shaperBox mt-4 p-3 mx-3">{eventData.eventName}<Button onClick={(event) => deleteEvent(event, eventData._id, eventData.eventName)} variant="danger" className="d-flex col justify-content-center align-items-center shaperDeleteBTN mt-3">Delete</Button></li>)

  }

  if(!loading){

    // console.log(data.getEventList)

    //* Generate List of buttons for each surf hack in database
    data.getEventList.forEach(populateListOfEvents)

    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <h1 className="text-center">Update/Delete Event Page</h1>

        <ul className="row justify-content-center align-items-center text-center viewSurfSessionSpacer w-100 pr-0">
          {eventListHTML}
        </ul>

      </main>
      <div className="col-1">

      </div>

      </div>

    )
  }
}

export default DeleteEvent;


//!========================= EOF =========================