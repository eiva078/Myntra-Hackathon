import express from 'express';
import { getAllItems, addMultipleItems } from '../controllers/itemController.js';

const router = express.Router();

router.get('/', getAllItems);

router.post('/bulk', addMultipleItems);

export default router;
