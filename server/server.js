// #####################################################################
// 
// Authorization server to support the food truck application
//
// Clayton Skaggs Oct 2022
// 
// ---------------------------------------------------------------------

const { ApolloServer, gql } = require("@apollo/server");
const express = require("express");


//* Create Base "App"
const app = express();

//* Apply Configuration to App
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


console.log("\nServer Import Complete")
//  console.log("\n~~~       Server Status       ~~~")
















console.log("\n\x1b[32m=======================\x1b")
console.log("\x1b[32m= ~~~ CLEAN EXIT! ~~~ =\x1b")
console.log("\x1b[32m=======================\x1b\n")
