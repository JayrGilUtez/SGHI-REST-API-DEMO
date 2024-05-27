import app from './app.js';
import cors from 'cors';
import { PORT } from './config.js';

app.use(cors());
console.log('Server running on port', PORT);
app.listen(PORT);