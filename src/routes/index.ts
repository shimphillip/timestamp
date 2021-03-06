import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/', controllers.getCurrentTime);
router.get('/:date_string', controllers.getTimes);

export default router;
