import app from './app.js';
import cors from 'cors';
import { SERVER_PORT } from './config.js';

app.use(cors());
console.log('Server running on port', SERVER_PORT);
console.log(`http://localhost:${SERVER_PORT}/`);
app.listen(SERVER_PORT);