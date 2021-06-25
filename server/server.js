// code to run the production build on heroku
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(public, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});