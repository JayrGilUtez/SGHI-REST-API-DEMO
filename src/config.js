import { config } from 'dotenv';

config();


export const SERVER_PORT = process.env.SERVER_PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;

export const cassadraDBConfig = {
    CONTACT_POINTS: process.env.CONTACT_POINTS,
    CASSANDRA_DB_PORT: process.env.CASSANDRA_DB_PORT,
    LOCAL_DATA_CENTER: process.env.LOCAL_DATA_CENTER,
    KEYSPACE: process.env.KEYSPACE
};