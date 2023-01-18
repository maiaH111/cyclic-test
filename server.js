
/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Maia Hakimi Student ID: 187568217 Date: January 17, 2023
*
*  Online (Cyclic) URL:
 https://victorious-blue-wombat.cyclic.app/
*
********************************************************************************/ 
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Maia Hakimi 187568217");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
// https://embarrassed-bull-buckle.cyclic.app