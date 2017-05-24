const fs = require('fs');

const config = module.exports = {};

config.tls = {
   
    key: fs.readFileSync(`${process.cwd()}/src/server/ssl/certs/server-key.pem`, 'utf8'),
    cert: fs.readFileSync(`${process.cwd()}/src/server/ssl/certs/server-cert.pem`, 'utf8')
    // This is necessary only if using the client certificate authentication.
   // requestCert: true,
    // This is necessary only if the client uses the self-signed certificate.
    //ca: []
};
