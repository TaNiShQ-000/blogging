const {Schema , model} = require("mongoose");
const {createHmac , randomBytes} = require("crypto");
const { createTokenForUser } = require("../services/authentication");

 const userSchema = new Schema({
  fullName: {
    type : String,
    required : true,
  },
  email: {
    type : String,
    required : true,
    unique : true,
  },
  salt: {
    type : String,
    // required : true,
  },
  password: {
    type : String,
    required : true,
    unique : true,
  },
  profileImageURL:{
    type:String,
    default : "/images/default.png",
  },
  role: {
    type : String,
    enum : ["USER" , "ADMIN"],
    default: "USER",
  },
},
{timestamps:true}
);
//function used when a user sings up
userSchema.pre("save" , function (next){
  const user = this;
  // console.log("hello");
  if(!user.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
  .update(user.password)
  .digest("hex");

  this.salt = salt ;
  this.password = hashedPassword;

  next();
} );

// create afunction of the schema
// functions runs when a user sign in
userSchema.static("matchPasswordAndGenerateToken" , async function(email,password) {
  const user= await this.findOne({email});//find user using email
  if(!user) throw new Error('user not found!');

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProvidedHash = createHmac("sha256", salt)
  .update(password)
  .digest("hex");
  
  if( userProvidedHash !== hashedPassword) throw new Error('incorrect password');

  // return {...user ,password:undefined , salt:undefined};
  // insted return the token generated for verifid user
  const token = createTokenForUser(user);
  return token;
  
});

const User = model("user" , userSchema);

module.exports = User;