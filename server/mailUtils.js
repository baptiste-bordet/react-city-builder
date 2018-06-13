const nodemailer = require('nodemailer');

module.exports = {

    sendEmail: (form) => {

        let htmlContent = form.nom + '<br/>' +
            'email : ' + form.email + '<br/>' +
            'message : ' + form.message + '<br/>';

        const transporter = nodemailer.createTransport({
            host: 'smtp.baptistebordet.fr',
            port: 587,
            secure: false, // secure:true for port 465, secure:false for port 587
            auth: {
                user: 'contact@baptistebordet.fr',
                pass: 'azerty1234*'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: '"Site Baptiste Bordet" <contact@baptistebordet.fr>', // sender address
            to: 'contact@baptistebordet.fr', // list of receivers
            subject: 'Contact', // Subject line
            html: htmlContent // plain text body
        };

        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return reject(error);
                }

                return resolve();
            });
        }).catch((e) => {
            console.error('ERROR : ' + e);
        });
    }
};
