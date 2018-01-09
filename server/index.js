const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-project/build')));

// Answer API requests.
app.get('/api/test', (req, res) => res.send({"world": "World"}));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-project/build', 'index.html'));
});

app.listen(PORT, () => console.log('Server started on port ' + PORT));