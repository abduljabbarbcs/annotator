import { json, urlencoded } from 'body-parser';
import { app, server } from './config/server';
import cors from 'cors';
import {
    SERVER_CONFIG,
} from './config/settings';

import { router } from './router';
app.use(cors({
    origin:"*",
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(json());
app.use(urlencoded({ extended: false }));

/**
 * Router
 */
app.use(`/api`, router);


/**
 * Server
 */
server
    .setTimeout(SERVER_CONFIG.TIMEOUT)
    .listen(SERVER_CONFIG.PORT, () => console.log(`API Server is running on port ${SERVER_CONFIG.PORT}...`));


/**
 * Graceful shutdown.
 */
const shutdown = () => {
    console.log('Shutting down...');
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);