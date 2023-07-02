

const mongoose = require('mongoose');

const EventMongo = require('../../models/EventMongo');

//* DB Connection
const mongodb = require('../mongoConnection');

// mongoose.connect(mongodb)

 mongodb.once('open', () => {


 })

 const EventsSeed = [

  { 
    eventName: "STAB in the Dark at The Board Club",
    eventSlogan: "Win Italo Ferreira's Surfboard!",  
    eventDate: "5-27-23",
    eventDescription: "Don't miss this one! The Board Club has partnered with Billabong and STAB in the Dark to show their final episode featuring Italo Ferreira. There will be giveaways for wetsuits, T-shirts, hats, and all kinds of awesome gear. But most importantly, Italo Ferreira's surfboards from the show will be here at the club for you to check out and one of them will be raffled off to a Board Club member in attendance! I'm serious, you can win Italo's board. Free food and beverages. All ages welcome. Bring your friends and family for an awesome night.",
    eventPhotoURL: "www.google.com",
    eventLength: "3",
    eventCurrent: false
  },
  { 
    eventName: "SOLID Surfboards Demo Day",
    eventSlogan: "Come on out and demo some awsome surfboards!",  
    eventDate: "5-15-23",
    eventDescription: "Swing by the club to demo a wide selection of SOLID surfboards.",
    eventPhotoURL: "www.google.com",
    eventLength: "6",
    eventCurrent: false
  },
  {  
  eventName: "Ben Did Go 8.0",
  eventSlogan: "Information Meeting",  
  eventDate: "5-25-23",
  eventDescription: "Required meeting for all those who want to participate in the BEN DID GO 8.0 prone paddleboard event. ",
  eventPhotoURL: "www.google.com",
  eventLength: "2",
  eventCurrent: false
  },
  {  
  eventName: "Surf Coaching with Spencer Pirdy",
  eventSlogan: "Surf Coaching",  
  eventDate: "5-25-23",
  eventDescription: "This is for anyone looking to improve their surfing. Spencer helps surfers at all levels improve technique, increase wave count, improve paddling efficiency, overall fitness, and comfortability in the lineup.",
  eventPhotoURL: "https://lh3.googleusercontent.com/fife/APg5EOauZw7lvXwZwtJ5kOpgTW-vokz4xVC6WdrVbhHoA9uaO9qGt-vZ-636zyx5rb4cYRqNR6A8c5VWzU_rimYhCvF_2UDZAk9pW8seXzmvU-HfzSfSNG46hSGjIGfdJqh9MempQNIOKSmE7Du8NP3wYUIqzSXEoBuLi2F8z-4gf8V2W7GFiLVwFs9QaSdXiPYJ4GMaxIxMVl_-lp_GiHaB9a01cvN6nm7eknYDky4oESMSfCyam3-DYX3tDh18GIwxYyRlZDtPnHAIzsCcYBbrODbMJjseyFiMy4gZS2Hl1E0MHg22g5kLyqdq7CKHF-lj3MMD5b_rtpRAhJWtzqVzJkVa4woYv_PZsO0LN11vRmmcndbDa2RCxq4cYOYQsYz7tRSLqkmFw4m9s57Sk0ehEhiEAGOrMcbOFUME7XPuBOcf-A-0KQluJjETFjM_2GfxJjGHga8ZRQrhypnHeFBYfpQMkJrf2LhHw5JYxEBum8l7p5uC9tQVkuVyj9NI4NZTOOI_QyDIDUCmCBNon2RjmGjnMTw7mKr6vNRwONxav8Td0Hm4uWOrSps5d1zlRiVXwuKyU7ErQ5ADxjq4W-K1SBqWlCOzFKqz28StascNhZnSjzXthGd_MN9tv_rN3JP1sOVzrPJgPDy4ECUO90oOGRpagncj-BlXOWDnSw6D9qTx-2PqmYWaQFACRSSDK3NwKT30toL2beWpbqMbob_8KHaQnfAf7qEVNG6e0L34Ag-3wbUyPIfO82veHo2X_wACiz9H4vFsJyFjMvR5gYRt55BN4Cc9_RzhELhi_j8NS6jt0hrYPID7c5zkN8h68xNVJtCvSmMbGhmKwX86QDGpNyT2_HgEihxseeQXzpYsLHf-HcWrvheFXY8qBsAvEvjFUgbrRzZ-IzhuFsFIcOgTWLl7CI_4VgxoskBMWSJMQ37L9eRasZIbzMO09EeaTX4vpxgeIo7NcpykPbIW6U7iAqsa_bl15eM_KsMnKKAWo8iZMQvUVtnSBfGtM-V-LJ78Wt6SUA1vjrtl7pgeA0RJzxph8_FfydL3oKyeDSWeSb9asKeNic1mwS6Yxd5K9FJfE26OdoK0zsl_Fd8nP2-6rdPmQdE63oYzn8dtOurJ-fMUTNf3CoCdmyWFRBMH=w1937-h1152",
  eventLength: "2",
  eventCurrent: true
  },
  {  
  eventName: "Summer Kickoff Art Fair",
  eventSlogan: "Support Your Local Artisans",  
  eventDate: "6-24-23",
  eventDescription: "It's slowly starting to feel like Summer and everyone will be looking for fun things to do so we're hosting another Art Fair!  Come check out the different artwork, photography, jewelry, succulents and other cool stuff from your locals artisans.",
  eventPhotoURL: "../img/SummerArtFair.jpg",
  eventLength: "4",
  eventCurrent: true
  },

 ];

 const seedEventDB = async () => {
  await EventMongo.deleteMany({});
  await EventMongo.insertMany(EventsSeed);
 };

 seedEventDB().then(() =>{
  console.log('\n\x1b[43m ~~~ EVENTS SEEDED ~~~ \x1b[0m\n');
  // mongoose.connection.close();
 })