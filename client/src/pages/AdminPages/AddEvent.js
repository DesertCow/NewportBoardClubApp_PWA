

import { useNavigate } from "react-router-dom";

import AdminSideBar from "../../components/AdminSidebar";


import { useMutation } from '@apollo/client';
import { ADD_EVENT_M } from '../../utils/mutations';





const AddEvent = () => {

  const navigate = useNavigate();

  const [createEvent, { eventData }] = useMutation(ADD_EVENT_M);

  const handleNewEvent = async (event) => {

    const eventForm = new FormData(event.target);
    
    event.preventDefault();
    // console.log("Tigger Add Surf Hack")
  
    const { eventData } = await createEvent({

      
      variables: { 
        eventName: eventForm.get("eventName"),
        eventSlogan: eventForm.get("eventSlogan"),
        eventDate: eventForm.get("eventDate"),
        eventLength: eventForm.get("eventLength"),
        eventBody: eventForm.get("eventBody"),
        eventPhotoUrl: eventForm.get("eventPhotoURL"),
        eventCurrent: Boolean(eventForm.get("eventCurrent")),
      },
    });
  
    navigate("/admin/deleteEvent");
    location.reload()
    window.scrollTo(0, 0);
  }

  return (

    //*Admin Side Bar
    <div className="d-flex">
      <aside className="col-3">
        <AdminSideBar />
      </aside>
    <main className="col mt-5">
      <h1 className="text-center">Add Event Page!</h1>

      <form method="post" onSubmit={handleNewEvent} className="mt-5 row d-flex justify-content-left align-items-center">
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Event Name: 
          </div>
          <input name="eventName" className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Event Slogan: 
          </div>
          <input name="eventSlogan" className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Event Date: 
          </div>
          <input name="eventDate" className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Event Length (hours): 
          </div>
          <input name="eventLength" className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Event Photo URL: 
          </div>
          <input name="eventPhotoURL" className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Event Current? 
          </div>
          <select name="eventCurrent" className=" p-1">
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center mt-3">
          <div className="m-4 dateFont">
              Event Body (HTML): 
          </div>
          <textarea name="eventBody" rows={10} cols={60} />
        </div>

        <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
          <button type="button" type="submit" className="btn addShaperSaveBTN btn-success mx-3">Add</button>
        </div>
        
       </form>


    </main>

    </div>

  )

}

export default AddEvent;


//!========================= EOF =========================