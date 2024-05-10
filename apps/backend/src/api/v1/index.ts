import express, { type Application } from 'express';
import productRouter from './product/product.router.js';

const app: Application = express();
app.use('/product', productRouter);

export default app;
