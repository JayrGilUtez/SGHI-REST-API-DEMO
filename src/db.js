import pkg from 'pg';
const { Pool } = pkg;

import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } from './config.js'

export const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
});

pool.connect((err) => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to the database');
    }
});