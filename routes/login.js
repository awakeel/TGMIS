var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var users = require('../models/users');
/* GET users listing. */
router.post('/', function (req, res, next) {
users
    .login(req.body, function (err, rows) {
        
       if(rows.length === 0){ 
           res.json({message:'invalid username or password'});
       }else{
           jwt.sign({ user: rows }, 'test', function (err, token) {
               res.json({ message: 'Logged in succcessful.',token:token });
           }); 
       }
        
    });

   
    
})
module.exports = router;