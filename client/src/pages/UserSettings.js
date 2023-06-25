

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';

function UserSettings() {

  const todayDate = new Date()
  const [datevalue, setValue] = useState(todayDate);
  const dateMonth = todayDate.getMonth() + 1;

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* Weather Widget Component */}
      <WeatherWidget />

      <h1 className="editProfileText text-center mt-5"> User Profile</h1>

      <div className="my-5">
        <div className="text-center">
          <img src={require("../img/Avatar.jpg")}
            className="avatarIcon"
          alt="User Icon" />
        </div>
      </div>

      <form className="mx-5 mt-0 applyMainFont mb-5">

        <div className="form-group mx-2 my-5">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Slippy Toad"></input>
        </div>
        <div className="form-group mx-2 my-5">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="slippydahtoad@gmail.com"></input>
        </div>
        <div className="form-group mx-2 my-5">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
       <div className="form-group mx-2 my-5">
          <label htmlFor="exampleInputPassword1">Password Confirm</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1">
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <div className="">
          <p className="text-center dateOBText">Date Of Birth</p>
          <div className="row datePicker text-center">
            <SelectDatepicker
              selectedDate={datevalue}
              onDateChange={onDateChange}
              className="d-flex mt-3 row justify-content-center align-items-center"
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
         {/* <button type="submit" className="btn btn-primary text-center mx-5 mt-3 mb-5 editSpacer">Submit</button>  */}
         <button type="submit" className="profileSaveBtn text-center mx-5 mt-3 mb-5 editSpacer p-3">Save Changes</button> 
        </div>
      </form>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )

}

export default UserSettings;