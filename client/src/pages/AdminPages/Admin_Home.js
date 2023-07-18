

import AdminSideBar from "../../components/AdminSidebar";



function Admin_Home() {


  let eventCount = 5;
  let userCount = 10;
  let surfSessionCount = 7;
  let surfHackCount = 3;
  let shaperCount = 12;

  return(

   
  //*Admin Side Bar
  <div className="d-flex">
    <aside className="col-3">
      <AdminSideBar />
    </aside>

    <main className="col mt-5">
      <div className="adminWelcomeBox text-center p-3">
        <h1 className="">Welcome to Board Club App</h1>
        <h1 className="">Admin Console</h1>
      </div>


      <div className="d-flex text-center justify-content-center align-items-center mt-5">
        <h1 className="mt-5">Database Stats:</h1>
      </div>
      <div className="mt-5">
        <h3 className="row">Users: {eventCount}</h3>
        <h3 className="row">Surf Sessions: {surfSessionCount}</h3>
        <h3 className="row">Events: {eventCount}</h3>
        <h3 className="row">Surf Hacks: {surfHackCount}</h3>
        <h3 className="row">Shapers: {shaperCount}</h3>
      </div>
    </main>

  </div>
  )

}

export default Admin_Home;