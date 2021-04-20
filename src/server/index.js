var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const MeaningCloud = require('meaning-cloud');
const fetch = require('node-fetch')

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

const dotenv = require('dotenv');
dotenv.config()

var textapi = new MeaningCloud({
  key: "process.env.API_KEY"
});
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

app.post("/test", async(req,req) => {
  console.log(req.body.formURL)
  const apiData = await fetch(baseURL+process.env.API_KEY+'&lang=en&txt='+req.body.formURL, {
    method: 'POST'
  });

  try {
    const data = await apiData.json()
    console.log('apiData +++++> ', data)
    res.send(data);
  } catch (err) {
    console.log("error", err)
  }
});
