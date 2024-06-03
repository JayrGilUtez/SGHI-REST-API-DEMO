import cassandra from 'cassandra-driver'

import { cassadraDBConfig } from './config.js'

export const client = new cassandra.Client({
    contactPoints:[cassadraDBConfig.CONTACT_POINTS],
    localDataCenter: cassadraDBConfig.LOCAL_DATA_CENTER,
    keyspace: cassadraDBConfig.KEYSPACE
});

export const connectToCassandra = () => {
    client.connect((error)=> {
        if(error) {
            console.log('Error connecting to cassandra: ', error);
        } else {
            console.log('Connected to cassandra');
        }
    });
};

connectToCassandra();

export const executeQuery = async (query) => {
    try {
        const result = await client.execute(query, [], { prepare: true });
        console.log('Query result:', result.rows);
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};