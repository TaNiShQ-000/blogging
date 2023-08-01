const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie( cookieName){
  return (req,res,next) =>{
    // const tokenCookieValue = req.cookies[cookieName];
    const tokenCookieValue = req.cookies[cookieName];
    if(!tokenCookieValue){
      return next();
    }
    // const userPayLoad = validateToken(tokenCookieValue);
    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {  }

    return next();
  };
};


function hello(str){
  return (req,res,next) =>{
    console.log(req.cookies);
    return next();
  }
}
module.exports =  {
  checkForAuthenticationCookie,
  hello,
};
