import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbURI = "mongodb+srv://vinudevit:VINUdevi%40123@cluster0.ytk55.mongodb.net/zer01";
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
