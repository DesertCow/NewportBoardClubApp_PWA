

import AdminSideBar from "../../components/AdminSidebar";
import AdminLoginPage from "../../components/AdminLogin";

import Auth from '../../utils/auth';


const PushNotifications = () => {

  if(Auth.adminLoginValid()) {
    return (

      //*Admin Side Bar
      <div className="d-flex">
        <aside className="col-3">
          <AdminSideBar />
        </aside>
      <main className="col mt-5">
        <h1 className="text-center">Push Notifications Page!</h1>
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

export default PushNotifications;


//!========================= EOF =========================