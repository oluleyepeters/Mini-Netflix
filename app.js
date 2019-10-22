var express = require('express'),
	app = express(),
	passport = require('passport'),
	bodyParser =  require('body-parser'),
	LocalStrategy = require('passport-local'),
	methodOverride =  require('method-override'),
	multer = require('multer'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	passportLocalMongoose = require('passport-local-mongoose'),
	flash = require('connect-flash'),
	cookieSession = require('cookie-session')

	app.use(methodOverride('_method'))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended : true}))
	app.set('view engine', 'ejs')
	app.use(express.static(__dirname+'/public'))

	app.use(passport.initialize());
	app.use(passport.session());

	var favoriteRoutes = require('./routes/favorites')

	app.use(favoriteRoutes);
	
	app.get('/', function(req, res){
		res.render('HomePage')
	})
	

	var PORT = process.env.PORT || 8080
	app.listen(PORT, function(req,res){
		console.log('Server is running')
	})