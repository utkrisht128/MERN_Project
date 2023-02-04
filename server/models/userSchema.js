const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens: [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,12);
        this.cpassword= await bcrypt.hash(this.password,12);
    }
    next();
});

userSchema.methods.generateAuthToken=async function(){
    try{
        let realtoken=jwt.sign({ _id:this._id }, process.env.SECRET_KEY);
        this.tokens= this.tokens.concat({token:realtoken});
        await this.save();
        return realtoken;
    }
    catch (err){
        console.log(err);
    }
}
const User= mongoose.model('user',userSchema);
module.exports=User;