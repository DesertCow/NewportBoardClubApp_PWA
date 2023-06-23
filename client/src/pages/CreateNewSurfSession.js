

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

//* Date Picker Setup
import { useState, useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';
import TimePicker from 'react-time-picker';

function CreateNewSession() {

  
  

  const todayDate = new Date()
  console.log("Time = " + todayDate.getHours() + ":" + todayDate.getMinutes())
  const [datevalue, setValue] = useState(todayDate);
  const [timevalue, onChange] = useState(todayDate.getHours() + ":" + todayDate.getMinutes());

  console.log("Full Date: " + todayDate)

  // const dateDay = todayDate.getDay()
  const dateMonth = todayDate.getMonth() + 1;
  // const dateYear = todayDate.getFullYear()

  // console.log("DATE = " + Date.now.getFullYear());
  console.log("DATE = " + dateMonth + "-" + todayDate.getDay() + "-" + todayDate.getFullYear());

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);


  return (

    <div className="min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* <h1 className="homeTitle text-center mt-5"> Create New Surf Session</h1> */}

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
          <TimePicker onChange={onChange} value={timevalue} className=""/>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Weather Condtions: 
        </div>
        <div className="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sunny
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Sunny</a>
              <a class="dropdown-item" href="#">Partly Sunny</a>
              <a class="dropdown-item" href="#">Cloudy</a>
              <a class="dropdown-item" href="#">Rainy</a>
              <a class="dropdown-item" href="#">Foggy</a>
              <a class="dropdown-item" href="#">Thunderstorms</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Wave Height: 
        </div>
        <div className="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Wave Height
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">0-1 ft</a>
              <a class="dropdown-item" href="#">1-2 ft</a>
              <a class="dropdown-item" href="#">2-3 ft</a>
              <a class="dropdown-item" href="#">3-4 ft</a>
              <a class="dropdown-item" href="#">5-6 ft</a>
              <a class="dropdown-item" href="#">7-8 ft</a>
              <a class="dropdown-item" href="#">8-9 ft</a>
              <a class="dropdown-item" href="#">10+ ft</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Tide: 
        </div>
        <div className="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tide Level
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">-3 to -2 ft</a>
              <a class="dropdown-item" href="#">-2 to -1 ft</a>
              <a class="dropdown-item" href="#">-1 to 0 ft</a>
              <a class="dropdown-item" href="#">0 to 1 ft</a>
              <a class="dropdown-item" href="#">1 to 2 ft</a>
              <a class="dropdown-item" href="#">2 to 3 ft</a>
              <a class="dropdown-item" href="#">3 to 4 ft</a>
              <a class="dropdown-item" href="#">4 to 5 ft</a>
              <a class="dropdown-item" href="#">5 to 6 ft</a>
              <a class="dropdown-item" href="#">6+ ft</a>
            </div>
          </div>
        </div>
        <div className="m-4 dateFont">
          Direction: 
        </div>
        <div className="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Rising
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Rising</a>
              <a class="dropdown-item" href="#">Falling</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Session Length:
        </div>
        <div className="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hours
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">0</a>
              <a class="dropdown-item" href="#">1</a>
              <a class="dropdown-item" href="#">2</a>
              <a class="dropdown-item" href="#">3</a>
              <a class="dropdown-item" href="#">5</a>
            </div>
          </div>
        </div>
          <div class="dropdown mx-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Minutes
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">0</a>
              <a class="dropdown-item" href="#">5</a>
              <a class="dropdown-item" href="#">10</a>
              <a class="dropdown-item" href="#">15</a>
              <a class="dropdown-item" href="#">20</a>
              <a class="dropdown-item" href="#">25</a>
              <a class="dropdown-item" href="#">30</a>
              <a class="dropdown-item" href="#">35</a>
              <a class="dropdown-item" href="#">40</a>
              <a class="dropdown-item" href="#">45</a>
              <a class="dropdown-item" href="#">50</a>
              <a class="dropdown-item" href="#">55</a>
            </div>
          </div>
      </div>
      <div className="surfboardMainBox">
        <div className="d-flex flex-row justify-content-center align-items-center surfboardSection">
          <div className="m-4 dateFont">
             Shaper:
          </div>
          <div className="">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shaper
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Estrada Surfboard Design</a>
                <a class="dropdown-item" href="#">Baltierra Surfboards</a>
                <a class="dropdown-item" href="#">Solid Surf</a>
                <a class="dropdown-item" href="#">Almond Surfboards</a>
                <a class="dropdown-item" href="#">DHD Surfboards</a>
                <a class="dropdown-item" href="#">Tanner Surfboards</a>
                <a class="dropdown-item" href="#">Guy Takayama</a>
                <a class="dropdown-item" href="#">Robert August</a>
                <a class="dropdown-item" href="#">Dano Surfboards</a>
                <a class="dropdown-item" href="#">Album Surf</a>
                <a class="dropdown-item" href="#">Brink Surf</a>
                <a class="dropdown-item" href="#">Lost Surboards</a>
                <a class="dropdown-item" href="#">Surf Prescriptions</a>
                <a class="dropdown-item" href="#">Thread Surfboards</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center surfboardSectionMiddle">
          <div className="m-4 dateFont">
              Model:
          </div>
          <div className="">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Model:
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">TBD</a>
                <a class="dropdown-item" href="#">TBD</a>
                <a class="dropdown-item" href="#">TBD</a>
                <a class="dropdown-item" href="#">TBD</a>
                <a class="dropdown-item" href="#">TBD</a>
                <a class="dropdown-item" href="#">TBD</a>
                <a class="dropdown-item" href="#">TBD</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center surfboardSectionMiddle">
          <div className="m-4 dateFont">
              Length:
          </div>
          <div className="">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Length:
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">5 - 5.5 ft</a>
                <a class="dropdown-item" href="#">5.5 - 6 ft</a>
                <a class="dropdown-item" href="#">6 - 6.5 ft</a>
                <a class="dropdown-item" href="#">6.5 - 7 ft</a>
                <a class="dropdown-item" href="#">7 - 7.5 ft</a>
                <a class="dropdown-item" href="#">8 - 8.5 ft</a>
                <a class="dropdown-item" href="#">9 - 9.5 ft</a>
                <a class="dropdown-item" href="#">10+ ft</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center surfboardSectionEnd">
          <div className="m-4 dateFont">
              Fin Setup:
          </div>
          <div className="">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Fin Setup
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Single</a>
                <a class="dropdown-item" href="#">Twin</a>
                <a class="dropdown-item" href="#">Thruster</a>
                <a class="dropdown-item" href="#">2+1</a>
                <a class="dropdown-item" href="#">Quad</a>
                <a class="dropdown-item" href="#">Quad + 1</a>
                <a class="dropdown-item" href="#">Backwards</a>
              </div>
            </div>
          </div>
        </div> 
      </div>
      
      
      <div className="d-flex flex-row justify-content-center align-items-center smallBoxRow">
        <div className="m-4 dateFont">
            Session Rating: 
        </div>
        <div className="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Rating
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">0</a>
              <a class="dropdown-item" href="#">1</a>
              <a class="dropdown-item" href="#">2</a>
              <a class="dropdown-item" href="#">3</a>
              <a class="dropdown-item" href="#">4</a>
              <a class="dropdown-item" href="#">5</a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center smallBoxRow endSpacer">
        <button type="button" class="btn btn-lg btn-block btn-success mx-3">Save</button>
        <button type="button" class="btn btn-lg btn-block btn-danger mx-3">Cancel</button>
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