const express = require('express');

const router = express.Router();

//consuming the food model
const foodModel = require('../model/Food');
 
//Database Connection
var con = require('../model/database');
//loading multer module
const multer = require('multer');

//settingup multer for file upload
const multerStorage = multer.diskStorage({
     filename:(req,file,cb)=>{
        cb(null,Date.now()+".jpg");
     },
     destination:'public/uploads/'
});

const upload = multer({storage:multerStorage});


router.get('/foods',(req,res)=>{
    //res.status(200).json(foodModel);
     const SQL="select * from foods";
     con.query(SQL,(error,result)=>{
         if(error) throw error;
         else{
            res.status(200).json(result);
         }
     }); 
});
//adding a new food 
router.post('/food',upload.single('avatar'),(req,res)=>{
   /*
      req.body ==> Text Based Data
      req.file ==> File Based Data
   */
  
//   res.status(200).json({
//     'data':req.body,
//     'file':req.file
//   });
  
 
//  res.status(200).json({
//     'info':req.body,
//     'image':'http://localhost:4000/uploads/'+req.file.filename
//  });
 

 const SQL=`
            insert into foods(food_name,food_desc,food_price,food_pic)
            value(
                '${req.body.food_name}',
                '${req.body.food_desc}',
                ${req.body.food_price},
                'http://localhost:4000/uploads/${req.file.filename}'
            )
 `;
     con.query(SQL,(err,result)=>{
          if(err) res.status(200).json({'message':err});
          else{
              res.status(200).json({'message':'success'});
          }
     });
    


});

module.exports =  router;
console.log('Food Module is Created');