import express from 'express';
import 'dotenv/config';

import routes from './routes';

const app = express();

app.use(routes);

export default app;
