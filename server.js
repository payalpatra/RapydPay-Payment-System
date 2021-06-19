require("dotenv").config();
const path = require("path")
const express = require("express");
const cors = require("cors");

// Controllers
const createWallet = require("./backend/controllers/createWallet");
const transfer = require("./backend/controllers/transfer");
const confirmation = require("./backend/controllers/confirmation");
const listTransactions = require("./backend/controllers/listTransactions");
const listPayments = require("./backend/controllers/listPayments");
const allWallets = require("./backend/controllers/allWallets");
const allCustomers = require("./backend/controllers/allCustomers");
const createCustomer = require("./backend/controllers/createCustomer");
const createPayment = require("./backend/controllers/createPayment");
const feedback = require("./backend/controllers/feedback");

// MongoDB Cloud Connection
const conectDB = require("./backend/config/db");

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



// Production

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get("*", (req, res)=>{
     res.sendFile(path.join(__dirname, 'frontend',"build","index.html"));
    })
  }else{
    app.get("/", (req,res)=>{
      res.send("Hey There , Greetings From The Server. Have a Good Day :)")
    })
  }

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
