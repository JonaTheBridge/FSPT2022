import Router from 'express';
import * as charactersController from '../characters/characters.controller.js'

const router = Router();

// localhost:3003/characters/...

router.post('/create', charactersController.createCharacter);
router.get('/userdata', charactersController.getCharacterByOwner);
router.put('/id/:id', charactersController.updateCharacterById);
router.delete('/id/:id', charactersController.deleteCharacterById);

export default router;