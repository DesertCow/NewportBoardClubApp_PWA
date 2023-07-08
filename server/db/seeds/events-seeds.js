//* Event Seeding File
//*

const mongoose = require('mongoose');
const EventMongo = require('../../models/EventMongo');


 const EventsSeed = [

  { 
    eventName: "STAB in the Dark at The Board Club",
    eventSlogan: "Win Italo Ferreira's Surfboard!",  
    eventDate: "5-27-23",
    eventDescription: "Don't miss this one! The Board Club has partnered with Billabong and STAB in the Dark to show their final episode featuring Italo Ferreira. There will be giveaways for wetsuits, T-shirts, hats, and all kinds of awesome gear. But most importantly, Italo Ferreira's surfboards from the show will be here at the club for you to check out and one of them will be raffled off to a Board Club member in attendance! I'm serious, you can win Italo's board. Free food and beverages. All ages welcome. Bring your friends and family for an awesome night.",
    eventPhotoURL: "https://theboardclubevents.s3.us-west-1.amazonaws.com/Stab_In_The_Dark.jpg",
    eventLength: "3",
    eventCurrent: false
  },
  { 
    eventName: "SOLID Surfboards Demo Day",
    eventSlogan: "Come on out and demo some awsome surfboards!",  
    eventDate: "5-15-23",
    eventDescription: "Swing by the club to demo a wide selection of SOLID surfboards.",
    eventPhotoURL: "https://theboardclubevents.s3.us-west-1.amazonaws.com/Solid_Surf_Demo_Day.jpg",
    eventLength: "6",
    eventCurrent: false
  },
  {  
    eventName: "Ben Did Go 8.0",
    eventSlogan: "Information Meeting",  
    eventDate: "5-25-23",
    eventDescription: "Required meeting for all those who want to participate in the BEN DID GO 8.0 prone paddleboard event. ",
    eventPhotoURL: "https://theboardclubevents.s3.us-west-1.amazonaws.com/BenDidGo8p0.jpg",
    eventLength: "2",
    eventCurrent: false
  },
  {  
    eventName: "Surf Coaching with Spencer Pirdy",
    eventSlogan: "Surf Coaching",  
    eventDate: "5-25-23",
    eventDescription: "This is for anyone looking to improve their surfing. Spencer helps surfers at all levels improve technique, increase wave count, improve paddling efficiency, overall fitness, and comfortability in the lineup.",
    eventPhotoURL: "https://theboardclubevents.s3.us-west-1.amazonaws.com/Spencer%2BPirdy.jpeg",
    eventLength: "2",
    eventCurrent: true
  },
  {  
    eventName: "Summer Kickoff Art Fair",
    eventSlogan: "Support Your Local Artisans",  
    eventDate: "6-24-23",
    eventDescription: "It's slowly starting to feel like Summer and everyone will be looking for fun things to do so we're hosting another Art Fair!  Come check out the different artwork, photography, jewelry, succulents and other cool stuff from your locals artisans.",
    eventPhotoURL: "https://theboardclubevents.s3.us-west-1.amazonaws.com/SummerArtFair.jpg",
    eventLength: "4",
    eventCurrent: true
  },

 ];

 const seedEventDB = async () => {
  // console.log("seedEventDB Function Start!")
  await EventMongo.deleteMany({});
  await EventMongo.insertMany(EventsSeed);
 };

 module.exports = seedEventDB;

 //!========================= EOF =========================