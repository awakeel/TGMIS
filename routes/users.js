var express = require('express');
var router = express.Router();
var users = require('../models/users');
var jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/:id?', verifyToken, function (req, res, next) {
  jwt.verify(req.token, 'test', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      if (req.params.id) {
        users.getById(req.params.id, function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json({

              message: 'Autenticated...',
              authData,
              data: rows
            });
          }
        });
      } else {
        users.getAll(function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json({

              message: 'Autenticated...',
              authData,
              data:rows
            });
          }
        });
      }
 
    }
  });


    
  })
 router.post('/',function(req,res){
jwt
  .verify(token, 'test', function (err, decoded) {
     console.log(decoded) // bar
   });
    res.json('Changes Post');  
 })
module.exports = router;
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}