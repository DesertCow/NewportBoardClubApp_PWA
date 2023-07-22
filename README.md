<div align="center">
<h1>The Board Club App</h1>
 <p align="center">
  <img src="./Dev_Docs/Art/BOARD_CLUB_LOGO_1.jpg" width="350" height="250" alt="Demo 1")
</p>
<h4>An application designed to allow members of the board club to view current surf/weather conditions, club events, log surf sessions, view surf tips, rental information, and general information about the club.</h4>
</div>

<br>
<br>

## Table-of-Contents

* [Deployment](#deployment)
* [Goal](#description)
* [Features](#features)
* [Installation](#installation)
* [Wireframe](#wireframe)
* [Technology](#technology)
* [Demo](#demo)



<br>

## [Goals](#table-of-contents)

The goal of this application to make members want to go surf by providing them with the all the infomation they need to have a great surf session. The app easily shows the current surf and weather conditons. Events are displayed to make it easy for memebers to get information they need to attend upcoming events. The Surf Log allow memebers to keep a log of all their surf sessions to track their progression and review previous sessions when selecting a surf spot or board for their next session. Surf hacks are listed to help new members with common surf problems. The Newport Surf map helps members easily pick the best spot to go surfing while visiting the club house based on  a variety of factors and conditions. The comminity forum helps memebers find other memebrs to surf with and also to interact memebers to build a sense of community.

<br>
<br>

## [Features](#table-of-contents)

<br>

* ~~Surfboard Database :surfer:~~
  * ~~Description~~
  * ~~Specs~~
  * ~~MFG Link~~
  * ~~Photos~~
  * ~~Comments/Feedback~~
  * ~~Rating~~

<br>

* Rental Infromation 🧾
  * Equipment
  * Prices / Hours

<br>

* Events Page :confetti_ball:
  * Upcoming Events
  * Previous Events
  * Calender View

<br>

* About :question:
  * General Club Info
  * ~~Shaper Info/Links/Deals~~
  * ~~Club Press~~

<br>

* Surf Diary :open_book:
  * Log Each Surf Session
  * Review previous surf Sessions
  * Track surf progression

<br>

* Live WX :partly_sunny:
  * Water Temp
  * Tempeture
  * Wind
  * Sky Conditions
  * Popup/Overlay Widget

<br>

* Surf Resources :open_book:
  * ~~Beginner Videos~~
  * ~~Equipment Tips~~
  * Surf Hacks
  * Local Surf Spots Beta
  * Newport Surf Map


<br>

* Push Notification :loudspeaker:
  * Surfboard Overdue
  * New Surfboards
  * Upcoming Events
  * Swell / Conditions

<br>

* Features Pushed to React Native Version :iphone:
  * Push Notification
  * Member Forum
 
<br>
<br>

## [Installation](#table-of-contents)

* Server/API
```
    1) npm run buildServer
    2) npm run startServer
  ```

<br>

* Client
  ```
  1) npm run buildClient
  2) npm run startClientServe
  ```
<br>
<br>

## [Wireframe](#table-of-contents)

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Home_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Home Page</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Club_Events_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Club Events</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Surf_Log_Home.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Surf Log</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Rental_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Rental Page</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Surf_Knowledge_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Surf Knowledge</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/About_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>About Page</strong></p>
</p>

<br>
<br>

## [Technology](#table-of-contents)

* <h3> Software Stack </h3>

 * **Databases**
   * MongoDB (non-relational)
      * User
      * Events
      * Surf Sessions
      * Surf Hacks
      * Surfboard Shapers

<br>

  * **Server** (Node 18.6.0)
    * Packages
      * @apollo/server (4.7.4)
      * @aws-sdk/credential-providers (3.369.0)
      * @aws-sdk/hash-node (3.369.0)
      * @aws-sdk/protocol-http (3.369.0)
      * @aws-sdk/s3-request-presigner (3.369.0)
      * @aws-sdk/url-parser (3.369.0)
      * @aws-sdk/util-format-url(3.369.0)
      * aws-sdk (2.1414.0)
      * bcrypt (5.1.0)
      * body-parser (1.20.2)
      * cors (2.8.5)
      * dotenv (16.3.1)
      * express (4.18.2)
      * graphql (16.6.0)
      * graphql-http (1.19.0)
      * json (11.0.0)
      * jsonwebtoken (9.0.0)
      * mongodb (5.6.0)
      * mongoose (7.3.0)
      * node-fetch (2.6.11)
      * react (18.2.0)

<br>

  * **Client** (React 18.2.0)
    * Packages
      * @apollo/client (3.7.15)
      * @emotion/react (11.11.1)
      * @emotion/styled (11.11.0)
      * @mui/material (5.13.6)
      * @mui/styled-engine-sc (5.12.0)
      * @mui/x-date-pickers (6.9.1)
      * @popperjs/core (2.11.8)
      * bootstrap (5.3.0)
      * dayjs (1.11.9)
      * interweave (13.1.0)
      * jquery (3.7.0)
      * jwt-decode (3.1.2)
      * react (18.2.0)
      * react-bootstrap (2.7.4)
      * react-dom (18.2.0)
      * react-material-symbols (4.1.1)
      * react-popper (2.3.0)
      * react-pro-sidebar (1.1.0-alpha.1)
      * react-router-dom (6.12.1)
      * react-scripts (5.0.1)
      * react-select-datepicker (2.1.2)
      * react-spinners (0.13.8)
      * react-switch (7.0.0)
      * react-time-picker (6.2.0)
      * styled-components (5.3.11)

<br>

* <h3> Hardware/Deploy </h3>

  * Railway (Database)
    * MongoDB
  * Railway (Host)
    * Client: https://boardclubapp-production.up.railway.app/
    * API: https://boardclubapp-production-api.up.railway.app/
  * GitHub (Verison Control)
    * https://github.com/DesertCow/boardClubApp
  * AWS (S3)
    * US West 1

<br>
<br>

## [Demo](#table-of-contents)

 <p align="center">
  <img src="./Dev_Docs/Art/Technical_Difficulties.png" width="774" height="486" alt="Demo 1"/img>
</p>

<br>
<br>