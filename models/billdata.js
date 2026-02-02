import mongoose from "mongoose";

const billschema = mongoose.Schema({

    invoicetype: String,
    invoicenumber: String,
    sellername: String,
    selleraddress: String,
    date: String,
    buyername: String,
    buyeraddress: String,
    buyergstno: String,
    items: [
        {
            itemname: String,
            itemprice: Number,
            itemqty: Number,

        }
    ],
    subtotal: Number,
    gst: Number,
    discount: Number,
    total: Number,


},{timestamps: true})

const Bill = mongoose.model("bills", billschema)

export default Bill