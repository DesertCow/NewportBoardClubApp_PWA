
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import AdminSideBar from "../components/AdminSidebar";



function Admin_Home() {

  return(

   
  //*Admin Side Bar
  <div className="d-flex">
    <aside className="col-3">
      <AdminSideBar />
    </aside>
  <main className="col mt-5">
    <h1 className="text-center">Welcome to Board Club App</h1>
    <h1 className="text-center">Admin Console</h1>
  </main>

  </div>
  )

}

export default Admin_Home;