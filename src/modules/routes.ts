import { Router } from "express"
import users from './users/user.route';

const routes = Router()

routes.use('/users', users);

export { routes }