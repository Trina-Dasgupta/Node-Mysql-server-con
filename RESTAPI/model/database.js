const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'foodDB',
    port:'3307'
});
con.connect((error)=>{
    if(error) throw error;
    else
    console.log('Successfully Connected to MYSQL');
});
module.exports = con;

