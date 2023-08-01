const JWT = require('jsonwebtoken');

const secret = "$uperMan@000";

function createTokenForUser(user){
  const payLoad ={
    _id: user._id,
    email:user.email,
    profileImageURL : user.profileImageURL,
    role : user.role,
  }
  const token = JWT.sign(payLoad,secret );//, {
  //   expiresIn
  // })
  return token;
}


function validateToken(token){
  const payload = JWT.verify(token,secret);
  return payload;
}
module.exports ={

  createTokenForUser,
  validateToken,
};