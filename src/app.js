import express from 'express';
import storiesRoutes from './routes/stories.routes.js';


const app = express();
app.use(express.json());
app.use(storiesRoutes);

export default app;