

import AdminSideBar from "../../components/AdminSidebar";

import { useMutation } from '@apollo/client';
import { ADD_SHAPER } from '../../utils/mutations';



const AddShaper = () => {


  const [createShaper, { shaperData }] = useMutation(ADD_SHAPER);



  //* Add Shaper to list
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

  }


  return (

    //*Admin Side Bar
    <div className="d-flex">
      <aside className="col-3">
        <AdminSideBar />
      </aside>
    <main className="col mt-5">
      <h1 className="text-center">Add Shaper</h1>
       
       <form method="post" onSubmit={handleNewShaper} className="mt-5 row d-flex justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="m-4 dateFont">
              Shaper: 
          </div>
          <input name="newShaper" className="shaperInputBox p-1"/>
        </div>

        <div className="d-flex flex-row justify-content-center mt-5 align-items-center">
          <button type="button" type="submit" className="btn addShaperSaveBTN btn-success mx-3">Add</button>
        </div>
        
       </form>
    </main>

    </div>

  )

}

export default AddShaper;


//!========================= EOF =========================