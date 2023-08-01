const path = require("path"); //build in lib
const express = require("express");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");
// const cookies = require("js-cookie");


const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');


const { hello, checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/blogify')
.then((e)=>{console.log("mongodb connected")});

app.set("view engine", "ejs");
app.set("views" ,path.resolve("./views"));

app.use(express.urlencoded({extended : false})); 
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));
// app.use(hello("hi"));  
// console.log(req.token);
const Blog = require('./models/blog');
app.get("/" , async (req,res) => {
  const allBlogs = await Blog.find({});
  res.render("home" , { //and pass user object to the ejs page
    user: req.user,
    blog: allBlogs,
  });
});

app.use("/user" , userRoute); 
app.use("/blog" , blogRoute);

app.listen(PORT, () => console.log(`server has started :${PORT}`));
