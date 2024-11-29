import mongoose from "mongoose"; // Importing the Mongoose library for MongoDB interactions.

const MONGODB_URI = process.env.MONGODB_URI; // Fetching the MongoDB URI from environment variables.
let initialized = false; // A flag to track whether the MongoDB connection has already been established.

/**
 * Connects to the MongoDB database using Mongoose.
 * Ensures the connection is established only once during the app lifecycle.
 */
export const connect = async () => {
    // Setting Mongoose's query behavior to use strict mode for better query validation.
    mongoose.set('strictQuery', true);

    // Check if a connection is already initialized to prevent duplicate connections.
    if (initialized) {
        console.log('Already connected to Mongodb');
        return; // Exit the function if already connected.
    }

    try {
        // Attempt to connect to MongoDB with specified options.
        await mongoose.connect(MONGODB_URI, {
            dbName: 'next-blog', // Specify the database name to use.
            useNewUrlParser: true, // Use the new URL parser for MongoDB connections.
            useUnifiedTopology: true, // Enable the unified topology engine for better connection management.
        });

        console.log('Connected to MongoDB'); // Log a success message if the connection is established.
        initialized = true; // Set the flag to true to indicate the connection is active.
    } catch (error) {
        // Log an error message if the connection attempt fails.
        console.log('Error connecting to MongoDB:', error);
    }
};
