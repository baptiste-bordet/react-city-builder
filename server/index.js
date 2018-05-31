const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

// **********************************************************
//      Create express app
// **********************************************************

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../app/build')));


// **********************************************************
//      Serve api
// **********************************************************

app.get('/api/test', (req, res) => res.send({"world": "World"}));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => console.log('Server started on port ' + PORT));

function handleError(res, reason, message, code) {
    console.log("ERROR : " + reason);
    res.status(code || 500).json({"error": message});
}