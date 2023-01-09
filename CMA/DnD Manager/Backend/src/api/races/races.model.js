import Mongoose from 'mongoose';

const raceSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  passive: {
    type: Object,
    required: true,
  },
  statbonus: {
    type: Object,
    required: true,
  },
});

const race = Mongoose.model("race", raceSchema);

export default race;