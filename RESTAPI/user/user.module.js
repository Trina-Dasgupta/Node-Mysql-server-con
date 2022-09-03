/*User related all api will goes here
  e.g user signup,signin,user curd
*/
const express = require('express');
//Create an Route service of express
const router = express.Router();
//consume User Model.
const userModel = require('../model/User');
//getting all users information 
router.get('/users',(req,res)=>{
   
    res.status(200).json(userModel);

});
//adding new users.
router.post('/signup',(req,res)=>{
      res.status(200).json({'data':req.body});

});
//updating users
router.put('/user/:id',(req,res)=>{
       res.status(200).json(
        {'id':req.params.id,
        'message':'updated'
        });
});

//deleting users
router.delete('/user/:id',(req,res)=>{
      res.status(200).json(
        {'id':req.params.id,
        'message':'Deleted'
        });
});


//make router object avialble to entire application.
module.exports = router;


console.log('User Module is Created');

