'use strict';

module.exports = (server) => {
    server.route([
        {
            method: 'GET',
            path: '/example',
            config: {
                description: 'request example',
                notes: 'just example',
                tags: ['api'],
                pre: [
                    server.preHandlers.examplePre.examplePre
                ],
                handler: {
                    exampleHandler: { method: 'getrequestExampleHandler' }
                },
                plugins: {
                    'hapi-swagger': {
                        responses: {
                            200: {
                                description: 'OK: service is online'
                            },
                            404: {
                                description: 'NOT_FOUND: service is not working properly.'
                            },
                            500: {
                                description: 'INTERNAL_SERVER_ERROR: application is complete down.'
                            }
                        }
                    }
                }
            }
        },
        {
            method: 'GET',
            path: '/example2',
            config: {
                description: 'example 2',
                notes: 'another example',
                tags: ['api'],
                pre: [
                    server.preHandlers.examplePre.preStatus
                ],
                handler: {
                    exampleHandler: { method: 'exampleStatusHandler' }
                },
                plugins: {
                    'hapi-swagger': {
                        responses: {
                            200: {
                                description: 'OK: service is online'
                            },
                            404: {
                                description: 'NOT_FOUND: service is not working properly.'
                            },
                            500: {
                                description: 'INTERNAL_SERVER_ERROR: application is complete down.'
                            }
                        }
                    }
                }
            }
        }
    ]);
};
