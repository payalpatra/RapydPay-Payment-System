require("dotenv").config();
// const path = require("path")
const express = require("express");
const cors = require("cors")

// Controllers 
const createWallet = require("./controllers/createWallet");
const transfer = require("./controllers/transfer")
const confirmation = require("./controllers/confirmation");
const walletDetails = require("./controllers/walletDetails");
const listTransactions = require("./controllers/listTransactions");
const checkout = require("./controllers/checkout");
const allWallets = require("./controllers/allWallets");
const conectDB = require("./config/db")

// Initializing APP
const app = express();

// Midlewares
app.use(express.json());
app.use(cors())

// Database Connection
conectDB();


// ------------------------ Creating A Wallet ------------------------ \\
app.post("/ewallet", createWallet)

// -------------------- Money Transfer Between Wallet ------------------- \\
app.post("/transfer", transfer)

// ------------------------ Money Transfer Confirmation ------------------- \\
app.post("/confirmation", confirmation)


// ------------------------ Retrieve Wallet Contact----------------------- \\

app.post("/walletDetails", walletDetails)

// ------------------ List Transactions of a particular e-wallet ---------------- \\
app.post("/listTransactions", listTransactions)

// --------------------------- Checkout --------------------------- \\
app.post("/checkout", checkout)

app.get("/allWallets", allWallets)


app.get("/", (req, res) => {
    res.send("Hey There !! Welcome to the server")
})


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