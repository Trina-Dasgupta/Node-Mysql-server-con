//loading the express module
const express = require('express');
//loading the cors module
const cors = require('cors');

//consuming users module
const userModule = require('./user/user.module');
const foodsModule= require('./foods/foods.module');
//defining the port no
const  port = 4000;

//create an instance of express
const app = express();
//let's make the server cors free
app.use(cors());

//let express to accept incoming data using POST request.
app.use(express.urlencoded({extended:true}));
//let express to accept JSON data directly
app.use(express.json());

//using the users module
app.use('/api',userModule);
app.use('/api',foodsModule);
//let express to allow us to access server static resources.
app.use(express.static('public'));

//let's create a basic GET request.
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to REST API V 1.0</h1>");
});

//binding the server with port number.
app.listen(port,()=>{
    console.log(`Server has started at ${port}`);
});

