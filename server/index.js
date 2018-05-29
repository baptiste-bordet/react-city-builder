const bodyParser = require('body-parser');
const express = require('express');
const session = require("express-session");
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const PORT = process.env.PORT || 5000;

const userRef = {
    id: 325,
    username: 'hello',
    password: 'world'
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../app/build')));
app.use(session({
    cookie : {
        maxAge: 36000000000,
        secure: false
    },
    secret: "cats"
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.get('/api/test', (req, res) => res.send({"world": "World"}));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

// https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(err, userRef);
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        if (username != userRef.username) {
            console.log('Incorrect username.');
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (password != userRef.password) {
            console.log('Incorrect password.');
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, userRef);
    }
));

app.post('/api/login', passport.authenticate('local', { session: true }), function(req, res) {
    console.log('OK');
    res.send({});
});

// app.post('/api/login', function(req, res) {
//
//     const user = {
//         username: req.username,
//         password: req.password
//     };
//
//     req.login(user, {}, function(err) {
//         if (err) {
//             return res.send({error: err});
//         }
//
//         return res.send({connected: true});
//     });
//
// });

app.listen(PORT, () => console.log('Server started on port ' + PORT));

function handleError(res, reason, message, code) {
    console.log("ERROR : " + reason);
    res.status(code || 500).json({"error": message});
}