require("dotenv").config();
// const path = require("path")
const express = require("express");
const cors = require("cors");

// Controllers
const createWallet = require("./controllers/createWallet");
const transfer = require("./controllers/transfer");
const confirmation = require("./controllers/confirmation");
const walletDetails = require("./controllers/walletDetails");
const listTransactions = require("./controllers/listTransactions");
const checkout = require("./controllers/checkout");
const allWallets = require("./controllers/allWallets");
const createCustomer = require("./controllers/createCustomer");
const createPayment = require("./controllers/createPayment");
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


// ------------------------ Retrieve Wallet Contact----------------------- \\

app.post("/walletDetails", walletDetails);

// ------------------ List Transactions of a particular e-wallet ---------------- \\
app.get("/api/listTransactions", listTransactions);

// --------------------------- Checkout --------------------------- \\
app.post("/checkout", checkout);

// --------------------------- List Of Created Wallets --------------------------- \\
app.get("/api/allWallets", allWallets);

// --------------------------- List Of Created Customers --------------------------- \\
// app.get("/api/allCustomers", allCustomers);

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
