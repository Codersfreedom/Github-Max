import mongoose from 'mongoose';

export default async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDb");
    } catch (error) {
        console.log("Error in connecting to database",error.message)
    }
}