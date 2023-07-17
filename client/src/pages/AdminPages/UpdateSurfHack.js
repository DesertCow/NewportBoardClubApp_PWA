import AdminSideBar from "../../components/AdminSidebar";





const UpdateSurfHack = () => {

    let surfHackID = window.location.href.split(`/admin/updateSurfHack/`)
    surfHackID = surfHackID[1]

  return (

    //*Admin Side Bar
    <div className="d-flex">
      <aside className="col-3">
        <AdminSideBar />
      </aside>
    <main className="col mt-5">
      <h1 className="text-center">Surf Hack ({surfHackID})</h1>
    </main>

    </div>

  )

}

export default UpdateSurfHack;


//!========================= EOF =========================