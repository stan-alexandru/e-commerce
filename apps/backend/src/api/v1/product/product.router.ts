import express from 'express';
import * as productController from './product.controller.js';
const router = express.Router();
router.get('', productController.getAll);
export default router;
