var express= require('express');
var router=express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
router.use(bodyParser.json());
 
 
router.get('/favorites',function(req,res){
  Favorite.findById(req.params.id).populate('movies').exec(function(err,foundfavoriteList){
	  if(err){
            console.log(err)
       }else{
            res.render('favorites',{favorites:foundfavoriteList})
        }
    })		     
})


function hashPassword(str){
    hashingSecret="fuckoff"
    var hash= crypto.createHmac('sha256',hashingSecret).update(str).digest('hex');
    return hash    
    } 


function createRandomString(strlength){
    var possiblecharacters='abcdefghijklmnopqrstuvwxyz';
    var str='';
    for(i=1;i<=strlength;i++){
        var randomChar=possiblecharacters.charAt(Math.floor(Math.random()*possiblecharacters.length))
        str+=randomChar   
    }
    return str;
}


module.exports=router;