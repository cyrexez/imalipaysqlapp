const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "imalipaysqltask",
  password: "bnplforgigworkers",
  port: 5432,
});

pool.on("connect", function () {
  console.log("connected to the db");
});

pool.on("error", function (err) {
  console.log("Error connecting to db", err);
});

module.exports = {
  db: pool,
};


/*
SQL Query to create the table


Create table user_details(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    loan_payment decimal,
    user_loan decimal,
    loan_balance decimal
)





*/