import * as Repository from './characters.repository.js';
import { getUserById } from '../users/users.repository.js';
import { getClassByName } from '../classes/classes.repository.js';
import { getRaceByName } from '../races/races.repository.js';

async function createCharacter(create, owner) {
  const { name, charClass, race, gender, level, size, alignment, background } = create;
  const getUser = await getUserById(owner);
  const userId = getUser._id;
  const getClass = await getClassByName(charClass);
  const classId = getClass._id;
  const getRace = await getRaceByName(race);
  const raceId = getRace._id;
  const characterData = { name, class:classId, race:raceId, gender, level, size, alignment, background, owner:userId };
  const results = Repository.create(characterData);
  return results;
}

async function getCharacterByOwner(owner) {
  const results = await Repository.getByOwner(owner);
  return results;
}

async function updateCharacterById(id, update, owner) {
  const { name, charClass, race, gender, level, size, alignment, background } = update;
  const getClass = await getClassByName(charClass);
  const classId = getClass._id;
  const getRace = await getRaceByName(race);
  const raceId = getRace._id;
  const characterData = { name, class:classId, race:raceId, gender, level, size, alignment, background };
  const results = Repository.updateById(id, characterData, owner);
  return results;
}

async function deleteCharacterById(id, owner) {
  const results = Repository.deleteById(id, owner);
  return results;
}

export { 
  createCharacter,
  getCharacterByOwner,
  updateCharacterById,
  deleteCharacterById
};