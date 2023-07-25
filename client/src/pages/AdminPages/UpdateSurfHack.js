
import { useNavigate } from "react-router-dom";

import AdminSideBar from "../../components/AdminSidebar";
import AdminLoginPage from "../../components/AdminLogin";

import { useState } from 'react';

import { getSurfHack_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { UPDATE_SURF_HACK } from '../../utils/mutations';

import { uploadSurfHackPicture_Q } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';

import Auth from '../../utils/auth';


const UpdateSurfHack = () => {

  const navigate = useNavigate();

  let surfHackID = window.location.href.split(`/admin/updateSurfHack/`)
  surfHackID = surfHackID[1]

  const [updateSurfHack, { surfHackData }] = useMutation(UPDATE_SURF_HACK);
  
  const [getSecureURL, { secureURLdata } ] = useLazyQuery(uploadSurfHackPicture_Q);

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  //* Get requested Event from Database
  var { loading, data } = useQuery(getSurfHack_Q, {
    variables: { surfHackId: surfHackID },
  });

  const handleUpdateSurfHack = async (event) => {

    event.preventDefault();
    console.log("Update (" + surfHackID + ") Surf Hack")

    const surfHackForm = new FormData(event.target);

    let publicURL = data.getSurfHack.hackPhotoURL

    //* Get Public URL for uploaded Photo
    if(selectedFile !== undefined){
     publicURL = await HandleSurfHackPictureUpload(); 
    }

    const { surfHackData } = await updateSurfHack({

      variables: {
        hackId: surfHackID, 
        newHackTitle: surfHackForm.get("surfHackTitle"),
        newHackPhotoUrl: publicURL,
        newHackBody: surfHackForm.get("surfHackBody"),
      },
    });

    navigate("/admin/deleteSurfHack");
    location.reload()
    window.scrollTo(0, 0);

  }

  const HandleSurfHackPictureUpload = async (event) => {
  // event.preventDefault();

  //* Request secure URL for upload from AWS/S3 via graphQL
  const URLdata = await getSecureURL({
    variables: { pictureKey: selectedFile.name},
  });

  //* Use parsed/clean URL to submit PUT request to S3 server
  const response = await fetch(
    URLdata.data.uploadSurfHackPicture.secureUploadURL,
    {
      method: 'PUT',
      body: selectedFile,
      headers: {
        "Content-Type": "image/jpg",
      },
    }
  )

  //* Return the URL where the photo is posted
  return URLdata.data.uploadSurfHackPicture.postedURL

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
            <h1 className="text-center mt-5 adminAddEventText">Update Surf Hack </h1>
            <h1 className="text-center mt-5 adminUpdateEventTitle">{data.getSurfHack.hackTitle}</h1>

            
            <form method="post" onSubmit={handleUpdateSurfHack} className="mt-4 flex-column d-flex justify-content-center align-items-center">
              <div className="d-flex flex-row justify-content-center align-items-center adminAddEventBox w-75">
                <div className="d-flex flex-row justify-content-left align-items-center">
                  <div className="m-4 dateFont">
                      Surf Hack Title: 
                  </div>
                  <input name="surfHackTitle" defaultValue={data.getSurfHack.hackTitle} className="shaperInputBox p-1"/>
                </div>
              </div>

              <div className="adminAddEventBox w-75 my-4 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-left align-items-center">
                  <div>
                    <div className="mt-3 mb-2 d-flex justify-content-center align-items-center flex-row dateFont">
                      Surf Hack Photo
                    </div>
                    <div>
                      <img src={data.getSurfHack.hackPhotoURL}
                        className="ml-3 adminSurfHackPhoto mb-3"
                        alt={data.getSurfHack.hackTitle} 
                      />   
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="mt-4 d-flex flex-row dateFont">
                        Surf Hack Photo URL
                    </div>
                    <div className="mt-2 mb-4 d-flex flex-row dateFont text-center">
                        {data.getSurfHack.hackPhotoURL}
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-4 mt-3 flex-row justify-content-center align-items-center">
                  <div className="mt-3 mb-4">
                    <h5 className="text-center">Upload Surf Hack Photo</h5>
                    <input className="p-2 adminUploadBox" type="file" name="surfHackPhoto" onChange={changeHandler} />
                  </div>
                </div>
              </div>
            
              <div className="adminAddEventBox w-100 my-4 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-left align-items-center mt-4">
                  <div>
                    <div className="mb-4 dateFont text-center">
                      Surf Hack Body (HTML)
                    </div>
                    <textarea name="eventBody" className="mb-5 mx-5" defaultValue={data.getSurfHack.hackBody} rows={30} cols={120} />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
                <button type="button" type="submit" className="btn addShaperSaveBTN btn-warning mx-3 mb-5">Update Surf Hack</button>
              </div>
            
            </form>
          </main>

          <div className="col-1"></div>

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

export default UpdateSurfHack;


//!========================= EOF =========================