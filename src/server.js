const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.get('/api/test', (req, res) => res.send({"world": "World"}));

app.listen(port, () => console.log('Server started on port ' + port));