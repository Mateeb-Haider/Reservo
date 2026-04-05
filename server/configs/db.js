import mongoose from "mongoose";

const connectDB =async () =>{
try {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing in environment variables");
    }

    mongoose.connection.on('connected', ()=>console.log('database connected')
    );
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DB_NAME || "reservo",
    })

} catch (error) {
    console.log(`MongoDB connection failed: ${error.message}`);
     
}
}
export default connectDB;