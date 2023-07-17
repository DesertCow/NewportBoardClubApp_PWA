import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



const AdminSideBar = () => {




  return(

    <Sidebar backgroundColor="#6f6f6f75" className="text-center sideBarMain">
      <div className="col-12 mt-3 text-center">
        <img src={require("../../img/BC_Logo_Clear_1.png")}
          className="sideBarLogo"
          alt="The Board Club Logo" />
      </div>
      <Menu>
        <MenuItem component={<Link to="/admin" />}> Admin Home</MenuItem>
        <SubMenu label="Events">
          <MenuItem component={<Link to="/admin/addEvent" />}> Add Event </MenuItem>
          <MenuItem component={<Link to="/admin/updateEvent" />}> Update Event </MenuItem>
          {/* <MenuItem> Remove Event </MenuItem> */}
        </SubMenu>
        <SubMenu label="Surf Hacks">
          <MenuItem component={<Link to="/admin/addSurfHack" />}> Add Surf Hack </MenuItem>
          <MenuItem component={<Link to="/admin/updateSurfHack" />}> Update Surf Hack </MenuItem>
          {/* <MenuItem> Remove Surf Hack </MenuItem> */}
        </SubMenu>
        <MenuItem component={<Link to="/admin/updateShaperList" />}> Update Shaper List </MenuItem>
        <MenuItem component={<Link to="/admin/pushNotifications" />}> Push Notifications </MenuItem>
      </Menu>
    </Sidebar>

  )
}

export default AdminSideBar;


//!========================= EOF =========================