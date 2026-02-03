import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();



const connectdb = async () => {
    try {
        const res = await mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`,{
             serverSelectionTimeoutMS: 5000 
        })
        console.log("mongodb connected.")
    } catch (error) {
        console.log("Mongodb connection error", error)
    }

}
export default connectdb;