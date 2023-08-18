import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  about: {type: Array, required: true},
  picture: {
    type: String,
    default: "",
    required: true,
  },
  loc: {type: String,required: true},
  DOB: {type: Date,required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);