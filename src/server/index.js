const express = require("express");
const request = require("request");
const cors = require('cors')
require("dotenv").config();

const app = express();

app.use(cors())

app.get("/userData", function(req, res) {
  const auth_bearer = process.env.AUTH_BEARER
  const person_api_uri = process.env.PERSON_API_URI
  const person_id = process.env.PERSON_ID
  const authOptions = {
    url: person_api_uri + person_id,
    auth: {
      'bearer': auth_bearer
    }
  }
  request(authOptions, function(error, response, body) {
    res.send(body)
  })
});

app.get("/deviceData/:id", function(req, res) {
  const auth_bearer = process.env.AUTH_BEARER
  const device_api_uri = process.env.DEVICE_API_URI
  const device_id = req.params.id
  const authOptions = {
    url: device_api_uri + device_id,
    auth: {
      'bearer': auth_bearer
    }
  }
  request(authOptions, function(error, response, body) {
    res.send(body)
  })
});

const port = process.env.PORT || 8888
console.log(`Listening on port ${port}.`)
app.listen(port)