
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import AdminSideBar from "../../components/AdminSidebar";
import AdminLoginPage from "../../components/AdminLogin";

import { getEvent_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { UPDATE_EVENT_M } from '../../utils/mutations';

import { uploadEventPicture_Q } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';

import Auth from '../../utils/auth';


const UpdateEvent = () => {

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [getSecureURL, { secureURLdata } ] = useLazyQuery(uploadEventPicture_Q);
  
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  let eventID = window.location.href.split(`/admin/updateEvent/`)
  eventID = eventID[1]

  const [updateEvent_M, { surfHackData }] = useMutation(UPDATE_EVENT_M);

  //* Get requested Event from Database
  var { loading, data } = useQuery(getEvent_Q, {
    variables: { eventId: eventID },
  });

  const handleUpdateEvent = async (event) => {

    event.preventDefault();
    console.log("Update (" + eventID + ") Event")

    const eventForm = new FormData(event.target);

    let publicURL = data.getEvent.eventPhotoURL

    //* Get Public URL for uploaded Photo
    if(selectedFile !== undefined){
     publicURL = await HandleEventPictureUpload(); 
    }

    const { eventData } = await updateEvent_M({

      variables: {
        eventId: eventID, 
        newEventName: eventForm.get("eventName"),
        newEventSlogan: eventForm.get("eventSlogan"),
        newEventDate: eventForm.get("eventDate"),
        newEventBody: eventForm.get("eventBody"),
        newEventPhotoUrl: publicURL,
        newEventCurrent: JSON.parse(eventForm.get("eventCurrent")),
        newEventLength: eventForm.get("eventLength"),
      },
    });

    navigate("/admin/deleteEvent");
    location.reload()
    window.scrollTo(0, 0);

  }

  const HandleEventPictureUpload = async (event) => {
  // event.preventDefault();

  //* Request secure URL for upload from AWS/S3 via graphQL
  const URLdata = await getSecureURL({
    variables: { pictureKey: selectedFile.name},
  });

  //* Use parsed/clean URL to submit PUT request to S3 server
  const response = await fetch(
    URLdata.data.uploadEventPicture.secureUploadURL,
    {
      method: 'PUT',
      body: selectedFile,
      headers: {
        "Content-Type": "image/jpg",
      },
    }
  )

  //* Return the URL where the photo is posted
  return URLdata.data.uploadEventPicture.postedURL

  }

  if(!loading){

    if(Auth.adminLoginValid()) {

      return (

        //*Admin Side Bar
        <div className="d-flex">
          <aside className="col-3 sideBarMain">
            <AdminSideBar />
          </aside>
        <main className="col mt-5">
          <h1 className="text-center adminAddEventText">Update Event:</h1>
          <h1 className="text-center mt-5 adminUpdateEventTitle">{data.getEvent.eventName}</h1>


          <form method="post" onSubmit={handleUpdateEvent} className="mt-4 flex-column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center align-items-center adminAddEventBox w-75">
              <div>
                <div className="d-flex flex-row justify-content-left align-items-center">
                  <div className="m-4 dateFont">
                      Event Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <input name="eventName" defaultValue={data.getEvent.eventName} className="shaperInputBox p-1"/>
                </div>
                <div className="d-flex flex-row justify-content-left align-items-center">
                  <div className="m-4 dateFont">
                      Event Slogan: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <input name="eventSlogan" defaultValue={data.getEvent.eventSlogan} className="shaperInputBox p-1"/>
                </div>
                <div className="d-flex flex-row justify-content-left align-items-center">
                  <div className="m-4 dateFont">
                      Event Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                      Event Current? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <select name="eventCurrent" defaultValue={data.getEvent.eventCurrent} className=" p-1">
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="adminAddEventBox w-75 my-4 d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-left align-items-center">
                <div>
                  <div className="mt-3 mb-2 d-flex justify-content-center align-items-center flex-row dateFont">
                      Surf Hack Photo
                  </div>
                  <div>
                    <img src={data.getEvent.eventPhotoURL}
                      className="ml-3 adminSurfHackPhoto mb-3"
                      alt={data.getEvent.eventName} 
                    />
                  </div>
                </div>   
              </div>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="mt-4 d-flex flex-row dateFont">
                      Event Photo URL:
                  </div>
                  <div className="mt-2 mb-4 d-flex flex-row dateFont text-center">
                      {data.getEvent.eventPhotoURL}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-left align-items-center">
                <div className="d-flex flex-row mt-3 justify-content-center align-items-center">
                    <div className="mt-3 mb-4">
                      <h5 className="text-center">Upload Event Hack Photo</h5>
                      <input className="p-2 adminUploadBox" type="file" name="eventPhoto" onChange={changeHandler} />
                    </div>
                </div>
              </div>
            </div>

            <div className="adminAddEventBox w-100 my-4 d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-row justify-content-left align-items-center mt-4">
                <div>
                  <div className="mb-4 dateFont text-center">
                    Event Body (HTML)
                  </div>
                   <textarea name="eventBody" className="mb-5 mx-5" defaultValue={data.getEvent.eventBody} rows={30} cols={120} />
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
              <button type="button" type="submit" className="btn addShaperSaveBTN btn-warning mb-5 mx-3">Update Event</button>
            </div>
            
          </form>
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

export default UpdateEvent;


//!========================= EOF =========================