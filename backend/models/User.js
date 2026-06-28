import mongoose from "mongoose";

const userSchema = mongoose.Schema(
{
name: {
type: String,
required: true,
},

  
email: {
  type: String,
  required: true,
  unique: true,
},

password: {
  type: String,
  required: true,
},

phone: {
  type: String,
  default: "",
},

dob: {
  type: String,
  default: "",
},

qualification: {
  type: String,
  default: "",
},

address: {
  type: String,
  default: "",
},

totalScore: {
  type: Number,
  default: 0,
},
  

},
{
timestamps: true,
}
);

export default mongoose.model(
"User",
userSchema
);
