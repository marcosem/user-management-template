import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AdminUsersController from '@modules/users/infra/http/controllers/AdminUsersController';
import UsersController from '@modules/users/infra/http/controllers/UsersController';
import InitialUsersController from '@modules/users/infra/http/controllers/InitialUsersController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ensureAdminAuthenticated from '@modules/users/infra/http/middlewares/ensureAdminAuthenticated';

const usersRouter = Router();

const adminUsersController = new AdminUsersController();
const usersController = new UsersController();
const initialUsersController = new InitialUsersController();

// Admnin users routes
usersRouter.post(
  '/createadmin',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().regex(/^$|([0-9]{2}-[0-9]{4,5}-[0-9]{4})$/),
      password: Joi.string().required(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
      admin_secret: Joi.string(),
    },
  }),
  adminUsersController.create,
);

// Initial Users Routes
// Show a single by secret
usersRouter.get(
  '/complete/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  initialUsersController.show,
);

// Update initial user
usersRouter.post(
  '/complete',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().regex(/^$|([0-9]{2}-[0-9]{4,5}-[0-9]{4})$/),
      password: Joi.string().required(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
      secret: Joi.string().uuid().required(),
    },
  }),
  initialUsersController.update,
);

// Create initial user - ST only
usersRouter.post(
  '/create',
  ensureAdminAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().regex(/^$|([0-9]{2}-[0-9]{4,5}-[0-9]{4})$/),
    },
  }),
  initialUsersController.create,
);

usersRouter.get('/list', ensureAdminAuthenticated, usersController.index);

usersRouter.delete(
  '/remove',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      profile_id: Joi.string().uuid(),
    },
  }),
  usersController.delete,
);

export default usersRouter;
