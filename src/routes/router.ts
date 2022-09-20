import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/universities', ApiController.all);

router.post('/insertapi', ApiController.insertApi)


export default router;