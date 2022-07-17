const express = require("express");
const handlers = require("./handlers");
const config = require("./config");

const app = express();
const port = 5000;

app.use(express.json());



// User
//Search for User
app.get("/user/:id", handlers.getUsersById);
//Create User
app.post("/user", handlers.addUser);

// Payments
//Make payment for loan and adjust loan balance
app.post("/payment/:id", handlers.makeUserpayment);
//Search for payment
app.get("/payment/user/:userId", handlers.getUserpaymentById);

// Loan
//Search for User loan
app.get("/userloan", handlers.getUserloanById);
// Create User Loan
app.post("/user", handlers. addUserloan);

app.listen(port, () => {
  console.log(`Imalipay admin  is running on port ${port}.`);
});
