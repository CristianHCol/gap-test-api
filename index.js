const exc = require('./src/server/');
const app = require('./package.json');

exc((err, server) => {
    if (err) {
        throw err;
    }

    server.start(error => {
        if (error) {
            server.log('Error starting the server', error);
        }

        const connection = server.select(['api']);
        server.log(['info', app.name], `started at: ${connection.info.uri}`);
    });
});
