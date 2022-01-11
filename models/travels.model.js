const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema(
  {
    national: {
      type: Boolean,
    },
    title: {
      type: String,
      require: true
    },
    image: {
      type: String,
    },
  }
)




// price,
// location,
// tripmode: ["car", "ship", "plane"],
// description,
// duration: 3,
// rating,
// keywords,
