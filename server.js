// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/*Dependencies*/
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, () => {
    console.log(`localhost: ${port}`);
});

//Callback function to complete GET '/all'
app.get('/all',(request, response) => {
    response.send(projectData);
});

//POST Method
app.post('/',(request, response) => {
    const data = request.body;
    projectData["date"] = data.date;
    projectData["name"] = data.name;
    projectData["temp"] = data.temp;
    projectData["content"] = data.content;
    response.send(projectData);
});
