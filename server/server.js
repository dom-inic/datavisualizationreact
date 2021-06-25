// // code to run the production build on heroku
// const path = require('path');
// const express = require('express');
// const app = express();
// // const publicPath = path.join(public, '..', 'public');
// const port = process.env.PORT || 3000;
// // app.use(express.static(publicPath));
// // app.get('*', (req, res) => {
// //    res.sendFile(path.join(publicPath, 'index.html'));
// // });
// // add middleware
// app.use(express.static("public"));
// app.listen(port, () => {
//    console.log('Server is up!');
// });


const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});