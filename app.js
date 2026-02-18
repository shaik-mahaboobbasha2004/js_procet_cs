const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const logger= require('./logger.js');

//  THIS LINE WAS MISSING IN YOUR FILE
const app = express();


app.use(bodyParser.json());


const PORT = 4000;
const SECRET_KEY = "mysecret123";
const users = [
  { id: 1, username: "admin", password: "1234" },
  { id: 2, username: "user", password: "abcd" }
];


// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  logger.info(`Login attempt for username: ${username}`);
  const user = users.find(
    u => u.username === username && u.password === password
  );


  if (!user) {
    logger.warn(`Failed login for username: ${username}`);
    return res.status(401).json({ message: "Invalid credentials" });
  }

 logger.info(`Successful login for username: ${username}`);
  const token = jwt.sign(
    { id: user.id, username: user.username },
    SECRET_KEY,
    { expiresIn: "1h" }
  );


  res.json({ token });
});


// JWT Middleware
function verifyToken(req, res, next) {
  const header = req.headers["authorization"];


  if (!header){
     logger.warn("Access denied — Token missing");
    return res.status(403).json({ message: "Token missing" });}


  const token = header.split(" ")[1];


  jwt.verify(token, SECRET_KEY, (err, decoded) => {

    if (err){
      logger.error("Invalid token used");


     return res.status(401).json({ message: "Invalid token" });}
      logger.info(`Token verified for user: ${decoded.username}`);



    req.user = decoded;
    next();
  });
}


// Protected Route
app.get("/dashboard", verifyToken, (req, res) => {
   logger.info(`Dashboard accessed by user: ${req.user.username}`);
  res.json({
    message: "Welcome Dashboard",
    user: req.user
  });
});


// Start Server
app.listen(PORT, () => {
   logger.info(`Server Security running on port ${PORT}`);
  console.log(`Server Security running on port ${PORT}`);
});


