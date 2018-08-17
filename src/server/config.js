'use strict';

const Confidence = require('confidence');
const project = require('../../package');

const config = {
    $meta: 'This file configures this project.',
    projectName: project.name,
    host: {
        api: {
            $filter: 'env',
            production: '0.0.0.0',
            $default: '0.0.0.0'
        }
    },
    port: {
        api: {
            $filter: 'env',
            test: 9191,
            $default: 9191
        }
    },
    good: {
        reporters: {
            $filter: 'env',
            $default: {
                console: [
                    {
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{ log: '*', response: '*' }]
                    },
                    {
                        module: 'good-console'
                    },
                    'stdout'
                ]
            },
            production: {
                file: [
                    {
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{ ops: '*' }]
                    },
                    {
                        module: 'good-squeeze',
                        name: 'SafeJson'
                    },
                    {
                        module: 'good-file',
                        args: [`${process.cwd()}/logs/log.json`]
                    }
                ]
            }
        }
    },
    loader: {
        routes: {
            cwd: `${process.cwd()}/src/server/routes`,
            pattern: '**/*.js',
            glob: {
                cwd: `${process.cwd()}/src/server/routes`
            }
        },
        handlers: {
            cwd: `${process.cwd()}/src/server/handlers`,
            pattern: '**/*.js',
            glob: {
                cwd: `${process.cwd()}/src/server/handlers`
            }
        },
        methods: {
            cwd: `${process.cwd()}/src/server/methods`,
            pattern: '**/*.js',
            glob: {
                cwd: `${process.cwd()}/src/server/methods`
            }
        },
        preHandlers: {
            cwd: `${process.cwd()}/src/server/pre-handlers`,
            pattern: '**/*.js',
            glob: {
                cwd: `${process.cwd()}/src/server/pre-handlers`
            }
        }
    }
};

module.exports = new Confidence.Store(config);
