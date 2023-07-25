import AdminSideBar from "../../components/AdminSidebar";
import AdminLoginPage from "../../components/AdminLogin";

import { useNavigate } from "react-router-dom";

import { getEventList_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { DELETE_EVENT_M } from '../../utils/mutations';

import Auth from '../../utils/auth';

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
    eventListHTML.push(<li className="d-flex flex-row mb-5 justify-content-center align-items-center" onClick={(event) => updateEvent(event, eventData._id)} key={eventData._id} className="shaperBox my-3 p-3 mx-3">{eventData.eventName}<Button onClick={(event) => deleteEvent(event, eventData._id, eventData.eventName)} variant="danger" className="d-flex col justify-content-center align-items-center shaperDeleteBTN mt-3">Delete</Button></li>)

  }

  if(!loading){

    if(Auth.adminLoginValid()) {

      //* Generate List of buttons for each surf hack in database
      data.getEventList.forEach(populateListOfEvents)

      return (

        //*Admin Side Bar
        <div className="d-flex">
          <aside className="col-3 sideBarMain">
            <AdminSideBar />
          </aside>
        <main className="d-flex flex-column mt-5 w-75 justify-content-center align-items-center">
          <div className="mt-2 px-5 adminAddEventBox mb-3">
            <h1 className=" mt-2 adminAddEventText">View/Delete Events</h1>
          </div>
          
          <ul className="d-flex flex-column mt-3 w-50 justify-content-center adminAddEventBox align-items-center text-center viewSurfSessionSpacer">
            {eventListHTML}
          </ul>

        </main>
        <div className="col-1">

        </div>

        </div>

      )
    }
    else {
      return(
        <div className="d-flex flex-column align-items-center justify-content-center">

          <AdminLoginPage />

        </div>   
      )
    }
  }
}

export default DeleteEvent;


//!========================= EOF =========================