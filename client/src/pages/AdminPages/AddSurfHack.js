


import AdminSideBar from "../../components/AdminSidebar";
import AdminLoginPage from "../../components/AdminLogin";

import { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { useMutation } from '@apollo/client';
import { ADD_SURF_HACK } from '../../utils/mutations';

import { uploadSurfHackPicture_Q } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';

import Auth from '../../utils/auth';


const AddSurfHack = () => {

  const navigate = useNavigate();

  const [createSurfHack, { surfHackData }] = useMutation(ADD_SURF_HACK);
  const [getSecureURL, { secureURLdata } ] = useLazyQuery(uploadSurfHackPicture_Q);

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  
  
  const handleNewSurfHack = async (event) => {

    const surfHackForm = new FormData(event.target);
    
    event.preventDefault();

    //* Get Public URL for uploaded Photo
    const publicURL = await HandleSurfHackPictureUpload();

  
    const { surfHackData } = await createSurfHack({

      
      variables: { 
        hackTitle: surfHackForm.get("surfHackTitle"),
        hackPhotoUrl: publicURL,
        hackBody: surfHackForm.get("surfHackBody"),
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

  if(Auth.adminLoginValid()) {
    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3 sideBarMain">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <div className="adminAddEventBox">
          <h1 className="text-center adminAddEventText my-2">Add Surf Hack</h1>
        </div>
        
        <form method="post" onSubmit={handleNewSurfHack} className="mt-5 flex-column d-flex justify-content-center align-items-center">
          
          <div className="d-flex flex-column justify-content-left align-items-center adminAddEventBox w-75">
            <div className="d-flex flex-row justify-content-left align-items-center">
              <div className="m-4 dateFont">
                  Surf Hack Title: 
              </div>
              <input name="surfHackTitle" className="shaperInputBox p-1"/>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center adminAddEventBox mt-5 w-50">
            <div className="d-flex flex-column my-3 justify-content-center align-items-center">
              <h5 className="text-center flex-row mt-2">Upload Surf Hack Photo</h5>
              <input className="p-2 uploadBox mb-2" type="file" name="surfHackPhoto" onChange={changeHandler} />
            </div>
          </div>

          <div className="adminAddEventBox w-100 my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-left align-items-center mt-4">
              <div>
                <div className="mb-4 dateFont text-center">
                    Surf Hack Body (HTML): 
                </div>
                <textarea name="surfHackBody" className="mb-5 mx-5" rows={30} cols={120} />
              </div>

            </div>
          </div>

          <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
            <button type="button" type="submit" className="btn addShaperSaveBTN btn-success mb-5 mx-3">Add</button>
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

export default AddSurfHack;


//!========================= EOF =========================