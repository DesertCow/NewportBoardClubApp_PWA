
var AWS = require('aws-sdk');
// import { parseUrl } from "@aws-sdk/url-parser";
// var { parseUrl } = require('@aws-sdk/url-parser');
// var { formatUrl } = require('@aws-sdk/util-format-url');
// var { S3RequestPresigner } = require("@aws-sdk/s3-request-presigner");
// var { fromIni } = require("@aws-sdk/credential-providers");
// var { Hash } = require("@aws-sdk/hash-node");
// var { HttpRequest } = require('@aws-sdk/protocol-http');

// const defaultProfilePictureFile = require("../../asset/Default_Profile.jpg");
const fs = require('fs');
const path = require('node:path');

// fs.readFile('../../asset/Default_Profile.jpg', 'utf8' ,function(err, data)){

// }



//* Models for MongoDB 
const UserMongo = require('../../models/UserMongo');
const EventMongo = require('../../models/EventMongo');
const SurfSessionMongo = require('../../models/SurfSession');

//* SQL Connection
// const sequelize = require('../sqlConnection');

//* Auth Tools
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { signToken } = require('../../utils/auth');

// const { useState, useEffect } = require("react");
const fetch = require("node-fetch");
const { response } = require("express");

let previousTide = "null";
let tideRising = "false";

//* API URLs
let surfline36thURL = "https://services.surfline.com/kbyg/spots/batch?cacheEnabled=true&units%5BswellHeight%5D=FT&units%5Btemperature%5D=F&units%5BtideHeight%5D=FT&units%5BwaveHeight%5D=FT&units%5BwindSpeed%5D=MPH&spotIds=5842041f4e65fad6a770882a";
let surflineBatchURL = "https://services.surfline.com/kbyg/spots/batch?cacheEnabled=true&units%5BswellHeight%5D=FT&units%5Btemperature%5D=F&units%5BtideHeight%5D=FT&units%5BwaveHeight%5D=FT&units%5BwindSpeed%5D=MPH&spotIds=584204204e65fad6a7709115%2C5842041f4e65fad6a770882a%2C5842041f4e65fad6a7708e54%2C5842041f4e65fad6a77088ee";
let realTimeData = "https://api.weather.com/v2/pws/observations/current?stationId=KCANEWPO204&format=json&units=e&apiKey=f157bb453d9d4a5997bb453d9d9a59af";


//* AWS Config (Get from ENV later...)
var userProfileBucket = "theboardclubprofilepictures";
// var userProfileBucket = "theboardclubevents";
var bucketRegion = "us-west-1";
var poolId = "us-west-1:1b2d3ad5-d56a-4b99-b141-18d6c6451a4f";
const URL_EXPIRATION_SECONDS = 300

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: poolId
  })
});

// AWS.config.region = 'us-west-1'; // Region

// var credentials = {
//   accessKeyId: process.env.S3_ACCESS_KEY,
//   secretAccessKey : process.env.S3_SECRET_KEY
// };

// AWS.config.credentials = 

// AWS.config.update({credentials: credentials, region: 'us-west-1'});

// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-west-1:1b2d3ad5-d56a-4b99-b141-18d6c6451a4f',
// });

// console.log(process.env.S3_ACCESS_KEY)



var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  signatureVersion: 'v4',
  params: { Bucket: userProfileBucket }
});


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
            // finalAirTemp = surflineDataRaw.data[0].weather.temperature;
            // finalLiveWindSpeed = surflineDataRaw.data[0].wind.speed;

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

          //* Fetch Real-Time Wind/Tempeture (Weather Undergound)
          await fetch(realTimeData)
            .then((response) => {
              return response.json();
            })
            .then((realTimeData) => {

              // console.log("Temperature (Real-Time): " + JSON.stringify(realTimeData.observations[0].imperial.temp))
              // console.log("Wind (Real-Time): " + JSON.stringify(realTimeData.observations[0].imperial.windSpeed))
              // console.log("UV (Real-Time): " + JSON.stringify(realTimeData.observations[0].solarRadiation))
              
              // finalLiveWindSpeed = realTimeData.observations[0].imperial.windSpeed;
              finalLiveWindSpeed = realTimeData.observations[0].imperial.windGust;
              finalAirTemp = realTimeData.observations[0].imperial.temp;
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
            // finalAirTemp = surflineDataRaw.data[0].weather.temperature;
            // finalWind = surflineDataRaw.data[0].wind.speed;
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

          //* Fetch Real-Time Wind/Tempeture (Weather Undergound)
          await fetch(realTimeData)
            .then((response) => {
              return response.json();
            })
            .then((realTimeData) => {

              // console.log("Temperature (Real-Time): " + JSON.stringify(realTimeData.observations[0].imperial.temp))
              // console.log("Wind (Real-Time): " + JSON.stringify(realTimeData.observations[0].imperial.windSpeed))
              // console.log("UV (Real-Time): " + JSON.stringify(realTimeData.observations[0].solarRadiation))
              
              // finalLiveWindSpeed = realTimeData.observations[0].imperial.windSpeed;
              finalWind = realTimeData.observations[0].imperial.windGust;
              finalAirTemp = realTimeData.observations[0].imperial.temp;
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
      getCurrentEvents: async() => {

        // var currentEventList = [];
        
        const currentEvents = await EventMongo.find({ eventCurrent: true });

        console.log(" ~~ Current Event Count = \x1b[31m" + currentEvents.length + "  \x1b[0m~~")

        //* Return List Of Current Events
        // console.log(currentEvents)

        return currentEvents
      },

      getPreviousEvents: async() => {

        var previousEventList = [];
        
        const previousEvents = await EventMongo.find({ eventCurrent: false });

        console.log(" ~~ Current Event Count = \x1b[31m" + previousEvents.length + "  \x1b[0m~~")
        
        //* Return List Of History Events
        return previousEvents
      },

      getEvent: async (parent, { eventID }) => {

        // var requestedEventList

        const requestedEvent = await EventMongo.findOne({_id: eventID})

        console.log("   \x1b[33mEvent Requested (" + eventID + ")\x1b[0m")
        console.log(requestedEvent);

        return requestedEvent

      },
      getAllUsersSurfSession: async (parent, { userID }) => {
        
        // console.log("UserID: " + userID)
        
        const allUserSurfSessions = await SurfSessionMongo.find({userID: userID})

        return allUserSurfSessions
      },
      getSurfSession: async (parent, { sessionID }) => {

        console.log("Requested Session ID: " + sessionID);

        const requestedSession = await SurfSessionMongo.findOne({_id: sessionID});

        return requestedSession;

      },
      uploadUserProfilePicture: async (parent, { userID }) => {

        // let secureS3url = "-------SECURE URL LINK-------";

        console.log("\n   \x1b[33mUser (" + userID +") Has Requested Upload URL\x1b[0m");




        //* Request S3 for upload URL

        // var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'IDENTITY_POOL_ID'});
        // var myConfig = new AWS.Config({
        //   credentials: myCredentials, region: 'us-west-2'
        // });

        // s3.listObjects({ Delimiter: "/" }, function(err, data) {

        //   console.log(data)

        // })

        const profileUploadFileName = userID + ".jpg";

        console.log("Filename = " + profileUploadFileName) 

        // const noClientUrl = await createPresignedUrlWithoutClient({
        //   region: bucketRegion,
        //   bucket: userProfileBucket,
        //   key: profileUploadFileName,
        // });

        // const requestedSession = await SurfSessionMongo.findOne({_id: sessionID});
        
        const s3Params = {
          // Bucket: process.env.UploadBucket,
          Bucket: userProfileBucket,
          Key: profileUploadFileName,
          Expires: URL_EXPIRATION_SECONDS,
          ContentType: 'image/jpeg'
        }

        // console.log("\n   Generate secure URL with file name \n   " + userID + ".jpeg" );
        const uploadURL = await s3.getSignedUrlPromise('putObject', s3Params)
        // return requestedSession;
        // return uploadURL;
          return JSON.stringify({
            uploadURL: uploadURL
            // Key: profileUploadFileName
          })

      },
      uploadUserDefaultProfilePicture: async (parent, { userID }) => {
      
        //* Generate File Name based off UserID
        const fileKey = userID + ".jpg";

        //* Create FULL path to load default picture
        let defaultProfilePicturePath = path.join(path.dirname(require.main.filename),"/assets/Default_Profile.jpg");

        //* Replace backslash(s) in path to forwardslash(s)
        defaultProfilePicturePath = defaultProfilePicturePath.replace(/\\/g, '/');

        //* Load Default Profile Picture
        const defaultProfilePictureFile = fs.readFileSync(defaultProfilePicturePath);

        console.log("\n   \x1b[32mNew Account (" + userID +") Has Been Created!\x1b[0m");
        console.log("   \x1b[33mUploading Default Profile Picture as (" + fileKey + ")\x1b[0m");

        const s3Params = {
          Bucket: userProfileBucket,
          Key: fileKey,
          Body: defaultProfilePictureFile
        }

        await s3.upload(s3Params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log("\x1b[32m   File " + fileKey + " successfully uploaded.\n   \x1b[33m" + data.Location + "\x1b[0m");
        return data.Location;
        });

      //  console.log(uploadURL);
        return "Upload Successfully!";
      }
    },

  Mutation: {
    createUser: async (parent, { memberEmail, password, clubPassword, memberFirstName, memberLastName }) => {

      console.log("\n\x1b[33mCreate New User (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m\n   Club Password: \x1b[35m" + clubPassword + "\x1b[0m\n   Email: " + memberEmail + "\x1b[0m\n   Name: " + memberFirstName + " " + memberLastName);

      //* Request Database create a new "User"
      const user = await UserMongo.create({ memberEmail, password, clubPassword, memberFirstName, memberLastName });

      //TODO: Enable way to print this when it fails...
      //console.log("\x1b[35mAccount Creation Failed: Email already associated with an account \x1b[0m");


      // console.log(user)
      //* Sign/Generate JWT Token
      const token = signToken(user);

      console.log("\x1b[32mAccount Creation Successful\x1b[0m");

      //* Return Token to User
      return { token };

    },
    login: async (parent, { memberEmail, password }) => {

      var loginValid = false;

      console.log("\n\x1b[33mLogin Request\x1b[0m\n   Email: \x1b[33m" + memberEmail + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m")

      //* Query Database for user based off provided "email"
      const user = await UserMongo.findOne({ memberEmail });

      // console.log("USER = " + user)

      //* Validate User Exists
      if (user == null) {
        // throw new AuthenticationError('No profile with this email found!');
        console.log('   \x1b[35mEmail Not Found!\x1b[0m');
        console.log("   \x1b[35mLogin Failed!\x1b[0m")
      }

      //* Validate Password via "isCorrectPassword" method
      const correctPw = await user.isCorrectPassword(password);

      // console.log("Correct Password = " + correctPw)

      //* Error for incorrect password
      if (!correctPw) {
        console.log("\x1b[35mLogin Failed\x1b[0m")
        loginValid = false;
        throw new AuthenticationError('Incorrect password!');
      }

      if(correctPw)
      {
        console.log("\x1b[32m   Login Successful\x1b[0m\n");
        loginValid = true;
      }
      //* Logic to check for admin status

      // console.log("ADMIN ENV EMAIL")
      // console.log(process.env.ADMIN_ACCOUNT)

      let admin = false

      if (process.env.ADMIN_ACCOUNT == memberEmail) {
        console.log("\n========================================")
        console.log("=\x1b[31m    WARNING ADMIN LOG IN DETECTED!\x1b[0m    =")
        console.log("========================================")
        admin = true
      }
      else {
        admin = false
      }

      // console.log("USER = " + user);
      
      //* Return Signed Token to User
      const token = signToken(user);
      // return { token, user, admin };
      return { token, admin };
    },
    updateEmail: async (parent, { memberEmail, _id }) => {

      //TODO: Confirm new email does not already exists in DB
      //TODO: Add Try/Catch logic to print failed update to console
      console.log("\n\x1b[33mUpdate User Email (MongoDB)\x1b[0m\n\x1b[0m\n   Email: \x1b[35m" + memberEmail + "\n\x1b[0m   ID: \x1b[35m" + _id);

      await UserMongo.updateOne({ _id: _id }, { $set: { memberEmail: memberEmail } })

      console.log("\x1b[32m   Email Update Successful\x1b[0m\n");

      //* Get updated user data from DB via Email
      const user = await UserMongo.findOne({ memberEmail });

      let admin = false

      if (process.env.ADMIN_ACCOUNT == memberEmail) {
        console.log("\n========================================")
        console.log("=\x1b[31m    WARNING ADMIN LOG IN DETECTED!\x1b[0m    =")
        console.log("========================================")
        admin = true
      }
      else {
        admin = false
      }

      //* Return Signed Token to User
      const token = signToken(user);
      return { token, admin };

    },
    updatePassword: async (parent, { password, _id }) => {

      console.log("\n\x1b[33mUpdate User Password (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\n\x1b[0m   ID: \x1b[35m" + _id + "\x1b[0m");

      const user = await UserMongo.findOne({ _id });
      const hashword = await user.generateHash(password);


      //TODO: Add Try/Catch logic to print failed update to console
      await UserMongo.updateOne({ _id: _id }, { $set: { password: hashword } })

      console.log("\x1b[32m   Password Update Successful\x1b[0m\n");

      //* Get updated user data from DB via userID
      const updatedUser = await UserMongo.findOne({ _id });

      //* Return Signed Token to User
      const token = signToken(updatedUser);
      return { token };

    },
    updateName: async (parent, { memberFirstName, memberLastName, _id }) => {

      console.log("\n\x1b[33mUpdate User Name (MongoDB)\x1b[0m\n\x1b[0m\n  Name: \x1b[35m" + memberFirstName + " " + memberLastName + "\n\x1b[0m   ID: \x1b[35m" + _id);

      await UserMongo.updateOne({ _id: _id }, { $set: { memberFirstName: memberFirstName, memberLastName:memberLastName } })

      console.log("\x1b[32m   Name Update Successful\x1b[0m\n")

      //* Get updated user data from DB via userID
      const user = await UserMongo.findOne({ _id });

      //* Return Signed Token to User
      const token = signToken(user);
      return { token };

    },
    createEvent: async (parent, { eventName, eventSlogan, eventDate, eventLength, eventBody, eventPhotoURL, eventCurrent }) => {

      console.log("\n\x1b[33mCreate New Event (MongoDB)\x1b[0m\n\x1b[0m\n   Event Title: \x1b[35m" + eventName + "\x1b[0m\n   Event Date: \x1b[35m" + eventDate + "\x1b[0m\n   Event Length: " + eventLength + "\x1b[0m\n   Event Photo URL: " + eventPhotoURL);

      //* Request Database create a new "Event"
      const event = await EventMongo.create({ eventName, eventSlogan, eventDate, eventLength, eventBody, eventPhotoURL, eventCurrent });

      //TODO: Enable way to print this when it fails...
      //console.log("\x1b[35mEvent Creation Failed: \x1b[0m");

      console.log("\x1b[32mEvent Creation Successful\x1b[0m");
      // console.log(event)

      return event;
    },
    createSurfSession: async (parent, { userID, sessionDate, sessionTime, sessionLocation, skyConditions, waveSize, tideLevel, tideDirection, sessionLength, surfboardShaper, surfboardModel, surfboardLengthFT, surfboardLengthIN, surfboardVolume, surfboardFinConfig, sessionNotes, sessionRating  }) => {

      const surfSession = await SurfSessionMongo.create({ userID, sessionDate, sessionTime, sessionLocation, skyConditions, waveSize, tideLevel, tideDirection, sessionLength, surfboardShaper, surfboardModel, surfboardLengthFT, surfboardLengthIN, surfboardVolume, surfboardFinConfig, sessionNotes, sessionRating });

      console.log("\x1b[32m CREATE: [" + surfSession.sessionID + "] Surf Session\x1b[0m\n")

      return surfSession;
    },
    deleteSurfSession: async (parent, { sessionID }) => {

      const sessionDelete = await SurfSessionMongo.deleteOne({_id: sessionID});

      console.log("\x1b[31m DELETE: [" + sessionID + "] Surf Session\x1b[0m\n")

      return sessionID + " Surf Session Was Deleted Successfully!";
    }
  },

};

module.exports = resolvers;