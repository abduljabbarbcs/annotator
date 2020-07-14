const {
    NODE_ENV: env,
    PORT:SERVER_PORT,
} = process.env;


/**
 * Server Settings
 */
const SERVER_CONFIG = {
    PORT: SERVER_PORT,
    TIMEOUT: 360000,
};


export {
    env,
    SERVER_CONFIG,
}