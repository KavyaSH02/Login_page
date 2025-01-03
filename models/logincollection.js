import mongoose from "mongoose";

const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.models.LogInCollection || mongoose.model("logincollection", logInSchema);
