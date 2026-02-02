import Bill from "../models/billdata.js"

export const Recive = async (req,res) => {

try {
        const data = await req.body;
        const invoice = Bill.create({

            invoicetype: data.billdata.invoice,
            invoicenumber: data.billdata.invoicenum,
            sellername: data.billdata.yourname,
            selleraddress: data.billdata.addrss,
            date: data.billdata.date,
            buyername: data.billdata.clintname,
            buyeraddress: data.billdata.clintaddrss,
            buyergstno: data.billdata.clintgstno,
            items: data.items.map((item) => ({
                itemname: item.name,
                itemprice: item.price,
                itemqty: item.Qty,

            })),
            subtotal: data.subtotal,
            gst: data.gstamount,
            discount: data.discount,
            total: data.totalamount,

        })
        res.json("invoice saved sucessfully.")
    } catch (error) {
        console.log("error", error)
    }
}
