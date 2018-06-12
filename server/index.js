const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const FormValidator = require('./formValidator');

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

app.post('/api/contact', function (req, res) {

    console.log('request = ' + JSON.stringify(req.body));

    if (!req.body || !req.body.data) {
        handleError(res, "Invalid form data", "Must provide valid data", 400);
    }

    const form = req.body.data,
        captchaResponse = req.body.data.captcha,
        captchaPromise = FormValidator.recaptchaValidation(captchaResponse),
        formPromise = FormValidator.validate(form);

    Promise.all([captchaPromise, formPromise]).then(errors => {

        const allErrors = Object.assign({}, errors[0], errors[1]);

        if (!FormValidator.isEmpty(allErrors)) {
            res.send(allErrors);
        } else {
            MailUtils.sendEmail(form).then(() => {
                res.send({});
            }).catch((err) => {
                res.send(err);
            });
        }

    }).catch((e) => {
        console.error('ERROR : ' + e);
    });

});

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => console.log('Server started on port ' + PORT));

function handleError(res, reason, message, code) {
    console.log("ERROR : " + reason);
    res.status(code || 500).json({"error": message});
}