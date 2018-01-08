const express = require('express');
const app = express();

app.get('/api/test', (req, res) => res.send({"test": "Hello World"}));

app.listen(3001, () => console.log('Server started on port 3001'));