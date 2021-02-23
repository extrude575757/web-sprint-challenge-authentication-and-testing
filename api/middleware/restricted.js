module.exports = (req, res, next) => {
  
  // Different ways to access the token threw the authorization header
  const tkn = req.headers?.authorization?.split(" ")[1];
  // const tkn1 = req.headers.authorization && req.headers.authorization.split(" ")[1];
  // const token = req.headers.authorization
/*TODO PLAce within try catch for 500 errors
  IMPLEMENT

    1- On valid token in the Authorization header, call next.
*/
  if (tkn) {
    jwt.verify(tkn, jwtSecret, (err, decoded) => {
      if (err) {
/*

    2- On missing token in the Authorization header,
      the response body should include a string exactly as
      follows: "token required".
*/

        res.status(401).json('Show a VALID token Nextime')
      } else {
        console.log('Within valid restricted middleware autherization token next call',req);
        req.decodedJwt = decoded;
        next(tkn)
      }
    })
  } else {
     /*

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
    res.status(401).json('Token invalid middleware restricted 401')
  }
  

 
};
