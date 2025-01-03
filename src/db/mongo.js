import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) return; // Prevent reconnecting
    await mongoose.connect("mongodb://127.0.0.1:27017/local", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
};

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

export const LogInCollection = mongoose.models.LogInCollection || mongoose.model("logincollection", logInSchema);
export default connectDB;
