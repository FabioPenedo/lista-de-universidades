import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/', ApiController.home);

router.post('/insertapi', ApiController.insertApi)


export default router;