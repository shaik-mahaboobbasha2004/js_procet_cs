// // var express=require("express");
// // var app=express();
// // app.get('/greeting',function(req,res){
// //     res.send("hello from api");
// // })
// // app.get('/time',function(req,res){
// //     var time= new Date().toLocaleTimeString();
// //     res.send(`Time is: ${time}`);
// // });
// // app.get('/date',function(req,resp){
// //     var date = new Date().toLocaleDateString();
// //     resp.send(`Date is: ${date}`);
// // })
// // app.get('/wishes/:name',function(req,resp){
// //     var name = req.params.name;
// //     resp.send(`Hello ${name}`);
// // })
// // app.get('/square/:n',function(req,resp){
// //     var n = req.params.n;
// //     resp.send(`Square of ${n} is: ${n*n}`)
// // });
// // app.get('/addition/:a/:b',function(req,resp){
// //     var a = Number(req.params.a);
// //     var b =Number( req.params.b);
// //     var c = a+b;
// //     resp.send(`Add of ${a} and ${b} is: ${c}`);
// // });
 


 

// // app.listen(9000,()=>console.log("api started listeninig"));
// // const express = require("express");
// // const app = express();

// // app.use(express.json()); // to read JSON body

// // // In-memory array (acts like DB)
// // let users = [
// //   { id: 1, name: "Ali", age: 25 },
// //   { id: 2, name: "Sara", age: 22 }
// // ];


// // // ================= CREATE =================
// // // POST /users
// // app.post("/users", (req, res) => {
// //   const newUser = {
// //     id: users.length + 1,
// //     name: req.body.name,
// //     age: req.body.age
// //   };

// //   users.push(newUser);
// //   res.send(newUser);
// // });


// // // ================= READ =================
// // // GET /users
// // app.get("/users", (req, res) => {
// //   res.send(users);
// // });

// // // GET /users/:id
// // app.get("/users/:id", (req, res) => {
// //   const user = users.find(u => u.id == req.params.id);

// //   if (!user) return res.status(404).send("User not found");

// //   res.send(user);
// // });


// // // ================= UPDATE =================
// // // PUT /users/:id
// // app.put("/users/:id", (req, res) => {
// //   const user = users.find(u => u.id == req.params.id);

// //   if (!user) return res.status(404).send("User not found");

// //   user.name = req.body.name;
// //   user.age = req.body.age;

// //   res.send(user);
// // });


// // // ================= DELETE =================
// // // DELETE /users/:id
// // app.delete("/users/:id", (req, res) => {
// //   users = users.filter(u => u.id != req.params.id);
// //   res.send("User deleted");
// // });


// // app.listen(3000, () => {
// //   console.log("Server running on port 3000");
// // });




// const express = require("express");
// const app = express();

// app.use(express.json()); // to read JSON body

// // In-memory array (acts like DB)
// let users = [
//   { id: 1, name: "Ali", age: 25,address:"vizag",mobile:"1111111111" },
//   { id: 2, name: "Sara", age: 22,address:"hyd" ,mobile:"2222222222"}
// ];


// // ================= CREATE =================
// // POST /users
// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     age: req.body.age,
//     address:req.body.address,
//     mobile:req.body.mobile
//   };

//   users.push(newUser);
//   res.send(newUser);
// });


// // ================= READ =================
// // GET /users
// app.get("/users", (req, res) => {
//   res.send(users);
// });

// // GET /users/:id
// app.get("/users/:id", (req, res) => {
//   const user = users.find(u => u.id == req.params.id);

//   if (!user) return res.status(404).send("User not found");

//   res.send(user);
// });


// // ================= UPDATE =================
// // PUT /users/:id
// app.put("/users/:id", (req, res) => {
//   const user = users.find(u => u.id == req.params.id);

//   if (!user) return res.status(404).send("User not found");

//   user.name = req.body.name;
//   user.age = req.body.age;
//   user.address=req.body.addresss;
//   user.mobile=req.body.mobile;

//   res.send(user);
// });


// // ================= DELETE =================
// // DELETE /users/:id
// app.delete("/users/:id", (req, res) => {
//   users = users.filter(u => u.id != req.params.id);
//   res.send("User deleted");
// });


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
