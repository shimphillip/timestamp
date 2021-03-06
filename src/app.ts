import express, { Request, Response } from 'express';
import cors from 'cors';

import { handle400, logErrors, handleErrors } from './helpers/handleErrors';
import router from './routes';

const app = express();

app.use(cors());
app.use('/api/timestamp', router);

app.get('/', (req: Request, res: Response): void => {
  res.status(302).redirect(`https://github.com/shimphillip/timestamp`);
});

app.use(handle400, logErrors, handleErrors);

export default app;
