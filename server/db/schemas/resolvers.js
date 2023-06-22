


//* Models for SQL and MongoDB 
// const { UserMongo, FoodItem, Category, Orders } = require('../../models');
// const { User_Mongo } = require('../../models');

//* SQL Connection
// const sequelize = require('../sqlConnection');

//* Auth Tools
const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const { signToken } = require('../../utils/auth');

const { useState, useEffect } = require("react");
const fetch = require("node-fetch");

let previousTide = "null";
let tideRising = "false";



const resolvers = {

  Query: {
    
  getWX: async() => {

      let wxStationURL = "https://api.weather.com/v2/pws/observations/current?stationId=KCANEWPO204&format=json&units=e&apiKey=f157bb453d9d4a5997bb453d9d9a59af";
      let waterTempURL = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=9410230&product=water_temperature&datum=STND&time_zone=gmt&units=english&format=json";
      let tideStationURL = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=9410230&product=water_level&datum=STND&time_zone=lst&units=english&format=json";



      let finalLiveWindSpeed = "null";
      let finalAirTemp = "null";
      let finalWaterTemp = "null";
      let finalLiveTideMSL = "null";
      
      //* Fetch Wind and Air temp data
      await fetch(wxStationURL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.observations[0].imperial);
          let liveWxData = data.observations[0].imperial;

          
          finalLiveWindSpeed = liveWxData.windSpeed;
          finalAirTemp = liveWxData.temp
          console.log("\nWind Speed: " + finalLiveWindSpeed + " mph")
          console.log("Air Temp: " + finalAirTemp + " F")

        })

        //* Fetch Water Temp Data
        await fetch(waterTempURL)
          .then((response) => {
            return response.json();
          })
          .then((waterData) => {
            // console.log(waterData.data[0].v);
            // console.log(waterData);
            finalWaterTemp = waterData.data[0].v;
            console.log("Water Temp: " + finalWaterTemp + " F");
            
          })

        //* Fetch Tide Data
        await fetch(tideStationURL)
          .then((response) => {
            return response.json();
          })
          .then((tideData) => {
            // console.log(tideData);

            tideMSL = parseFloat(tideData.data[0].s);
            // tideMSL = parseFloat(tideMSL).toFixed(2);
            console.log("Tide MSL: " + tideMSL + " ft");

            
            console.log("Previous Tide: " + previousTide)
            console.log("Current Tide: " + tideMSL)

            if(previousTide == tideMSL) {
              console.log("Tide Unchanged!")
            }

            if(tideMSL > previousTide) {
              
              tideRising = true;
              console.log("Tide Rising: " + tideRising)
              previousTide = tideMSL;
            }

            if(tideMSL < previousTide) {
              
              tideRising = false;
              console.log("Tide Falling: " + tideRising)
              previousTide = tideMSL;
            }

            if(previousTide == "null") {
              console.log("Null Updated")
              previousTide = tideMSL;
            }
            
            
          })

          return {
            wind: finalLiveWindSpeed,
            airTemp: finalAirTemp,
            waterTemp: finalWaterTemp,
            tideMSL: parseFloat(tideMSL).toFixed(2),
            // tideRise: tideRising
            tideRise: true
          }

        }
    },

  Mutation: {
    createUser: async (parent, { email, password, customerName }) => {

      console.log("\n\x1b[33mCreate New User (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m\n   Email: " + email + "\x1b[0m\n   Email: " + customerName);

      //* Request Database create a new "User"
      const user = await UserMongo.create({ email, password, customerName });

      //TODO: Enable way to print this when it fails...
      //console.log("\x1b[35mAccount Creation Failed: Email already associated with an account \x1b[0m");


      // console.log(user)
      //* Sign/Generate JWT Token
      const token = signToken(user);

      console.log("\x1b[32mAccount Creation Successful\x1b[0m");

      //* Return Token to User
      return { token, user };
    },
    login: async (parent, { email, password }) => {

      console.log("\n\x1b[33mLogin Request\x1b[0m\n   Email: \x1b[33m" + email + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m")

      //* Query Database for user based off provided "email"
      const user = await UserMongo.findOne({ email });

      //* Validate User Exists
      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      //* Validate Password via "isCorrectPassword" method
      const correctPw = await user.isCorrectPassword(password);

      // console.log("Correct Password = " + correctPw)

      //* Error for incorrect password
      if (!correctPw) {
        console.log("\x1b[35mLogin Failed\x1b[0m")
        throw new AuthenticationError('Incorrect password!');
      }

      console.log("\x1b[32m   Login Successful\x1b[0m\n")

      //* Logic to check for admin status

      // console.log("ADMIN ENV EMAIL")
      // console.log(process.env.ADMIN_ACCOUNT)

      let admin = false

      if (process.env.ADMIN_ACCOUNT == email) {
        console.log("\n========================================")
        console.log("=\x1b[31m    WARNING ADMIN LOG IN DETECTED!\x1b[0m    =")
        console.log("========================================")
        admin = true
      }
      else {
        admin = false
      }


      //* Return Token to User
      const token = signToken(user);
      return { token, user, admin };
    },
    updateEmail: async (parent, { email, _id }) => {

      //TODO: Confirm new email does not already exists in DB
      //TODO: Add Try/Catch logic to print failed update to console
      console.log("\n\x1b[33mUpdate User Email (MongoDB)\x1b[0m\n\x1b[0m\n   Email: \x1b[35m" + email + "\n\x1b[0m   ID: \x1b[35m" + _id);

      await UserMongo.updateOne({ _id: _id }, { $set: { email: email } })

      console.log("\x1b[32m   Email Update Successful\x1b[0m\n")

    },
    updatePassword: async (parent, { password, _id }) => {

      console.log("\n\x1b[33mUpdate User Password (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\n\x1b[0m   ID: \x1b[35m" + _id + "\x1b[0m");

      const user = await UserMongo.findOne({ _id });
      const hashword = await user.generateHash(password);


      //TODO: Add Try/Catch logic to print failed update to console
      await UserMongo.updateOne({ _id: _id }, { $set: { password: hashword } })

      console.log("\x1b[32m   Password Update Successful\x1b[0m\n")

    },
    updateName: async (parent, { name, _id }) => {

      console.log("\n\x1b[33mUpdate User Name (MongoDB)\x1b[0m\n\x1b[0m\n   Name: \x1b[35m" + name + "\n\x1b[0m   ID: \x1b[35m" + _id);

      await UserMongo.updateOne({ _id: _id }, { $set: { customerName: name } })

      console.log("\x1b[32m   Name Update Successful\x1b[0m\n")

    },

  },

};

module.exports = resolvers;