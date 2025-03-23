import express from 'express';
import { Router } from 'express';
import loginRoutes from './loginRoutes.js';

const router = Router();

router.use('/auth', loginRoutes);

export default function(app) {
    app.use('/api', router);
}