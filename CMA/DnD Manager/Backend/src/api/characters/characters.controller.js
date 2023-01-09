import * as BLL from './characters.bll.js';

async function createCharacter(req, res) {
  const { name, charClass, race, gender, level, size, alignment, background } = req.body;
  const create = { name, charClass, race, gender, level, size, alignment, background };
  if (!name || !charClass || !race || !gender) {return res.json("Missing parameters.")}

  const owner = req.user;
  if (!owner) {return res.json("No user specified.")}

  try {
    const results = await BLL.createCharacter(create, owner);
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function getCharacterByOwner(req, res) {
  const owner = req.user;
  if (!owner) {return res.json("No user specified.")}

  try {
    const results = await BLL.getCharacterByOwner(owner);
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function updateCharacterById(req, res) {
  const { id } = req.params;
  if (!id) {return res.json("No id specified.")}

  const { name, charClass, race, gender, level, size, alignment, background } = req.body;
  const update = { name, charClass, race, gender, level, size, alignment, background };

  const owner = req.user;
  if (!owner) {return res,json("No user specified.")}

  try {
    const results = await BLL.updateCharacterById(id, update, owner);
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function deleteCharacterById(req, res) {
  const { id } = req.params;
  if (!id) {return res.json("No id specified.")}

  const owner = req.user;
  if (!owner) {return res,json("No user specified.")}

  try {
    const results = await BLL.deleteCharacterById(id, owner);
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

export {
  createCharacter,
  getCharacterByOwner,
  updateCharacterById,
  deleteCharacterById
};