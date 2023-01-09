import Mongoose from 'mongoose';

const classSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  abilities: {
    type: Object,
    required: true,
  },
  statbonus: {
    type: Object,
    required: true,
  },
  resource: {
    type: String,
    required: true,
  },
  wearableArmor: {
    type: Array,
    required: true,
  },
  wearableWeapon: {
    type: Array,
    required: true,
  },
});

const charClass = Mongoose.model("class", classSchema);

export default charClass;