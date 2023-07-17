
import { useNavigate } from "react-router-dom";

import AdminSideBar from "../../components/AdminSidebar";

import { getEvent_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { UPDATE_EVENT_M } from '../../utils/mutations';


const UpdateEvent = () => {

  const navigate = useNavigate();

  let eventID = window.location.href.split(`/admin/updateEvent/`)
  eventID = eventID[1]

  const [updateEvent_M, { surfHackData }] = useMutation(UPDATE_EVENT_M);

  //* Get requested Event from Database
  var { loading, data } = useQuery(getEvent_Q, {
    variables: { eventId: eventID },
  });

  const handleUpdateEvent = async (event) => {

    event.preventDefault();
    console.log("Update (" + eventID + ") Surf Hack")

    const eventForm = new FormData(event.target);

    // console.log(eventForm.get("eventName"))

    const { surfHackData } = await updateEvent_M({

      
      variables: {
        eventId: eventID, 
        newEventName: eventForm.get("eventName"),
        newEventSlogan: eventForm.get("eventSlogan"),
        newEventDate: eventForm.get("eventDate"),
        newEventBody: eventForm.get("eventBody"),
        newEventPhotoUrl: eventForm.get("eventPhotoURL"),
        newEventCurrent: Boolean(eventForm.get("eventCurrent")),
        newEventLength: eventForm.get("eventLength"),
      },
    });

    navigate("/admin/deleteEvent");
    location.reload()
    window.scrollTo(0, 0);

  }

  if(!loading){

    console.log(data.getEvent)

    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <h1 className="text-center">Update Event Page!</h1>


        <form method="post" onSubmit={handleUpdateEvent} className="mt-5 row d-flex justify-content-left align-items-center">
          <div className="d-flex flex-row justify-content-left align-items-center">
            <div className="m-4 dateFont">
                Event Name: 
            </div>
            <input name="eventName" defaultValue={data.getEvent.eventName} className="shaperInputBox p-1"/>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center">
            <div className="m-4 dateFont">
                Event Slogan: 
            </div>
            <input name="eventSlogan" defaultValue={data.getEvent.eventSlogan} className="shaperInputBox p-1"/>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center">
            <div className="m-4 dateFont">
                Event Date: 
            </div>
            <input name="eventDate" defaultValue={data.getEvent.eventDate} className="shaperInputBox p-1"/>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center">
            <div className="m-4 dateFont">
                Event Length (hours): 
            </div>
            <input name="eventLength" defaultValue={data.getEvent.eventLength} className="shaperInputBox p-1"/>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center">
            <div className="m-4 dateFont">
                Event Photo URL: 
            </div>
            <input name="eventPhotoURL" defaultValue={data.getEvent.eventPhotoURL} className="shaperInputBox p-1"/>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center">
            <div className="m-4 dateFont">
                Event Current? 
            </div>
            <select name="eventCurrent" defaultValue={data.getEvent.eventCurrent} className=" p-1">
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center mt-3">
            <div className="m-4 dateFont">
                Event Body (HTML): 
            </div>
            <textarea name="eventBody" defaultValue={data.getEvent.eventBody} rows={20} cols={100} />
          </div>

          <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
            <button type="button" type="submit" className="btn addShaperSaveBTN btn-warning mb-5 mx-3">Update</button>
          </div>
          
        </form>
      </main>

      </div>

    )
  }
}

export default UpdateEvent;


//!========================= EOF =========================