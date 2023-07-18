

import AdminSideBar from "../../components/AdminSidebar";

import { databaseStats_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function Admin_Home() {

  var { loading, data } = useQuery(databaseStats_Q);

  let eventCount = 5;
  let userCount = 10;
  let surfSessionCount = 7;
  let surfHackCount = 3;
  let shaperCount = 12;

  if(!loading){

  return(

    <div className="d-flex">
      <aside className="col-3">
        <AdminSideBar />
      </aside>

      <main className="col-6 mt-5">
        <div className="adminWelcomeBox text-center p-3">
          <h1 className="">Welcome to Board Club App</h1>
          <h1 className="">Admin Console</h1>
        </div>


        <div className="adminWelcomeBox p-3 mt-5">
          <div className="d-flex text-center justify-content-center align-items-center mt-2">
            <h1 className="">Database Stats:</h1>
          </div>
          <div className="px-5 mb-3 mt-4">
            <h3 className="row">Users: {data.databaseCount.userCount}</h3>
            <h3 className="row mt-3">Surf Sessions: {data.databaseCount.surfSessionCount}</h3>
            <h3 className="row mt-3">Events: {data.databaseCount.eventCount}</h3>
            <h3 className="row mt-3">Surf Hacks: {data.databaseCount.surfHacksCount}</h3>
            <h3 className="row mt-3">Shapers: {data.databaseCount.shaperListCount}</h3>
          </div>
        </div>

      </main>

    </div>
    )
  }
}

export default Admin_Home;