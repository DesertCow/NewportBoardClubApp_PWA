

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { useNavigate } from "react-router-dom";

import { useMutation } from '@apollo/client';
import { CREATE_SURF_SESSION } from '../utils/mutations';

import Auth from '../utils/auth';

//* Date Picker Setup
import { useState, useCallback } from 'react';
// import { TimePicker } from 'react-ios-time-picker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function CreateNewSession() {

  const navigate = useNavigate();

  const [surfSessionState, setSurfSessionState] = useState({ userID: '', sessionDate: '' , sessionDate: '' , sessionTime: '' , sessionLocation: '' , skyConditions: '' , waveSize: '' , tideLevel: '' , sessionNotes: '' , sessionRating: '' , surfboardShaper: '' , surfboardModel: '' , surfboardLengthFT: '' , surfboardLengthIN: '' , surfboardVolume: '' , surfboardFinConfig: ''});

  //* Grab and Decode JWT Token
  let jwtToken = Auth.getProfile()

  // let login = Auth.getToken()
  // login = JSON.parse(login)

  const todayDate = new Date()


  const [createSurfSession, { surfSessionData }] = useMutation(CREATE_SURF_SESSION);


  // TODO: Set to Current local time
  // const [value, setTimeValue] = useState('10:00 AM');
  const [value, setTimeValue] = useState(todayDate.getHours() + ":" + todayDate.getMinutes());

  //  const onTimeChange = (timeValue) => {
  //     setTimeValue(timeValue);
  //  }
  
  // console.log("Value: " + value)
  
  // console.log("Time = " + todayDate.getHours() + ":" + todayDate.getMinutes())
  const [datevalue, setDateValue] = useState(todayDate);
  // const [timevalue, onChange] = useState(todayDate.getHours() + ":" + todayDate.getMinutes());

  // console.log("Full Date: " + todayDate)

  // const dateDay = todayDate.getDay()
  // const dateMonth = todayDate.getMonth() + 1;
  // const dateYear = todayDate.getFullYear()

  // console.log("DATE = " + Date.now.getFullYear());
  // console.log("DATE = " + dateMonth + "-" + todayDate.getDay() + "-" + todayDate.getFullYear());

  // const onDateChange = useCallback((date: Date) => {
  //   setValue(date);
  // }, []);


  //* ########################### Form Submit Handle ###########################
  

  //* Submit surf session data to Database
  const handleSurfSessionSubmit = async (event) => {
    
    event.preventDefault();

    const surfSession = event.target;
    const surfSessionForm = new FormData(surfSession);

    // console.log("E =" + JSON.stringify(event.target))
    // console.log("surfSession =" + surfSession)
    // console.log("Event Target = " + JSON.stringify(event.target))
    // console.log("Name =" + name)
    // console.log("Value =" + value)

    

    // console.log("surfSessionForm = " + surfSessionForm)
    // console.log("surfSession = " + surfSession.name)
    // console.log("Raw Date: " + datevalue)

    //* Convert Date output from DatePicker to MM-DD-YYYY
    var surfSessionDate = new Date( datevalue );
    var surfSessionDateFinal = surfSessionDate.getMonth() + "-" + surfSessionDate.getDate() + "-" + surfSessionDate.getFullYear();

    //* Convert Time output from TimePicker
    var surfSessionTime = new Date( value );

    //* Convert Military Time to AM/PM Time
    if(surfSessionTime.getHours() < 13)
    {
      var surfSessionTimeFinal = surfSessionTime.getHours() + ":" + surfSessionTime.getMinutes() + " AM";
    }
    else {
      var surfSessionTimeFinal = surfSessionTime.getHours()-12 + ":" + surfSessionTime.getMinutes() + " PM";
    }
    
    const { surfSessionData } = await createSurfSession({

      
      variables: { 
        userId: jwtToken.data._id,
        sessionDate: surfSessionDateFinal,
        sessionTime: surfSessionTimeFinal,
        sessionLocation: surfSessionForm.get("surfLocation"),
        skyConditions: surfSessionForm.get("skyConditions"),
        waveSize: surfSessionForm.get("waveSize"),
        tideLevel: parseFloat(surfSessionForm.get("tideLevel") + "." + surfSessionForm.get("tideLevelDecimal")),
        tideDirection: surfSessionForm.get("tideDirection"),
        sessionLength: surfSessionForm.get("sessionLengthHours") + ":" + surfSessionForm.get("sessionLengthMinutes"),
        surfboardShaper: surfSessionForm.get("surfboardShaper"),
        surfboardModel: surfSessionForm.get("surfboardModel"),
        surfboardLengthFt: parseInt(surfSessionForm.get("surfboardLengthFeet")),
        surfboardLengthIn: parseInt(surfSessionForm.get("surfboardLengthInches")),
        surfboardVolume: parseFloat(surfSessionForm.get("surfboardVolume") + "." + surfSessionForm.get("surfboardVolumeDecimal")),
        surfboardFinConfig: surfSessionForm.get("surfboardFinConfig"),
        sessionNotes: surfSessionForm.get("sessionNotes"),
        sessionRating: parseInt(surfSessionForm.get("sessionRating")),
      },
    });

    navigate("/surf_log/view_previous_sessions");
    window.location.reload(false);
  }


  return (

    <div className="min-vh-100">
      <header className="">
        <Header />
      </header>

      <WeatherWidget />

      <form method="post" onSubmit={handleSurfSessionSubmit}>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          <div className="d-flex p-2 mx-5">
            <div className="flex-col m-2 dateFont justify-content-center align-items-center">
              Date:
            </div>
            <div name="sessionDate">
              <DatePicker value={value} onChange={(newValue) => setDateValue(newValue)}/>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          <div className="p-2 dateFont">
              Time:
          </div>
          <div className="timePicker">
            <div>
              <TimePicker value={value} onChange={(newValue) => setTimeValue(newValue)} use12Hours/>
            </div>

          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          Location:&nbsp;&nbsp;
          <div>
            <input type="text" name="surfLocation" className="locationInputBox d-flex justify-content-center align-items-center p-1" />
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
        </div>
        <div className="d-flex flex-row justify-content-around align-items-center smallBoxRow">
          <div className="mx-0 dateFont">
              Tide: 
          </div>
          <div className="">
            <select name="tideLevel" defaultValue="0" className="surfSessionDropDowns ml-4">
              <option>-3</option>
              <option>-2</option>
              <option>-1</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <label>.</label>
            <select name="tideLevelDecimal" defaultValue="0" className="surfSessionDropDowns">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
            </select>
          </div>
          <div className="mx-0 dateFont">
            Direction: 
          </div>
            <select name="tideDirection" defaultValue="Rising" className="surfSessionDropDowns">
              <option value="Rising">Rising</option>
              <option value="Falling">Falling</option>
            </select>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
          <div className="m-1 sessionLengthLabel">
              Session Length (H:MM)
          </div>
            <select name="sessionLengthHours" defaultValue="0" className="surfSessionDropDowns ml-4">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label>:</label>
            <select name="sessionLengthMinutes" defaultValue="0" className="surfSessionDropDowns">
              <option value="0">0</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
            </select>
        </div>
        <div className="surfboardMainBox">
          <div className="d-flex flex-row justify-content-left align-items-center surfboardSection">
            <div className="m-4 dateFont">
              Shaper:
            </div>
            <select name="surfboardShaper" className="surfSessionDropDowns">
              <option value="Estrada Surfboard Design">Estrada Surfboard Design</option>
              <option value="Baltierra Surfboards">Baltierra Surfboards</option>
              <option value="Solid Surf">Solid Surf</option>
              <option value="Almond Surfboards">Almond Surfboards</option>
              <option value="DHD Surfboards">DHD Surfboards</option>
              <option value="Tanner Surfboards">Tanner Surfboards</option>
              <option value="Guy Takayama">Guy Takayama</option>
              <option value="Robert August">Robert August</option>
              <option value="Dano Surfboards">Dano Surfboards</option>
              <option value="Album Surf">Album Surf</option>
              <option value="Brink Surf">Brink Surf</option>
              <option value="Lost Surboards">Lost Surboards</option>
              <option value="Surf Prescriptions">Surf Prescriptions</option>
              <option value="Thread Surfboards">Thread Surfboards</option>
            </select>
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
              <select name="surfboardLengthFeet" className="surfSessionDropDowns">
                <option >4</option>
                <option >5</option>
                <option >6</option>
                <option >7</option>
                <option >8</option>
                <option >9</option>
                <option >10</option>
                <option >11</option>
              </select>
              <label className="ml-3"> FT</label>
            <div className=" ml-4">
              <select name="surfboardLengthInches" className="surfSessionDropDowns">
                <option >0</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
                <option >6</option>
                <option >7</option>
                <option >8</option>
                <option >9</option>
                <option >10</option>
                <option >11</option>
              </select>
              <label className="ml-2"> IN</label>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center surfboardSectionMiddle">
            <div className="m-4 dateFont">
                Volume:
            </div>
              <select name="surfboardVolume" className="surfSessionDropDowns">
                <option >20</option>
                <option >21</option>
                <option >22</option>
                <option >23</option>
                <option >24</option>
                <option >25</option>
                <option >26</option>
                <option >27</option>
                <option >28</option>
                <option >29</option>
                <option >30</option>
                <option >31</option>
                <option >32</option>
                <option >33</option>
                <option >34</option>
                <option >35</option>
                <option >36</option>
                <option >37</option>
                <option >38</option>
                <option >39</option>
                <option >40</option>
                <option >41</option>
                <option >42</option>
                <option >43</option>
                <option >44</option>
                <option >45</option>
              </select>
              <label className="ml-3">.</label>
            <div className=" ml-2">
              <select name="surfboardVolumeDecimal" className="surfSessionDropDowns">
                <option >0</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
                <option >6</option>
                <option >7</option>
                <option >8</option>
                <option >9</option>
              </select>
              <label className="ml-4"> L</label>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-left align-items-center surfboardSectionEnd">
            <div className="m-4 dateFont">
                Fin Setup:
            </div>
              <select name="surfboardFinConfig" className="surfSessionDropDowns">
                <option >Single</option>
                <option >Twin</option>
                <option >Thruster</option>
                <option >2+1</option>
                <option >Quad</option>
              </select>
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
            <select name="sessionRating" className="surfSessionDropDowns">
              <option >0</option>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
              <option >5</option>
            </select>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center smallBoxRow endSpacer">
          <button type="button" type="submit" className="btn btn-lg btn-block btn-success mx-3">Save</button>
          <button type="button" type="reset" className="btn btn-lg btn-block btn-danger mx-3">Reset</button>
        </div>
      </form>
      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )

}

export default CreateNewSession;