

import { useNavigate } from "react-router-dom";

import AdminSideBar from "../../components/AdminSidebar";
import AdminLoginPage from "../../components/AdminLogin";

import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_EVENT_M } from '../../utils/mutations';

import { uploadEventPicture_Q } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';

import Auth from '../../utils/auth';

const AddEvent = () => {

  const navigate = useNavigate();

  const [createEvent, { eventData }] = useMutation(ADD_EVENT_M);
  const [getSecureURL, { secureURLdata } ] = useLazyQuery(uploadEventPicture_Q);
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  const handleNewEvent = async (event) => {

    const eventForm = new FormData(event.target);
    
    event.preventDefault();
    // console.log("Tigger Add Surf Hack")

    //* Get Public URL for uploaded Photo
    const publicURL = await HandleEventPictureUpload();
  
    const { eventData } = await createEvent({

      
      variables: { 
        eventName: eventForm.get("eventName"),
        eventSlogan: eventForm.get("eventSlogan"),
        eventDate: eventForm.get("eventDate"),
        eventLength: eventForm.get("eventLength"),
        eventBody: eventForm.get("eventBody"),
        // eventPhotoUrl: eventForm.get("eventPhotoURL"),
        eventPhotoUrl: publicURL,
        eventCurrent: JSON.parse(eventForm.get("eventCurrent")),
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

  if(Auth.adminLoginValid()) {
    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3 sideBarMain">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <div className="adminAddEventBox">
         <h2 className="text-center adminAddEventText my-2">Add Event</h2> 
        </div>
        

        <form method="post" onSubmit={handleNewEvent} className="mt-5 flex-column d-flex justify-content-center align-items-center">
          <div className="d-flex flex-row justify-content-left align-items-center adminAddEventBox w-50">
            <div>
              <div className="d-flex flex-row justify-content-left align-items-center">
                <div className="m-4 dateFont">
                    Event Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                </div>
                <input name="eventName" className="shaperInputBox p-1"/>
              </div>
              <div className="d-flex flex-row justify-content-left align-items-center">
                <div className="m-4 dateFont">
                    Event Slogan: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <input name="eventSlogan" className="shaperInputBox p-1"/>
              </div>
              <div className="d-flex flex-row justify-content-left align-items-center">
                <div className="m-4 dateFont">
                    Event Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    Event Current? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <select name="eventCurrent" className=" p-1">
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center adminAddEventBox mt-5 w-50">
            <div className="d-flex flex-column my-3 justify-content-center align-items-center">
              <h5 className="text-center flex-row mt-2">Upload Surf Hack Photo</h5>
              <input className="p-2 adminUploadBox mt-3 flex-row" type="file" name="surfHackPhoto" onChange={changeHandler} />
            </div>
          </div>

          <div className="adminAddEventBox mt-5 w-75">
            <div className="d-flex flex-row justify-content-center align-items-center my-4">
              <div className="m-4 dateFont">
                  Event Body (HTML): 
              </div>
              <textarea name="eventBody" rows={10} cols={60} />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center mt-5 align-items-center mb-5">
            <button type="button" type="submit" className="btn addShaperSaveBTN btn-success mx-3">Add Event</button>
          </div>

          
        </form>


      </main>

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

export default AddEvent;


//!========================= EOF =========================