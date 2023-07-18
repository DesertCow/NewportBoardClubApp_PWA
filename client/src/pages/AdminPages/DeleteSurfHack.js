

import AdminSideBar from "../../components/AdminSidebar";

import { useNavigate } from "react-router-dom";

import { getSurfHackList_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { DELETE_SURF_HACK_M } from '../../utils/mutations';

import Button from 'react-bootstrap/Button';


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
    surfHacksHTML.push(<li className="d-flex col justify-content-center align-items-center" onClick={(event) => updateHack(event, hacksData._id)} key={hacksData._id} className="shaperBox mt-4 p-3 mx-3">{hacksData.hackTitle}<Button onClick={(event) => deleteHack(event, hacksData._id, hacksData.hackTitle)} variant="danger" className="d-flex col justify-content-center align-items-center shaperDeleteBTN mt-3">Delete</Button></li>)

  }


  if(!loading){

    //* Generate List of buttons for each surf hack in database
    data.getSurfHackList.forEach(populateListOfHacks)

    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <h1 className="text-center">Update Surf Hack Page!</h1>

        <ul className="row justify-content-center align-items-center text-center viewSurfSessionSpacer w-100 pr-0">
          {surfHacksHTML}
        </ul>
      
      </main>

      </div>

    )
  }
}

export default UpdateSurfHack;


//!========================= EOF =========================