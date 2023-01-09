import RaceModel from './races.model.js';

async function getRaceByName(name) {
  const getRace = await RaceModel.findOne({name}).exec();
  if (!getRace) {throw new Error(`No race ${name} found.`)}
  return getRace._id;
}

export { getRaceByName };