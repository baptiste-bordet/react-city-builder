const bodyParser = require('body-parser');
const express = require('express');
// const session = require("express-session");
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const BasicStrategy = require('passport-http').BasicStrategy;

// **********************************************************
//      Create express app
// **********************************************************

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../app/build')));
// app.use(session({
//     cookie : {
//         maxAge: 36000000000,
//         secure: false
//     },
//     secret: "cats"
// }));

// **********************************************************
//      Authentification config
// **********************************************************

const userRef = {
    id: 325,
    username: 'hello',
    password: '486EA46224D1BB4FB680F34F7C9AD96A8F24EC88BE73EA8E5A6C65260E9CB8A7'
};

app.use(flash());
app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(err, userRef);
});

passport.use(new BasicStrategy(
    function(username, password, done) {
        if (username != userRef.username) {
            console.log('Incorrect username.');
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (password.toUpperCase() != userRef.password) {
            console.log('Incorrect password.');
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, userRef);
    }
));

// **********************************************************
//      Serve api
// **********************************************************

app.get('/api/test', (req, res) => res.send({"world": "World"}));

app.get('/api/login', passport.authenticate('basic', { session: false }), function(req, res) {
    console.log('   ---> ' + JSON.stringify(req.user) + ' connected');
    res.send({});
});

app.get('/api/user/data', passport.authenticate('basic', { session: false }), function(req, res) {
    res.json({ user: req.user });
});

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

// https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
// https://stackoverflow.com/questions/14572600/passport-js-restful-auth

app.post('/api/login', passport.authenticate('basic', { session: false }), function(req, res) {
    console.log('OK');
    res.send({});
});


app.listen(PORT, () => console.log('Server started on port ' + PORT));

function handleError(res, reason, message, code) {
    console.log("ERROR : " + reason);
    res.status(code || 500).json({"error": message});
}