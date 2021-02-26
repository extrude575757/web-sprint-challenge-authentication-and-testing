const router = require('express').Router();
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
// const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets.js')
const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");


  
  /*
    IMPLEMENT
    You are welcome to build additional middlewares to help with the endpoint's functionality.

    1- In order to register a new account the client must provide `username` and `password`:
      {
        "username": "Captain Marvel", // must not exist already in the `users` table
        "password": "foobar"          // needs to be hashed before it's saved
      }

    2- On SUCCESSFUL registration,
      the response body should have `id`, `username` and `password`:
      {
        "id": 1,
        "username": "Captain Marvel",
        "password": "2a$08$jG.wIGR2S4hxuyWNcBf9MuoC4y0dNy7qC/LbmtuFBSdIhWks2LhpG"
      }

    3- On FAILED registration due to `username` or `password` missing from the request body,
      the response body should include a string exactly as follows: "username and password required".

    4- On FAILED registration due to the `username` being taken,
      the response body should include a string exactly as follows: "username taken".
  */

router.post("/register", (req, res,next) => {
  const credentials = req.body;
  console.log(credentials)

  Users.add(req.body)
    .then(u =>{
      console.log(u)
      res.status(201).json(u);
    })
    .catch(e =>{
      console.log(e);
      res.status(500).json({mesg:e});
    })

      // if (isValid(credentials)) {
      //     const rounds = process.env.BCRYPT_ROUNDS || 8;

      //     // hash the password
      //     const hash = bcryptjs.hashSync(credentials.password, rounds);

      //     credentials.password = hash;
      //   console.log(credentials)
      //     // save the user to the database
      //     Users.add(credentials)
      //       .then(user => {

      //         next({ data: user });
      //         // res.status(201).json({ data: user });
      //       })
      //       .catch(error => { 
      //         res.status(500).json({ message: error.message, info: 'test' });
      //         // res.end('implement register, please!');
           
      //       });
      //   } else {
      //     res.status(400).json({
      //       message: "please provide username and password and the password shoud be alphanumeric 400 post/register",
      //     });
         
      //   }
  
});


router.get('/', (req,res) =>{

  Users.find()
    .then( u =>{
      res.status(200).json(u);
    })
    .catch(e =>{
      res.status(500).json({mesg:e})
    })

})

router.post('/login', (req, res) => {
  res.end('implement login, please!');
  /*
    IMPLEMENT
    You are welcome to build additional middlewares to help with the endpoint's functionality.

    1- In order to log into an existing account the client must provide `username` and `password`:
      {
        "username": "Captain Marvel",
        "password": "foobar"
      }

    2- On SUCCESSFUL login,
      the response body should have `message` and `token`:
      {
        "message": "welcome, Captain Marvel",
        "token": "eyJhbGciOiJIUzI ... ETC ... vUPjZYDSa46Nwz8"
      }

    3- On FAILED login due to `username` or `password` missing from the request body,
      the response body should include a string exactly as follows: "username and password required".

    4- On FAILED login due to `username` not existing in the db, or `password` being incorrect,
      the response body should include a string exactly as follows: "invalid credentials".
  */
});

module.exports = router;
