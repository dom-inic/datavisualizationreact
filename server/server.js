// const path = require("path");
// const express = require("express");
// const app = express(); // create express app

// // add middlewares
// app.use(express.static(path.join(datavisualizationreact, "..", "build")));
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.join(datavisualizationreact, "..", "build", "index.html"));
// });

// // start express server on port 5000
// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });

// test code 2 working

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'build');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});