
import AdminSideBar from "../../components/AdminSidebar";

import { getShaperList_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { ADD_SHAPER, DELETE_SHAPER } from '../../utils/mutations';

import Button from 'react-bootstrap/Button';


const AddShaper = () => {

  const [createShaper, { shaperData }] = useMutation(ADD_SHAPER);
  const [deleteShaper_M, { shaperID }] = useMutation(DELETE_SHAPER);

  //* Get List of surf sessions for user from Database
  var { loading, data } = useQuery(getShaperList_Q);

  var shaperListHTML = []

  //* Add Shaper to shaper list
  const handleNewShaper = async (event) => {

    event.preventDefault();

    const newShaper = event.target;
    const newShaperForm = new FormData(newShaper);

    console.log(newShaperForm)
    // console.log("Add Shaper")

    const { surfSessionData } = await createShaper({

        
        variables: { 
          shaperName: newShaperForm.get("newShaper"),
        },
    })

    location.reload()
  
  }
  //* Delete Shaper from shaper list
  const deleteShaper = async (event, shaperID, shaperName) => {
    // event.preventDefault()
    // var location = index + arrayOffset

    let confirmDelete = confirm("Are you sure you want to delete [" + shaperName +"] from the shaper list?");

    console.log("Delete Shaper (" + shaperID +")")


    if(confirmDelete){
      const { surfSessionData } = await deleteShaper_M({

        variables: { 
          shaperId: shaperID
        },
      });

      // navigate("/admin/deleteShaper");
      location.reload()
      window.scrollTo(0, 0);
    }
  };

  //* Generate HTML based off list of shapers from Database
  function populateListOfShapers(shaperData) {

    //* Create Shaper List
    shaperListHTML.push(<li className="d-flex col justify-content-center align-items-center" key={shaperData._id} className="shaperBox mt-4 p-3 mx-3">{shaperData.shaperName}<Button onClick={(event) => deleteShaper(event, shaperData._id, shaperData.shaperName)} variant="danger" className="d-flex col justify-content-center align-items-center shaperDeleteBTN mt-3">Delete</Button></li>)

  }

  if(!loading){

    data.getShaperList.forEach(populateListOfShapers)

    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">

        <div className="shaperListBox">
          <h1 className="text-center mt-3 shaperFont">Shaper List:</h1>

          <div>
              <ul className="row justify-content-center align-items-center text-center viewSurfSessionSpacer w-100 pr-0">
                {shaperListHTML}
              </ul>
          </div>
        </div>

        <div className="addShaperBox mb-5 mt-5">
          <h1 className="text-center mt-5 shaperFont">Add Shaper</h1>
        
          <form method="post" onSubmit={handleNewShaper} className="mt-3 row d-flex justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="m-4 shaperFont shaperName">
                  Shaper Name: 
              </div>
              <input name="newShaper" className="shaperInputBox p-1"/>
            </div>

            <div className="d-flex flex-row justify-content-center mt-4  mb-5 align-items-center">
              <button type="button" type="submit" className="btn addShaperSaveBTN btn-success mx-3">Add</button>
            </div>
            
          </form>
        </div>

      </main>

      </div>

    )
  }
}

export default AddShaper;


//!========================= EOF =========================