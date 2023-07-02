

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

//* Date Picker Setup
import { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';
// import TimePicker from 'react-time-picker';
import { TimePicker } from 'react-ios-time-picker';

function CreateNewSession() {

  
  const [value, setTimeValue] = useState('10:00 AM');

   const onTimeChange = (timeValue) => {
      setTimeValue(timeValue);
   }
  

  const todayDate = new Date()
  // console.log("Time = " + todayDate.getHours() + ":" + todayDate.getMinutes())
  const [datevalue, setValue] = useState(todayDate);
  const [timevalue, onChange] = useState(todayDate.getHours() + ":" + todayDate.getMinutes());

  // console.log("Full Date: " + todayDate)

  // const dateDay = todayDate.getDay()
  const dateMonth = todayDate.getMonth() + 1;
  // const dateYear = todayDate.getFullYear()

  // console.log("DATE = " + Date.now.getFullYear());
  // console.log("DATE = " + dateMonth + "-" + todayDate.getDay() + "-" + todayDate.getFullYear());

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);


  return (

    <div className="min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* Weather Widget Component */}
      <WeatherWidget />

      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="d-flex p-2 mx-5">
          <div className="flex-col m-2 dateFont justify-content-center align-items-center">
            Date:
          </div>
          <div className="datePicker flex-col text-center">
            <SelectDatepicker
              selectedDate={datevalue}
              onDateChange={onDateChange}
              className=""
            />
          </div>
      
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Time:
        </div>
        <div className="timePicker">
          {/* <TimePicker onChange={onChange} value={timevalue} className=""/> */}
          <div>
            <TimePicker onChange={onTimeChange} value={value} use12Hours/>
          </div>

        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Weather Condtions: 
        </div>
        <div className="">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sunny
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Sunny</a>
              <a className="dropdown-item" href="#">Partly Sunny</a>
              <a className="dropdown-item" href="#">Cloudy</a>
              <a className="dropdown-item" href="#">Rainy</a>
              <a className="dropdown-item" href="#">Foggy</a>
              <a className="dropdown-item" href="#">Thunderstorms</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        Location:&nbsp;&nbsp;
        <div>
          <input type="text" name="Location" className="locationInputBox d-flex justify-content-center align-items-center p-1" />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Wave Height: 
        </div>
        <div className="">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Wave Height
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">0-1 ft</a>
              <a className="dropdown-item" href="#">1-2 ft</a>
              <a className="dropdown-item" href="#">2-3 ft</a>
              <a className="dropdown-item" href="#">3-4 ft</a>
              <a className="dropdown-item" href="#">5-6 ft</a>
              <a className="dropdown-item" href="#">7-8 ft</a>
              <a className="dropdown-item" href="#">8-9 ft</a>
              <a className="dropdown-item" href="#">10+ ft</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around align-items-center smallBoxRow">
        <div className="mx-0 dateFont">
            Tide: 
        </div>
        <div className="">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tide Level
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">-3 to -2 ft</a>
              <a className="dropdown-item" href="#">-2 to -1 ft</a>
              <a className="dropdown-item" href="#">-1 to 0 ft</a>
              <a className="dropdown-item" href="#">0 to 1 ft</a>
              <a className="dropdown-item" href="#">1 to 2 ft</a>
              <a className="dropdown-item" href="#">2 to 3 ft</a>
              <a className="dropdown-item" href="#">3 to 4 ft</a>
              <a className="dropdown-item" href="#">4 to 5 ft</a>
              <a className="dropdown-item" href="#">5 to 6 ft</a>
              <a className="dropdown-item" href="#">6+ ft</a>
            </div>
          </div>
        </div>
        <div className="mx-0 dateFont">
          Direction: 
        </div>
        <div className="">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Rising
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Rising</a>
              <a className="dropdown-item" href="#">Falling</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Session Length:
        </div>
        <div className="">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hours
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">0</a>
              <a className="dropdown-item" href="#">1</a>
              <a className="dropdown-item" href="#">2</a>
              <a className="dropdown-item" href="#">3</a>
              <a className="dropdown-item" href="#">5</a>
            </div>
          </div>
        </div>
          <div className="dropdown mx-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Minutes
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">0</a>
              <a className="dropdown-item" href="#">5</a>
              <a className="dropdown-item" href="#">10</a>
              <a className="dropdown-item" href="#">15</a>
              <a className="dropdown-item" href="#">20</a>
              <a className="dropdown-item" href="#">25</a>
              <a className="dropdown-item" href="#">30</a>
              <a className="dropdown-item" href="#">35</a>
              <a className="dropdown-item" href="#">40</a>
              <a className="dropdown-item" href="#">45</a>
              <a className="dropdown-item" href="#">50</a>
              <a className="dropdown-item" href="#">55</a>
            </div>
          </div>
      </div>
      <div className="surfboardMainBox">
        <div className="d-flex flex-row justify-content-left align-items-center surfboardSection">
          <div className="m-4 dateFont">
             Shaper:
          </div>
          <div className="">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shaper
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Estrada Surfboard Design</a>
                <a className="dropdown-item" href="#">Baltierra Surfboards</a>
                <a className="dropdown-item" href="#">Solid Surf</a>
                <a className="dropdown-item" href="#">Almond Surfboards</a>
                <a className="dropdown-item" href="#">DHD Surfboards</a>
                <a className="dropdown-item" href="#">Tanner Surfboards</a>
                <a className="dropdown-item" href="#">Guy Takayama</a>
                <a className="dropdown-item" href="#">Robert August</a>
                <a className="dropdown-item" href="#">Dano Surfboards</a>
                <a className="dropdown-item" href="#">Album Surf</a>
                <a className="dropdown-item" href="#">Brink Surf</a>
                <a className="dropdown-item" href="#">Lost Surboards</a>
                <a className="dropdown-item" href="#">Surf Prescriptions</a>
                <a className="dropdown-item" href="#">Thread Surfboards</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center surfboardSectionMiddle">
          <div className="m-4 dateFont">
              Model: 
          </div>
          <input name="myInput" className="modelInputBox p-1"/>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center surfboardSectionMiddle">
          <div className="m-4 dateFont">
              Length:
          </div>
          <div className="">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Feet
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">4</a>
                <a className="dropdown-item" href="#">5</a>
                <a className="dropdown-item" href="#">6</a>
                <a className="dropdown-item" href="#">7</a>
                <a className="dropdown-item" href="#">8</a>
                <a className="dropdown-item" href="#">9</a>
                <a className="dropdown-item" href="#">10</a>
                <a className="dropdown-item" href="#">11</a>
                <a className="dropdown-item" href="#">12</a>
              </div>
            </div>
          </div>
          <div className=" mx-3 ">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Inches
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">1</a>
                <a className="dropdown-item" href="#">2</a>
                <a className="dropdown-item" href="#">3</a>
                <a className="dropdown-item" href="#">4</a>
                <a className="dropdown-item" href="#">5</a>
                <a className="dropdown-item" href="#">6</a>
                <a className="dropdown-item" href="#">7</a>
                <a className="dropdown-item" href="#">8</a>
                <a className="dropdown-item" href="#">9</a>
                <a className="dropdown-item" href="#">10</a>
                <a className="dropdown-item" href="#">11</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-left align-items-center surfboardSectionEnd">
          <div className="m-4 dateFont">
              Fin Setup:
          </div>
          <div className="">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Fin Setup
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Single</a>
                <a className="dropdown-item" href="#">Twin</a>
                <a className="dropdown-item" href="#">Thruster</a>
                <a className="dropdown-item" href="#">2+1</a>
                <a className="dropdown-item" href="#">Quad</a>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <div>
        <label className="text-center textBox">
          Session Notes:
        <textarea name="postContent" rows={6} cols={40} className="textEntry mb-4"/>
    </label>
      </div>
      
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Session Rating: 
        </div>
        <div className="">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Rating
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">0</a>
              <a className="dropdown-item" href="#">1</a>
              <a className="dropdown-item" href="#">2</a>
              <a className="dropdown-item" href="#">3</a>
              <a className="dropdown-item" href="#">4</a>
              <a className="dropdown-item" href="#">5</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center smallBoxRow endSpacer">
        <button type="button" className="btn btn-lg btn-block btn-success mx-3">Save</button>
        <button type="button" className="btn btn-lg btn-block btn-danger mx-3">Cancel</button>
      </div>
      {/* <div className="d-flex flex-row-reverse ">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
        <div className="p-2">Flex item 3</div>
      </div> */}
      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )

}

export default CreateNewSession;