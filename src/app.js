import express from 'express';
import storiesRoutes from './routes/stories.routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(storiesRoutes);

export default app;