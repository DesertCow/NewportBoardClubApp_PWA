
import { useNavigate } from "react-router-dom";

import AdminSideBar from "../../components/AdminSidebar";


import { useMutation } from '@apollo/client';
import { ADD_SURF_HACK } from '../../utils/mutations';


const AddSurfHack = () => {

  const navigate = useNavigate();

  const [createSurfHack, { surfHackData }] = useMutation(ADD_SURF_HACK);

  const handleNewSurfHack = async (event) => {

    const surfHackForm = new FormData(event.target);
    
    event.preventDefault();
    // console.log("Tigger Add Surf Hack")
  
    const { surfHackData } = await createSurfHack({

      
      variables: { 
        hackTitle: surfHackForm.get("surfHackTitle"),
        hackPhotoUrl: surfHackForm.get("surfHackPhotoURL"),
        hackBody: surfHackForm.get("surfHackBody"),
      },
    });
  
    navigate("/admin/deleteSurfHack");
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
      <h1 className="text-center">Add Surf Hack Page</h1>

      <form method="post" onSubmit={handleNewSurfHack} className="mt-5 row d-flex justify-content-left align-items-center">
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Surf Hack Title: 
          </div>
          <input name="surfHackTitle" className="shaperInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="m-4 dateFont">
              Surf Hack Photo URL: 
          </div>
          <input name="surfHackPhotoURL" className="shaperInputBox p-1"/>
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