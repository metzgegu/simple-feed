const express = require('express')
const app = express()
const request = require('request')
const path = require('path');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

const API_URL = 'https://api.wizbii.com/v1'

app.get('/account/validate', function (req, res) {
  const CLIENT_ID = 'test'

  const formData = {
    grant_type: 'password',
    username: 'decouverte+2@wizbii.com',
    password: 'decouverte',
    client_id: CLIENT_ID
  }

  request.post({url: `${API_URL}/account/validate`, formData: formData}, function optionalCallback(err, httpResponse, body) {
    if (err) {
      console.error('Auth failed:', err);
      res.send(err)
    }
    console.log('Auth asked : Server responded with:', body);
    res.send(body)
  });
})

app.get('/dashboard', function (req, res) {
  const accessToken = req.query.accessToken;

  const API_URL = 'https://api.wizbii.com/v2'

  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    'content-type': 'application/json',
    body: '{}',
    url: `${API_URL}/dashboard/?direction=newest`,
  };

  request.post(options, function optionalCallback(err, httpResponse, body) {
    if (err) {
      console.error('Auth failed:', err);
      res.send(err)
    }
    console.log('Auth asked : Server responded with:', body);
    res.send(body)
  });
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

// app.use('/static', express.static(__dirname + '../frontend/dist'))
//
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
//   res.sendFile(path.join(__dirname, '../frontend/dist/index.js'));
// });
app.use(express.static(path.join(__dirname, '../frontend/dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/', 'index.html'));
});