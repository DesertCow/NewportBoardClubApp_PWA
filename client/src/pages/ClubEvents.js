import { useNavigate } from "react-router-dom";

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { getCurrentEvents_Q, getHistoryEvents_Q } from '../utils/queries';

import React, { Component, useState } from "react";
import Switch from "react-switch";


function ClubEvents_Current() {

  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  var finalCurrentEventHTML = []
  
  //* Get Current Event Data from App Server
  var { loading, data } = useQuery(getCurrentEvents_Q)
  
  var currrentEventData = data;
  
  //* Get Historic Event Data from App Server
  var { loading, data } = useQuery(getHistoryEvents_Q)
  
  var historyEventData = data;


  //* =========== Functions ===========

  //* Build Events HTML based off passed Event Data
  function buildEventBTN(eventData){

    //* Generate IMG and Button for each event
    finalCurrentEventHTML.push(
      <div className="eventsDisplayBox" key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)}>
        <h1 className="mt-2 pt-4 px-3">{eventData.eventName}</h1>
        <img src={eventData.eventPhotoURL} 
          className="eventIconPhoto mb-1 px-3" 
          alt="Event Photo" />
        <h1 className="mb- mt-2">{eventData.eventDate}</h1>
      </div>)

  }

  //* =========== Event Handlers ===========

  const displayEventDetails = async (event, reqEventID) => {
    event.preventDefault();

    navigate("/club_events/event/" + reqEventID);
  };

  //* Handles Event Switch Changes
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  //* =========== HTML Return  ===========

  //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    //* Load Current Events
    if(!loading && !checked) {


      let eventList = currrentEventData.getCurrentEvents;

      //* Lopp over each current event
      eventList.forEach(buildEventBTN)

      return (

        <div className="d-flex flex-column min-vh-100">
          <header className="">
            <Header />
          </header>

          {/* Weather Widget Component */}
          <WeatherWidget />

          <div className="p-3 text-center eventsSwitchBox eventsCurrent">
            <label className="d-flex w-100 align-items-center justify-content-center">
              <span className="d-flex align-items-center col">Current Events</span>
              <div className="col">
                <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch d-flex align-items-center"
                height={40}
                width={180}
                offColor="#51a7ff"
                offHandleColor="#0480FF"
                uncheckedIcon={false}
                />
              </div>
              <span className="col">Previous Events</span>
            </label>
          </div>
            
          <div className="text-center eventListMain eventsCurrent">
            {finalCurrentEventHTML} 
          </div>

          <footer className="mt-auto mb-0">
            <NavFooter />
          </footer>
        </div>

      )

    }

    //* Load Historic Events
    if(!loading && checked) {


      let eventList = historyEventData.getPreviousEvents;

      //* Lopp over each current event
      eventList.forEach(buildEventBTN)

      return (

        <div className="d-flex flex-column min-vh-100">
          <header className="">
            <Header />
          </header>

          {/* Weather Widget Component */}
          <WeatherWidget />

          <div className="p-3 text-center eventsSwitchBox eventsHistory">
            <label className="d-flex w-100 align-items-center justify-content-center">
              <span className="d-flex align-items-center col">Current Events</span>
              <div className="col">
                <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch d-flex align-items-center"
                height={40}
                width={180}
                onColor="#FFA951"
                onHandleColor="#ff8304"
                checkedIcon={false}
                />
              </div>
              <span className="col">Previous Events</span>
            </label>
          </div>
            
          <div className="text-center eventListMain eventsHistory">
            {finalCurrentEventHTML} 
          </div>

          <footer className="mt-auto mb-0">
            <NavFooter />
          </footer>
        </div>

      )

    }
  }
  else {

    return(
      <div className="d-flex flex-column align-items-center justify-content-center">

        <LoginPage />

      </div>   
    )
  }

}

export default ClubEvents_Current;