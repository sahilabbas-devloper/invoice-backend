import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import connectdb from "./ConnectDB/DBconnect.js";
import invoiceRoute from "./Routes/invoiceRoutes.js"

const app = express();
app.use(express.json());
app.use(cors());

connectdb();

app.use("/api/invoice",invoiceRoute)

app.use("/api/invoice", invoiceRoute )



const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log("server is running on port", PORT)
})