const Confidence = require('confidence');
const config = require('./config');
const ssl = require('./ssl');

const manifest = {
    $meta: 'services for event management.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        },
        
    },
    connections: [{
        host: config.get('/host/api'),
        port: config.get('/port/api'),
        labels: ['api'],
         routes: {
            cors: {
                origin: ['*']
            }
        },
        tls: ssl.tls
    }],
    registrations: [
        {
            plugin: 'blipp'
        },
        {
            plugin: 'inert'
        },
        {
            plugin: 'vision'
        },
        {
            plugin: 'scooter'
        },
        {
            plugin: 'hapi-swagger'
        },
        {
            plugin: {
                register: 'good',
                options: {
                    ops: {
                        interval: 5000
                    },
                    reporters: config.get('/good/reporters')
                }
            }
        },
        {
            plugin: 'hapi-info'
        },
        {
            plugin: {
                register: './loader',
                options: config.get('/loader')
            }

        },
        {
            plugin: {
                register: './mongo-connection',
                options: config.get('/mongo')
            }
    },
    {
            plugin: {
                register: `${process.cwd()}/src/server/routes/example`
            }, 
            options: {
            routes: {
                prefix: `/api/${process.env.VERSIONAPI}`
            }
        }

        }],


};

module.exports = new Confidence.Store(manifest);
