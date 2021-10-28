//medicine-model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const MedicineSchema =  new Schema(
  {
    name: {
      type: String,
    },
    using: {
      type: Object,
    },
    addiction: {
      type: Array,
    },
    riddance: {
      type: Array,
    },
    stoptaking: {
      type: String,
    },
  },

  { collection: "Medicine" }
);

module.exports = mongoose.model("Medicine", MedicineSchema);
