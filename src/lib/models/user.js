import mongoose from "mongoose"; // Importing Mongoose to define and interact with MongoDB schemas and models.

// Define the schema for the "User" collection in MongoDB
const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

// Create a model for the "User" schema, or reuse the existing one if already defined.
// This ensures that multiple model declarations won't create duplicate models.
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Export the user model to use it in other parts of the application.
export default User;
