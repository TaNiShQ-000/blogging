// const express = require("express");
// const router = express.Router();
const {Router } = require("express");
const router = Router();
const User = require("../models/user");

router.get("/signin" , (req,res) =>{
  return res.render("signin");
});

router.post('/signin' , async(req,res)=>{
  const { email,password} = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email,password);
    // console.log("token" , token);
    const name = "token";
    return res.cookie(name , token).redirect("/");
  } catch (error) {
     return res.render("signin" , {
      error : "incorrect email or password",
     } );
  }
});

router.get("/signup" , (req,res) =>{
  return res.render("signup");
});

router.post('/signup' , async(req,res)=>{
  const {fullName, email,password} = req.body;
  await User.create({

    fullName,
    email,
    password,
  });
  return res.redirect("/");
  // return res.render("home");
});

router.get('/logout' , (req,res) =>{
  res.clearCookie("token").redirect("/");
  // return res.render('/');
})
module.exports = router;