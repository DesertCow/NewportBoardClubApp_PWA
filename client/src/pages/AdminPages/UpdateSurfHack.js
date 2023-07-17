
import { useNavigate } from "react-router-dom";

import AdminSideBar from "../../components/AdminSidebar";

import { getSurfHack_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { UPDATE_SURF_HACK } from '../../utils/mutations';


const UpdateSurfHack = () => {

  const navigate = useNavigate();

  let surfHackID = window.location.href.split(`/admin/updateSurfHack/`)
  surfHackID = surfHackID[1]

  const [updateSurfHack, { surfHackData }] = useMutation(UPDATE_SURF_HACK);

  //* Get requested Event from Database
  var { loading, data } = useQuery(getSurfHack_Q, {
    variables: { surfHackId: surfHackID },
  });

  const handleUpdateSurfHack = async (event) => {

    event.preventDefault();
    console.log("Update (" + surfHackID + ") Surf Hack")

    const surfHackForm = new FormData(event.target);

    console.log(surfHackForm.get("surfHackPhotoURL"))

    const { surfHackData } = await updateSurfHack({

      
      variables: {
        hackId: surfHackID, 
        newHackTitle: surfHackForm.get("surfHackTitle"),
        newHackPhotoUrl: surfHackForm.get("surfHackPhotoURL"),
        newHackBody: surfHackForm.get("surfHackBody"),
      },
    });

    navigate("/admin/deleteSurfHack");
    location.reload()
    window.scrollTo(0, 0);

  }


  if(!loading){

    // console.log(data.getSurfHack)

    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-2">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <h1 className="text-center mt-5">Surf Hack ID: {surfHackID}</h1>

        
        <form method="post" onSubmit={handleUpdateSurfHack} className="mt-5 row d-flex justify-content-left align-items-center">
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Surf Hack Title: 
          </div>
          <input name="surfHackTitle" defaultValue={data.getSurfHack.hackTitle} className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Surf Hack Photo URL: 
          </div>
          <input name="surfHackPhotoURL" defaultValue={data.getSurfHack.hackPhotoURL} className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center mt-3">
          <div className="m-4 dateFont text-center">
              Surf Hack Body (HTML): 
          </div>
          <textarea name="surfHackBody" defaultValue={data.getSurfHack.hackBody} rows={20} cols={120} />
        </div>

        <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
          <button type="button" type="submit" className="btn addShaperSaveBTN btn-warning mx-3 mb-5">Update</button>
        </div>
        
        </form>
      </main>

      </div>

    )
  }
}

export default UpdateSurfHack;


//!========================= EOF =========================