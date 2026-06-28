import mongoose from "mongoose";

const pollSchema = mongoose.Schema(
{
question: {
type: String,
required: true,
},

  
options: [
  {
    text: {
      type: String,
      required: true,
    },

    votes: {
      type: Number,
      default: 0,
    },
  },
],

createdBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
},

voters: [
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    optionIndex: Number,
  },
],
  

},
{
timestamps: true,
}
);

export default mongoose.model(
"Poll",
pollSchema
);
