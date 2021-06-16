require("dotenv").config();
// const path = require("path")
const express = require("express");
const cors = require("cors");

// Controllers
const createWallet = require("./controllers/createWallet");
const transfer = require("./controllers/transfer");
const confirmation = require("./controllers/confirmation");
const listTransactions = require("./controllers/listTransactions");
const listPayments = require("./controllers/listPayments");
const allWallets = require("./controllers/allWallets");
const allCustomers = require("./controllers/allCustomers");
const createCustomer = require("./controllers/createCustomer");
const createPayment = require("./controllers/createPayment");
const feedback = require("./controllers/feedback");

// MongoDB Cloud Connection
const conectDB = require("./config/db");

// Initializing APP
const app = express();

// Midlewares
app.use(express.json());
app.use(cors());

// Database Connection
conectDB();

// ------------------------ Creating A Wallet ------------------------ \\
app.post("/api/ewallet", createWallet);

// -------------------- Money Transfer Between Wallet ------------------- \\
app.post("/api/transfer", transfer);

// ------------------------ Money Transfer Confirmation ------------------- \\
app.post("/confirmation", confirmation);

// ------------------------ Creating A Customer ------------------------ \\
app.post("/api/createCustomer", createCustomer);

// ------------------------ Creating Payment ------------------------ \\
app.post("/api/createPayment", createPayment);


// ------------------ List Transactions  ---------------- \\
app.get("/api/listTransactions", listTransactions);

// ------------------ List Payments ---------------- \\
app.get("/api/listPayments", listPayments);



// --------------------------- List Of Created Wallets --------------------------- \\
app.get("/api/allWallets", allWallets);

// --------------------------- List Of Created Customers --------------------------- \\
app.get("/api/allCustomers", allCustomers);


// --------------------------- Save Feedback ---------------------------- \\
app.post("/api/feedback", feedback);

app.get("/", (req, res) => {
  res.send("Hey There !! Welcome to the server");
});

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
