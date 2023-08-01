const {Router } = require("express");
const router = Router();
const Blog = require("../models/blog");
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req,res,cb){
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function(req,res,cb){
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({storage:storage});

router.get('/add-new' , (req,res) =>{
  return res.render("addBlog" , {user : req.user});
});
// router.post('/add-new' ,upload.single('coverImage'), async(req,res)=>{
router.post("/add-new" , async(req,res)=>{
  //  console.log(req.body);
  //  console.log(req.file);
  // req.body has item sent  by form of htm page
  // req.user is a propert of reqest that has details of user
   const {title,body } = req.body;
   const blog = await Blog.create({
    title,
    body,
    createdBy: req.body.user,
    // coverImageURL : `./uploads/${req.file.filename}`
   });
  // return res.redirect(`/blog/${blog._id}`);//blog/blog_ki_id
  return res.redirect("/");
});


module.exports = router;