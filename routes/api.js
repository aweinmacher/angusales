var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // < MySQL username >
    password: 'easyPass', // < MySQL password >
    database: 'angusales' // <your database name>
});


// GET CUSTOMERS
router.get('/customers', (req, res) => {
    try {
        connection.query(
            `SELECT cust_id as id, firstname as firstName, lastname as lastName, 
        companies.name as company, email, phone 
        FROM customers left join companies on customers.comp_id = companies.comp_id 
        order by cust_id`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get customers', err);
            });
    } catch (err) {
        console.log(err);
    }
});

// ADD CUSTOMER
router.post('/customers/add', (req, res) => {
    let newCust = req.body;
    console.log('body: ' + newCust);
    connection.query(
        `INSERT INTO customers SET ?`,
        newCust,
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('insert customer', err);
        });
});

// DELETE CUSTOMER
router.delete('/customers/delete/:id', (req, res) => {
    let custId = req.params.id;
    connection.query(
        `DELETE from customers where cust_id = ${custId}`,
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('delete customer', err);
        });
});

// UPDATE CUSTOMER
router.put('/customers/update/:id', (req, res) => {
    let custId = req.params.id;
    let updCust = req.body;
    connection.query(
        `UPDATE customers SET ? WHERE ?`,
        [updCust, { cust_id: custId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('update customer', err);
        });
});






module.exports = router;