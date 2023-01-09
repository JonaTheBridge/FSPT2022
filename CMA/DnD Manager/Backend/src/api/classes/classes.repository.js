import ClassModel from './classes.model.js';

async function getClassByName(name) {
  const getClass = await ClassModel.findOne({name}).exec();
  if (!getClass) {throw new Error(`No class ${name} found.`)}
  return getClass._id;
}

export { getClassByName };