import app from './app.js';
import { SERVER_PORT } from './config.js';

console.log('Server running on port', SERVER_PORT);
console.log(`http://localhost:${SERVER_PORT}`);

app.listen(SERVER_PORT);