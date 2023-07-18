
import { useNavigate } from "react-router-dom";

import AdminSideBar from "../../components/AdminSidebar";

import { useState, useCallback } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_SURF_HACK } from '../../utils/mutations';

import { uploadSurfHackPicture_Q } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';


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

  return (

    //*Admin Side Bar
    <div className="d-flex">
      <aside className="col-3">
        <AdminSideBar />
      </aside>
    <main className="col mt-5">
      <h1 className="text-center">Add Surf Hack Page</h1>

      <form method="post" onSubmit={handleNewSurfHack} className="mt-5 row d-flex justify-content-left align-items-center">
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Surf Hack Title: 
          </div>
          <input name="surfHackTitle" className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex mb-5 flex-row justify-content-center align-items-center">
          <div className="mt-3">
            <h5 className="text-center">Upload Surf Hack Photo</h5>
            <input className="p-2 uploadBox" type="file" name="surfHackPhoto" onChange={changeHandler} />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center mt-3">
          <div className="m-4 dateFont">
              Surf Hack Body (HTML): 
          </div>
          <textarea name="surfHackBody" rows={10} cols={60} />
        </div>

        <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
          <button type="button" type="submit" className="btn addShaperSaveBTN btn-success mx-3">Add</button>
        </div>
        
       </form>
    </main>

    </div>

  )

}

export default AddSurfHack;


//!========================= EOF =========================