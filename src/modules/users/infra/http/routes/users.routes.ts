import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' });
});

export default usersRouter;
