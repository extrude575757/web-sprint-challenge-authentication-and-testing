const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const restrict = require('./middleware/restricted.js');

const authRouter = require('./auth/auth-router.js');
const jokesRouter = require('./jokes/jokes-router.js');
const session = require("express-session");

const server = express();
const sessionConfig = {
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, 
      secure: process.env.SECURE_COOKIE || false,
      httpOnly: true, 
    },
    resave: false,
    saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
    name: "monster",
    secret: process.env.COOKIE_SECRET || "keepitsecret,keepitsafe",
  };
  
  
  server.use(session(sessionConfig)); 


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/jokes', restrict, jokesRouter); // only logged-in users should have access!

server.get("/", (req,res) =>{
    res.json(
        {api:"up"}
    )
})

module.exports = server;
