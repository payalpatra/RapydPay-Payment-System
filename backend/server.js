require("dotenv").config();
// const path = require("path")
const express = require("express");

// Initializing APP
const app = express();
app.use(express.json());

// Midlewares
app.use(express.json());
// app.use(cors())



// Production

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '/frontend/build')));
//     app.get("*", (req, res)=>{
//      res.sendFile(path.join(__dirname, 'frontend',"build","index.html"));
//     })
//   }else{
//     app.get("/", (req,res)=>{
//       res.send("Hey There , Greetings From The Server. Have a Good Day :)")
//     })
//   }


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));