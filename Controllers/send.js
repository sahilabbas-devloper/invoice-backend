 
 import Bill from "../models/billdata.js"
 
    export  const Send = async (req,res) => {


 try {
    const invoicenum =  req.query.data;
    const billdata = await Bill.findOne({ invoicenumber : invoicenum})
    if (!billdata) {
        res.json("invoice is not found.")
       
    }else{
        res.json(billdata)
       
    }
     
  } catch (error) {
    console.log("mongodb data get error",error)
  } 

   }

