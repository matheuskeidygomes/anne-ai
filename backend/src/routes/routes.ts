import { Router } from 'express';
import * as AIController from '../controllers/AIController';

export const routes = Router();
routes.post('/', AIController.callIA);

