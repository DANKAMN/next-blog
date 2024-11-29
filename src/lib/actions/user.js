import User from '../models/user';
import { connect } from '../mongodb/mongoose';

// Finds a user with the specified clerkId and updates their data. If no user is found, it creates a new one.
export const createOrUpdateUser = async(id, first_name, last_name, image_url, email_addresses, username) => {
    try {
        await connect();

        const user = await User.findOneAndUpdate(
            { clerkId: id},
            { $set: {
                firstName: first_name,
                lastName: last_name,
                profilePicture: image_url,
                email: email_addresses[0].email_address,
                username
                }
            }, { new: true, upsert: true }
        );

        return user;
    } catch (error) {
        console.log('Error creating or updating the user:', error);
    }
}

// Finds and deletes a user with the specified clerkId.
export const deleteUser = async(id) => {
    try {
        await connect();
        await User.findOneAndDelete({ clerkId: id });
    } catch (error) {
        console.log('Error deleting user', error);
    }
}