const mongoose=require("mongoose");
const db=process.env.DATABASE;


mongoose.connect(db).then(()=>{
    console.log("Connection Sucessful")
}).catch((err)=>{
    console.log("No Connection")
});