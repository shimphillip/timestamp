import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import createError from 'http-errors';

import router from './routes';

const app = express();

app.use(cors());

app.use('/api/timestamp', router);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello',
  });
});

export default app;
