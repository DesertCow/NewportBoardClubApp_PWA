
import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import EventPageHeaderUpcoming from '../components/EventPageHeader_Upcoming';

import { useQuery } from '@apollo/client';
import { getCurrentEvents_Q } from '../utils/queries';

function ClubEvents_Current() {


  //Event Handlers

  const navigate = useNavigate();

  const handleClubEvents = async (event) => {

    console.log("Upcoming Event Clicked!");

    event.preventDefault();
    navigate("/club_events/current_events");
  };

  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getCurrentEvents_Q)

  var finalCurrentEventHTML = []

  function parsePhotoLink(item){

    // console.log("!!!!!!!!!!!!!!!!!!!!!")
    let eventArray = item.split("|")
    // console.log(eventArray[6])
    // console.log(eventArray[1])

    finalCurrentEventHTML.push(`<div className="text-center"><img src={require("${eventArray[6]}")} className="eventPhoto mb-3" onClick={(event) => handleClubEvents(event)} alt="Outside Shot of Board Club" /></div>`)

  }

  if(!loading) {
    console.log("Current Event Count: " + data.getCurrentEvents.length)
    // console.log(data.getCurrentEvents[0])

    let eventArray = data.getCurrentEvents[0].split("|")


    // console.log(eventArray[6])
    // console.log(data.getCurrentEvents[1])

    //* Lopp over each current event
    data.getCurrentEvents.forEach(parsePhotoLink)

    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    // console.log(finalCurrentEventHTML[0])
  }

  // let test = `"`+"../img/SummerArtFair.jpg"+`"`
  // var test = "../img/SummerArtFair.jpg"

  // console.log("!!!!#@#$# TESTS")
  // console.log(`"`+test+`"`)
  // console.log(test)

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      {/* Weather Widget Component */}
      <WeatherWidget />
      
      <div>
        <EventPageHeaderUpcoming />
      </div>

      {/* <h1 className="text-center mt-5"> CURRENT EVENTS PAGE!</h1> */}

      <div className="mb-5 pb-3">
        <div className="py-3">
          <div className="text-center">
            <img src={require("../img/SummerArtFair.jpg")}
            className="eventPhoto mb-3"
            onClick={(event) => handleClubEvents(event)}
            alt="Outside Shot of Board Club" />
          </div>
          <div className="text-center">
            <img src={require("../img/Spencer+Pirdy.jpeg")}
            className="eventPhoto mb-3"
            onClick={(event) => handleClubEvents(event)}
            alt="Outside Shot of Board Club" />
          </div>
          {/* <div dangerouslySetInnerHTML={{__html: finalCurrentEventHTML[0]}} /> */}
          <div>
            {/* {parse(finalCurrentEventHTML[1])} */}
            {/* {parse(`<div className="text-center"><img src={require("../img/Spencer+Pirdy.jpeg")} className="eventPhoto mb-3" onClick={(event) => handleClubEvents(event)} alt="Outside Shot of Board Club" /></div>`)} */}
          </div>
          {/* {finalCurrentEventHTML[1]} */}

          {/* <div className="currentEventsBtns mb-2 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Current Club Event #1</div>
          <div className="currentEventsBtns my-4 p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClubEvents(event)}>Current Club Event #2</div> */}
        </div>
      </div>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>

  )

}

export default ClubEvents_Current;