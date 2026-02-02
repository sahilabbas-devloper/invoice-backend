import express from "express";

import {Send} from "../Controllers/send.js";
import {Recive} from "../Controllers/recivedata.js"


const router = express.Router()

router.post("/Send", Recive)
router.get("/Recive", Send)

export default router