

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

function UserSettings() {

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* Weather Widget Component */}
      <WeatherWidget />

      <h1 className="editProfileText text-center mt-5"> Edit Profile</h1>

      <div className="my-5">
        <div className="text-center">
          <img src={require("../img/Avatar.jpg")}
            className="avatarIcon"
          alt="User Icon" />
        </div>
      </div>

      <form className="mx-5 mt-0 applyMainFont mb-5">

        <div class="form-group mx-2 my-5">
          <label for="exampleInputEmail1">Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Slippy Toad"></input>
        </div>
        <div class="form-group mx-2 my-5">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="slippydahtoad@gmail.com"></input>
        </div>
        <div class="form-group mx-2 my-5">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
       <div class="form-group mx-2 my-5">
          <label for="exampleInputPassword1">Password Confirm</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        {/* <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <div class="d-flex flex-column form-group mx-5">
          {/* Add Date Picked feature */}
          <label for="exampleFormControlSelect1 p-3 m-5">Date Of Birth</label>
          <select class="form-control d-flex flex-row p-2 m-3 text-center" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          {/* <h1 class="d-flex flex-row p-2 m-3 text-center" >Year:</h1> */}
        <select class="form-control d-flex flex-row p-2 m-3 text-center" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
          </select>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
         {/* <button type="submit" className="btn btn-primary text-center mx-5 mt-3 mb-5 editSpacer">Submit</button>  */}
         <button type="submit" className="profileSaveBtn text-center mx-5 mt-3 mb-5 editSpacer">Save Changes</button> 
        </div>
      </form>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )

}

export default UserSettings;