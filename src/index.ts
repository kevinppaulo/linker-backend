import express, { Express, json } from 'express';
import { connectToDatabase } from './database';
import { router } from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const host: string = process.env.APP_HOST || 'localhost';
const port: number = parseInt(process.env.APP_PORT as string, 10) || 3000;

app.use(json());
app.use(router);

app
  .listen(port, host, () => {
    console.log(`[Linker] Server is running in http://${host}:${port}/`);
    connectToDatabase();
  })
  .on('error', (err) => {
    console.error(`[Linker] Server error: ${err}`);
  });
