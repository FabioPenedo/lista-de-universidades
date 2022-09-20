import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/universities', ApiController.all);
router.get('/universities=country/:name', ApiController.filterCountry)
router.get('/universities/:id', ApiController.filterId)

router.post('/insertapi', ApiController.insertApi)


export default router;