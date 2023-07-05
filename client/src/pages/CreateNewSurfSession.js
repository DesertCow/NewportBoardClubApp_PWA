

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";


import { useMutation } from '@apollo/client';
import { CREATE_SURF_SESSION } from '../utils/mutations';

import Auth from '../utils/auth';

//* Date Picker Setup
import { useState, useCallback } from 'react';
// import { TimePicker } from 'react-ios-time-picker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function CreateNewSession() {

  const [surfSessionState, setSurfSessionState] = useState({ userID: '', sessionDate: '' , sessionDate: '' , sessionTime: '' , sessionLocation: '' , skyConditions: '' , waveSize: '' , tideLevel: '' , sessionNotes: '' , sessionRating: '' , surfboardShaper: '' , surfboardModel: '' , surfboardLengthFT: '' , surfboardLengthIN: '' , surfboardVolume: '' , surfboardFinConfig: ''});

  let login = Auth.getToken()
  login = JSON.parse(login)

    const [createSurfSession, { surfSessionData }] = useMutation(CREATE_SURF_SESSION);


  // TODO: Set to Current local time
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


  //* ########################### Form Update Handle ###########################
  

  //* Update surfSessionState when Weather Conditions are Updated
  // const handleSkyConditionsChange = (event) => {
  //   const { name, value } = event.target;

  //   // console.log("New Email = " + value)
  //   // console.log("Name = " + name)

  //   setSurfSessionState({
  //     ...surfSessionState,
  //     userID: login.user._id,
  //     skyConditions: value,
  //   });

  //   // console.log("Email State = ")
  //   // console.log(emailState)

  // }

  //* Update Surf Session Form when it's submitted
  const handleSurfSessionSubmit = async (event) => {
    
    event.preventDefault();
    // const { name, value } = event.target;

    const surfSession = event.target;
    const surfSessionForm = new FormData(surfSession);

    // console.log("E =" + JSON.stringify(event.target))
    // console.log("surfSession =" + surfSession)
    // console.log("Event Target = " + JSON.stringify(event.target))
    // console.log("Name =" + name)
    // console.log("Value =" + value)

    

    // console.log("surfSessionForm = " + surfSessionForm)
    // console.log("surfSession = " + surfSession.name)
 
    console.log("skyConditions = " +surfSessionForm.get("skyConditions"));
    console.log("surfLocation = " +surfSessionForm.get("surfLocation"));


    
    const { surfSessionData } = await createSurfSession({
      // variables: { ...surfSessionState },
      variables: { 
        userId: login.user._id,
        sessionDate: "6-25-2023",
        skyConditions: surfSessionForm.get("skyConditions"),
        sessionTime: "10:00am",
        waveSize: "2-3 ft",
        sessionLength: "1:30",
        sessionLocation: surfSessionForm.get("surfLocation"),
      },
    });

    console.log("Surf Session Data: " + surfSessionData)

    // console.log(new URLSearchParams(surfSessionForm));

  // for (const [key, value] of surfSessionForm) {
  //   // output.textContent += `${key}: ${value}\n`;
  //   console.log(`${key}: ${value}\n`);
  // }

    // console.log("New Email = " + value)
    // console.log("Name = " + name)

    // setSurfSessionState({
    //   ...surfSessionState,
    //   userID: login.user._id,
    //   skyConditions: value,
    // });

    // console.log("Email State = ")
    // console.log(emailState)

  }


  return (

    <div className="min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* Weather Widget Component */}
      <WeatherWidget />
      <form method="post" onSubmit={handleSurfSessionSubmit}>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          <div className="d-flex p-2 mx-5">
            <div className="flex-col m-2 dateFont justify-content-center align-items-center">
              Date:
            </div>
            <div name="Date">
              <DatePicker />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          <div className="p-2 dateFont">
              Time:
          </div>
          <div className="timePicker">
            {/* <TimePicker onChange={onChange} value={timevalue} className=""/> */}
            <div>
              {/* <TimePicker onChange={onTimeChange} value={value} use12Hours/> */}
              <TimePicker/>
            </div>

          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          <div className="m-4 dateFont">
              Sky Condtions: 
          </div>
          <select name="skyConditions" defaultValue="Sunny" className="surfSessionDropDowns">
            <option value="Sunny">Sunny</option>
            <option value="Partly Sunny">Partly Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Foggy">Foggy</option>
            <option value="Rainy">Rainy</option>
            <option value="Thunderstorms">Thunderstorms</option>
          </select>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          Location:&nbsp;&nbsp;
          <div>
            <input type="text" name="surfLocation" className="locationInputBox d-flex justify-content-center align-items-center p-1" />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          <div className="m-4 dateFont">
              Wave Height: 
          </div>
          <select name="waveSize" defaultValue="0-1 ft" className="surfSessionDropDowns">
            <option value="0-1">0-1 ft</option>
            <option value="1-2">1-2 ft</option>
            <option value="2-3">2-3 ft</option>
            <option value="3-4">3-4 ft</option>
            <option value="4-5">4-5 ft</option>
            <option value="5-6">5-6 ft</option>
            <option value="6-7">6-7 ft</option>
            <option value="7-8">7-8 ft</option>
            <option value="8-9">8-9 ft</option>
            <option value="10+">10+ ft</option>
          </select>
          {/* <div className="">
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
          </div> */}
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
            <input name="surfboardModel" className="modelInputBox p-1"/>
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
          <textarea name="sessionNotes" rows={6} cols={40} className="textEntry mb-4"/>
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
          <button type="button" type="submit" className="btn btn-lg btn-block btn-success mx-3">Save</button>
          <button type="button" className="btn btn-lg btn-block btn-danger mx-3">Cancel</button>
        </div>
      </form>
      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )

}

export default CreateNewSession;