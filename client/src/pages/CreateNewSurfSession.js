

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
      <div className="d-flex flex-row justify-content-left align-items-center smallBoxRow">
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