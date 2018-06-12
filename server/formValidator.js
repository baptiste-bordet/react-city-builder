const request = require('request');

const stringValidation = (value, field) => {
    if (!value) {
        return {[field]: 'Le ' + field + ' est obligatoire'};
    } else if (!value.match(/^[a-zA-Zàâéèëêïîôùüçœ\'’ -]{1,60}$/)) {
        return {[field]: 'Le ' + field + ' n\'est pas valide'};
    }

    return null;
};

const emailValidation = (value) => {
    if (!value) {
        return {email: 'L\'email est obligatoire'};
    } else if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return {email: 'L\'email n\'est pas valide'};
    }

    return null;
};

const isEmpty = (obj) => {
    for (var key in obj) {
        console.log(key);

        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

module.exports = {

    validate: (form) => {

        return new Promise((resolve, reject) => {

            const nomError = stringValidation(form.nom, 'nom');
            const emailError = emailValidation(form.email);

            const errors = Object.assign({}, nomError, emailError);

            if (!isEmpty(errors)) {
                resolve(errors);
            } else {
                resolve();
            }
        }).catch((e) => {
            console.error('ERROR : ' + e);
        });

    },

    recaptchaValidation: function(response) {

        return new Promise((resolve, reject) => {
            request.post({
                url: 'https://www.google.com/recaptcha/api/siteverify',
                form: {
                    secret: '6Ldnpl0UAAAAAB9SIRmfDyaUUfZ528FxvdGx6d_R',
                    response: response
                }
            }, (err, httpResponse, body) => {
                const info = body ? JSON.parse(body) : '';

                if (!info.success) {

                    console.log('err = ' + err);

                    resolve({'captcha': 'Le captcha n\'est pas valide'});
                } else {
                    resolve();
                }
            });
        }).catch((e) => {
            console.error('ERROR : ' + e);
        });
    },

    isEmpty: isEmpty
};