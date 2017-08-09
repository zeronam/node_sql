var express = require('express');
var app = express();
app.listen(3000, function(){
  console.log('connected')
})

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// create database
// con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
// });

//create table
  // con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

// insert
// var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("1 record inserted");
// });

// insert multiple records
// var sql = "INSERT INTO customers (name, address) VALUES ?";
// var values = [
//   ['John', 'Highway 71'],
//   ['Peter', 'Lowstreet 4'],
//   ['Amy', 'Apple st 652'],
//   ['Hannah', 'Mountain 21'],
//   ['Michael', 'Valley 345'],
//   ['Sandy', 'Ocean blvd 2'],
//   ['Betty', 'Green Grass 1'],
//   ['Richard', 'Sky st 331'],
//   ['Susan', 'One way 98'],
//   ['Vicky', 'Yellow Garden 2'],
//   ['Ben', 'Park Lane 38'],
//   ['William', 'Central st 954'],
//   ['Chuck', 'Main Road 989'],
//   ['Viola', 'Sideway 1633']
// ];
// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: " + result.affectedRows);
// });

//SELECT from
// con.query("SELECT * FROM customers", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });

//WHERE from
// con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
//
// con.query("SELECT * FROM customers WHERE address LIKE 'Sk%'", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
//
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
//
// var adr2 = 'Yellow Garden 2';
// var sql2 = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql2, [adr2], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
//
// var name = 'Amy';
// var adr3 = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr3], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// ORDER BY NAME FROM A TO Z
// con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// ORDER BY NAME FROM Z TO A
// con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//DELETE
// var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Number of records deleted: " + result.affectedRows);
// });

//DROP Table
// var sql = "DROP TABLE customers";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table deleted");
// });

//update Table
// var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result.affectedRows + " record(s) updated");
// });

// limit SELECT
// var sql = "SELECT * FROM customers LIMIT 5";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// Start from position 3, and return the next 5 records:
// var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// var sql2 = "SELECT * FROM customers LIMIT 2, 5";
// con.query(sql2, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// })

//join Table
// var sql9 = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
// con.query(sql9, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
