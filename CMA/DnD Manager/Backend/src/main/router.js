import Router from 'express';
import * as auth from '../api/auth/auth.controller.js';
import charactersRouter from '../api/characters/characters.router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from './swagger.js';

const router = Router();

router.post('/login', auth.login);
router.post('/register', auth.register);
router.put('/update', auth.updateUser);
router.delete('/delete', auth.deleteUser);
router.use('/characters', charactersRouter);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

export default router;