require('dotenv').config();

const { Pool } = require('pg');

let dbUrl = '';
const {
    NODE_ENV,
    DB_DEV_URL,
    DATABASE_URL,
    TEST_DB_URL,
} = process.env;

switch (NODE_ENV) {
    case 'production':
        dbUrl = DATABASE_URL;
        break;
    case 'development':
        dbUrl = DB_DEV_URL;
        break;
    case 'test':
        dbUrl = TEST_DB_URL;
        break;
    default:
        throw new Error('NO DATABASE to show!');
}

const options = {
    connectionString: dbUrl,
    ssl: { rejectUnauthorized: false },
};

module.exports = new Pool(options);