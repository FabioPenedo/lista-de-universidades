import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/universities', ApiController.filter);
router.get('/universities/:id', ApiController.filterId);

router.post('/insertapi', ApiController.insertApi);
router.post('/universities', ApiController.createNewUniversities);

router.put('/universities/:id', ApiController.changeData);
router.delete('/universities/:id', ApiController.deleteData);


export default router;