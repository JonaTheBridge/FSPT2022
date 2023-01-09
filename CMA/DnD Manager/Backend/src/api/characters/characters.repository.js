import { ObjectId } from 'mongodb';
import charModel from './characters.model.js'

async function createCharacter(characterData) {
  const createCharacter = await charModel.create(characterData).exec();
  if (!createCharacter) {throw new Error(`Character creation failed.`)}
  return createCharacter;
}

async function getCharacterByOwner(owner) {
  const getCharacters = await charModel.findOne({owner:ObjectId(owner)}).exec();
  if (!getCharacters) {throw new Error(`There are no characters that match the query.`)}
  return getCharacters;
}

async function updateCharacterById(id, update) {
  const updateCharacter = await charModel.findOneAndUpdate({_id:ObjectId(id)}, update, {new: true}).exec();
  if (!updateCharacter) {throw new Error(`There are no characters that match the query.`)}
  return updateCharacter;
}

async function deleteCharacterById(id) {
  const deleteCharacter = await charModel.findOneAndDelete({_id:ObjectId(id)}).exec();
  if (!deleteCharacter) {throw new Error(`There are no characters that match the query.`)}
  return deleteCharacter;
}

export { createCharacter, getCharacterByOwner, updateCharacterById, deleteCharacterById }