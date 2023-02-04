const express = require("express");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const router = express.Router();
const Authenticate=require("../middleware/authenticate")
require("../db/conn");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ Error: "plx fill the field properly" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ Error: "Email already exist" });
      } else if (password != cpassword) {
        return res.status(422).json({ Error: "Password is not Matching" });
      } else {
        const user = new User({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        });
        user
          .save()
          .then(() => {
            res.status(201).json({ message: "user registered sucessfully" });
          })
          .catch((err) =>
            res.status(500).json({ Error: "Failed to register" })
          );
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ Error: "Plzz Fill the field correctly" });
    }

    const userLogin = await User.findOne({ email: email });
    
    if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
        const token=await userLogin.generateAuthToken();
        res.cookie("jwtoken", token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        })
        if(!isMatch)
        {
            console.log("Invalid Credentials");
            res.status(400).json({ Error: "Invalid credentials" });
        }
        else{
            console.log("Signed Succesfully");
            res.status(200).json({Error:"Signed Succesfully"});
        }
    }else
    {
        console.log("User not Found");
        res.status(400).json({Error:"User not Found"});
    } 
  } catch (err) {
    console.log(err);
  }
});

router.post("/about", Authenticate, (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;
