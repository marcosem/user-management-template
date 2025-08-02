import express, { Request, Response, NextFunction, Router } from 'express';
import 'dotenv/config';
import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';

import routes from './routes';

const app = express();

const temp = Router();

app.use(routes);
app.use(temp);

app.use(errors());
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
