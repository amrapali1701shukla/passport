var express = require('express');
var router = express.Router();
const usersModel = require('./users');
const passport = require('passport');
const localStrategy = require('passport-local');
// const tweet = require('./tweet');

passport.use(new localStrategy(usersModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup',function(req,res){
  res.render('sign');
});

router.get('/login',function(req,res){
  res.render('login');
});

router.post('/register',function(req,res){
  const newUser = new usersModel({
    username:req.body.username,
    name:req.body.name,
    email:req.body.email
  })
  usersModel.register(newUser,req.body.password)
  .then(function(User){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/profile');
    })
  })
})

router.post('/login',passport.authenticate('local',{
  successRedirect:'/profile',
  failureRedirect: '/'
}), function(req,res){
})

router.get('/profile',isLoggedIn,function(req,res){
  res.render('profile');
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/');
  }
}

router.get('/logout',function(req,res){
  req.logOut();
  res.redirect('/');
})

module.exports = router;
