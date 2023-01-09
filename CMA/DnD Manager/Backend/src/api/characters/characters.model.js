import { ObjectID } from 'bson';
import Mongoose from 'mongoose';

const characterSchema = new Mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  class: {
    type: ObjectID,
    ref: 'class',
    required: true,
  },
  race: {
    type: ObjectID,
    ref: 'race',
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  alignment: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  owner: {
    type: ObjectID,
    ref: 'user',
    required: true,
  },
});

const character = Mongoose.model("character", characterSchema);

export default character;