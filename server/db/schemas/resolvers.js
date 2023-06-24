


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
const { response } = require("express");

let previousTide = "null";
let tideRising = "false";

//* API URLs
let surfline36thURL = "https://services.surfline.com/kbyg/spots/batch?cacheEnabled=true&units%5BswellHeight%5D=FT&units%5Btemperature%5D=F&units%5BtideHeight%5D=FT&units%5BwaveHeight%5D=FT&units%5BwindSpeed%5D=MPH&spotIds=5842041f4e65fad6a770882a";
let surflineBatchURL = "https://services.surfline.com/kbyg/spots/batch?cacheEnabled=true&units%5BswellHeight%5D=FT&units%5Btemperature%5D=F&units%5BtideHeight%5D=FT&units%5BwaveHeight%5D=FT&units%5BwindSpeed%5D=MPH&spotIds=584204204e65fad6a7709115%2C5842041f4e65fad6a770882a%2C5842041f4e65fad6a7708e54%2C5842041f4e65fad6a77088ee";

const resolvers = {

  Query: {
    
  getWX: async() => {

        let finalLiveWindSpeed = "null";
        let finalAirTemp = "null";
        let finalWaterTemp = "null";
        let finalLiveTideMSL = "null";
        let finalTideDir = "null";

        //* Fetch Surfline Live Conditions Data
        await fetch(surfline36thURL)
          .then((response) => {
            return response.json();
          })
          .then((surflineDataRaw) => {

            // console.log("Surfline Raw: " + JSON.stringify(surflineDataRaw))
            // console.log("Surfline Raw: " + JSON.stringify(surflineDataRaw.data[0].waterTemp.max))

            console.log("\x1b[36m\n ☎️  Surfline API Request ☎️ \n         [getWX]\x1b[0m")
            
            finalLiveTideMSL = surflineDataRaw.data[0].tide.current.height;
            finalWaterTemp = surflineDataRaw.data[0].waterTemp.max;
            finalAirTemp = surflineDataRaw.data[0].weather.temperature;
            finalLiveWindSpeed = surflineDataRaw.data[0].wind.speed;

            if(surflineDataRaw.data[0].tide.next.type == "LOW")
            {
              // console.log("Next Tide: " + surflineDataRaw.data[0].tide.next.type)
              finalTideDir = false;
            }

            if(surflineDataRaw.data[0].tide.next.type == "HIGH")
            {
              // console.log("Next Tide: " + surflineDataRaw.data[0].tide.next.type)
              finalTideDir = true;
            }

          })

          
      
          return {
            wind: finalLiveWindSpeed,
            airTemp: finalAirTemp,
            waterTemp: finalWaterTemp,
            tideMSL: finalLiveTideMSL,
            tideRise: finalTideDir
          }

        },

      getWidgetWX: async() => {


        let finalNextTideTime = "null";

        //* Fetch Surfline Live Conditions Data
        await fetch(surflineBatchURL)
          .then((response) => {
            return response.json();
          })
          .then((surflineDataRaw) => {

            // console.log("Surfline Raw: " + JSON.stringify(surflineDataRaw))
            // console.log("Surfline Raw: " + JSON.stringify(surflineDataRaw.data[0].waterTemp.max))

            console.log("\x1b[36m\n ☎️  Surfline API Request ☎️\n       [getWidgetWX]\x1b[0m")
            
            finalTideMSL = surflineDataRaw.data[0].tide.current.height;
            finalNextTideType = surflineDataRaw.data[0].tide.next.type;

            // finalNextTideTime = new Date(surflineDataRaw.data[0].tide.next.timestamp).toTimeString();
            // finalNextTideTime = new Date(surflineDataRaw.data[0]);
            finalNextTideTime = new Date(surflineDataRaw.data[0].tide.next.timestamp * 1000);
            // finalNextTideTime = finalNextTideTime.toLocaleTimeString();
            finalNextTideHeight = surflineDataRaw.data[0].tide.next.height

            // console.log(surflineDataRaw.data[0].tide.next.timestamp);
            // console.log(finalNextTideTime);
            // console.log(finalNextTideTime.toTimeString());
            // console.log(finalNextTideTime.toLocaleTimeString());

            // finalNextTideTime = surflineDataRaw.data[0].tide.next.timestamp;

            finalSurfHeight56th = surflineDataRaw.data[2].waveHeight.min + "-" + surflineDataRaw.data[2].waveHeight.max;
            finalSurfHeight36th = surflineDataRaw.data[0].waveHeight.min + "-" + surflineDataRaw.data[0].waveHeight.max;
            finalSurfHeightBlackies = surflineDataRaw.data[3].waveHeight.min + "-" + surflineDataRaw.data[3].waveHeight.max;
            finalSurfHeightRiver = surflineDataRaw.data[1].waveHeight.min + "-" + surflineDataRaw.data[1].waveHeight.max;

            // console.log("Blackies Surf: " + finalSurfHeightBlackies);
            // console.log("36th Surf: " + finalSurfHeight36th);
            // console.log("56th Surf: " + finalSurfHeight56th);
            // console.log("River Jetties Surf: " + finalSurfHeightRiver);

            finalWaterTemp = surflineDataRaw.data[0].waterTemp.max;
            finalAirTemp = surflineDataRaw.data[0].weather.temperature;
            finalWind = surflineDataRaw.data[0].wind.speed;
            finalWindType = surflineDataRaw.data[0].wind.directionType;
            

            if(surflineDataRaw.data[0].tide.next.type == "LOW")
            {
              // console.log("Next Tide: " + surflineDataRaw.data[0].tide.next.type)
              finalTideDir = false;
            }

            if(surflineDataRaw.data[0].tide.next.type == "HIGH")
            {
              // console.log("Next Tide: " + surflineDataRaw.data[0].tide.next.type)
              finalTideDir = true;
            }

          })

          return {
            wind: finalWind,
            windType: finalWindType,
            airTemp: finalAirTemp,
            waterTemp: finalWaterTemp,
            tideMSL: finalTideMSL,
            tideRise: finalTideDir,
            nextTideType: finalNextTideType,
            nextTideHeight: finalNextTideHeight,
            nextTideTime: finalNextTideTime.toLocaleTimeString(),
            surfHeight36th: finalSurfHeight36th,
            surfHeight56th: finalSurfHeight56th,
            surfHeightBlackies: finalSurfHeightBlackies,
            surfHeightRiver: finalSurfHeightRiver,
          }



      },
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