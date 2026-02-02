import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();



const connectdb = async () => {
    try {
        const res = await mongoose.connect(`${process.env.MONGODB_URl}${process.env.DB_NAME}`)
        console.log("mongodb connected.")
    } catch (error) {
        console.log("Mongodb connection error", error)
    }

}
export default connectdb;