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
    try{
    connection.query(
        `SELECT cust_id as id, firstname as firstName, lastname as lastName, 
        companies.name as company, email, phone 
        FROM customers left join companies on customers.comp_id = companies.comp_id 
        order by cust_id`,
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('Error while performing Query.');
        });
    } catch(err) {
        console.log(err);
    }
});

router.get('/', (req, res) => {
    res.send('hi');
});










module.exports = router;