

import AdminSideBar from "../../components/AdminSidebar";
import AdminLoginPage from "../../components/AdminLogin";

import { useNavigate } from "react-router-dom";

import { getSurfHackList_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { DELETE_SURF_HACK_M } from '../../utils/mutations';

import Button from 'react-bootstrap/Button';

import Auth from '../../utils/auth';


const UpdateSurfHack = () => {

  const navigate = useNavigate();

  const [deleteSurfHack_M, { hackID }] = useMutation(DELETE_SURF_HACK_M);

  //* Get List of surf sessions for user from Database
  var { loading, data } = useQuery(getSurfHackList_Q);

  var surfHacksHTML = []

  const deleteHack = async (event, hackID, hackTitle) => {

    console.log("Delete Surf Hack: " + hackTitle + " (" + hackID +")")

    let confirmDelete = confirm("Are you sure you want to delete [" + hackTitle +"] from the Surf Hack database?");


    if(confirmDelete){
      const { surfHackData } = await deleteSurfHack_M({

        variables: { 
          hackId: hackID
        },
      });

      navigate("/admin/deleteSurfHack");
      location.reload()
      window.scrollTo(0, 0);
    }
    else {
      navigate("/admin/shaperListUpdate");
    }

  };

  const updateHack = async (event, hackID) => {

    
  navigate("/admin/updateSurfHack/" + hackID);

  };

  function populateListOfHacks(hacksData) {

    //* Create Shaper List
    surfHacksHTML.push(<li className="d-flex col justify-content-center align-items-center" onClick={(event) => updateHack(event, hacksData._id)} key={hacksData._id} className="shaperBox my-3 p-3 mx-3">{hacksData.hackTitle}<Button onClick={(event) => deleteHack(event, hacksData._id, hacksData.hackTitle)} variant="danger" className="d-flex col justify-content-center align-items-center shaperDeleteBTN mt-3">Delete</Button></li>)

  }


  if(!loading){

    if(Auth.adminLoginValid()) {

      //* Generate List of buttons for each surf hack in database
      data.getSurfHackList.forEach(populateListOfHacks)

      return (

        //*Admin Side Bar
        <div className="d-flex">
          <aside className="col-3 sideBarMain">
            <AdminSideBar />
          </aside>

          <main className="col d-flex flex-column mt-5 w-75 justify-content-center align-items-center">
            <div className="mt-2 px-5 adminAddEventBox mb-3">
              <h1 className="mt-2 text-center adminAddEventText">View/Delete Surf Hacks</h1>
            </div>
            
            <ul className="d-flex flex-column mt-3 w-50 justify-content-center adminAddEventBox align-items-center text-center viewSurfSessionSpacer">
              {surfHacksHTML}
            </ul>
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
}

export default UpdateSurfHack;


//!========================= EOF =========================