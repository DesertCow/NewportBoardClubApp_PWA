

import AdminSideBar from "../../components/AdminSidebar";

import { getShaperList_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { DELETE_SHAPER } from '../../utils/mutations';

import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";


const UpdateShaperList = () => {

    const navigate = useNavigate();

    const [deleteShaper_M, { shaperID }] = useMutation(DELETE_SHAPER);

    //* Get List of surf sessions for user from Database
    var { loading, data } = useQuery(getShaperList_Q);

    var shaperListHTML = []

    const deleteShaper = async (event, shaperID) => {
      // event.preventDefault()
      // var location = index + arrayOffset

      console.log("Delete Shaper (" + shaperID +")")

      const { surfSessionData } = await deleteShaper_M({

        variables: { 
          shaperId: shaperID
        },
      });

      navigate("/admin/deleteShaper");
      location.reload()
      window.scrollTo(0, 0);

    };

    function populateListOfShapers(shaperData) {

      //* Create Shaper List
      shaperListHTML.push(<li className="d-flex col justify-content-center align-items-center" key={shaperData._id} className="shaperBox mt-4 p-3 mx-3">{shaperData.shaperName}<Button onClick={(event) => deleteShaper(event, shaperData._id)} variant="danger" className="d-flex col justify-content-center align-items-center shaperDeleteBTN mt-3">Delete</Button></li>)

    }

    


  if(!loading){

    // console.log(data)

    data.getShaperList.forEach(populateListOfShapers)


    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <h1 className="text-center">Shaper List:</h1>

        <div>
            <ul className="row justify-content-center align-items-center text-center viewSurfSessionSpacer w-100 pr-0">
              {shaperListHTML}
            </ul>
        </div>
      </main>

      </div>

    )
  }
}

export default UpdateShaperList;


//!========================= EOF =========================