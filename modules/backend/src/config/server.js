import express from 'express';
import { createServer } from 'http';
import path from 'path'
export const app = express();
app.use('/static', express.static(path.join(__dirname,'../../', 'public')));
export const server = createServer(app);

