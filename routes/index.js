var express = require('express');
var router = express.Router();
var User = require('./users.js');
var passport = require('passport');
const request=require('request');
var syncrequest = require('sync-request');
var passportlocal = require('passport-local');
passport.use(new passportlocal(User.authenticate()));
let namee = undefined;
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/register', function (req, res) {
  var newUser = new User({
    username: req.body.username,
    email:req.body.email,
    phone: req.body.phone,
  })

  User.register(newUser, req.body.password)
    .then(function (registereduser) {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/profile')
      })
    })
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/'
}), function (req, res) { });

router.get('/logout', function (req, res) {
  req.logOut();
  res.redirect('/')
})

// router.get('/profile', isloggedin, function (req, res) {
//   User.findOne({username:req.session.passport.user})
//   .then((userfound) => {
//     // res.render('home', { namee,userfound})
//     let alldata=[];
//     userfound.list.forEach((data)=>{
//       let url = `https://omdbapi.com/?apikey=7a005aa0&i=${data}`;
//       // request(url,function(err,response,body){
        
//       //   // console.log("alldata",alldata,alldata.length);
//       // })
//       request(url,adddata)
//     })
    
//       console.log("alldata", alldata, alldata.length);
//       res.send(alldata);
//     // res.render('home',({alldata:alldata,namee}));
//   })
  
// });

// function adddata(err,response,body) {
//   let tempdata = JSON.parse(body);
//   let obj = {
//     image: tempdata.Poster,
//     Type: tempdata.Type
//   }
//   alldata.push(obj);
//   console.log(obj);
// }


router.get('/profile', isloggedin,function (req, res) {
  User.findOne({ username: req.session.passport.user })
  .then((userfound) => {
      let alldata = [];
      userfound.list.forEach((data) => {
        let url = `https://omdbapi.com/?apikey=7a005aa0&i=${data}`;
        let tdata=syncrequest('GET',url)
        var tempdata = JSON.parse(tdata.getBody('utf8'));
        alldata.push(tempdata)
      })
      // console.log("alldata", alldata, alldata.length);
      res.render('home',({alldata,namee}));
    })
});

// router.get('/profile', isloggedin, async function (req, res) {
//     let userfound=await User.findOne({ username: req.session.passport.user })
//       let alldata = [];
//       await userfound.list.forEach(async(data) => {
//         let url = `https://omdbapi.com/?apikey=7a005aa0&i=${data}`;
//         await request(url, function (err, response, body) {
//           let tempdata = JSON.parse(body);
//           alldata.push(tempdata);
//           console.log(tempdata);
//         })
//       })
//       console.log("alldata", alldata, alldata.length);
//       res.send(alldata);
// });


router.get('/search',isloggedin,function (req, res){
  let url = `https://www.omdbapi.com/?i=tt3896198&apikey=7a005aa0&s=${req.query.name}`;
  var namee=req.query.name;
  console.log(namee);
  // let url = "https://www.omdbapi.com/?i=tt3896198&apikey=7a005aa0&s=avenger";
  request(url,function(err,response,body){
    let obj=JSON.parse(body);
    obj=obj.Search;
    // console.log(obj);
    res.render('new',{obj,namee});
  })

  
  console.log(url);
})

router.get('/info/:id',isloggedin,function (req, res){
  let url=`https://omdbapi.com/?apikey=7a005aa0&i=${req.params.id}`;
  request(url,function (err,response,body){
    let data=JSON.parse(body);
    res.render('viewdetails',{data,namee});
  })
  
})

router.get('/like/:id',isloggedin,function (req, res){
  let id=req.params.id;
  User.findOne({username: req.session.passport.user})
  .then((user) =>{
    let index=user.list.indexOf(id);
    if(index == -1){
      user.list.unshift(id)
      user.save()
        .then(() => {
          res.redirect('/profile');
        })     
    }
    else{
      res.redirect('/profile');
    }
  })
})

router.get('/delete/:id',function(req, res){
  let id = req.params.id;
  User.findOne({ username: req.session.passport.user })
    .then((user) => {
      let index = user.list.indexOf(id);
      if (index == -1) {
        res.redirect('/profile');
      }
      else {
        console.log(user.list);
        user.list.splice(index, 1);
        user.save()
        .then(()=>{
          console.log(user.list);
          res.redirect('/profile');
        })
      }
    })
})

router.get('/viewprofile',function(req,res){
  User.findOne({username: req.session.passport.user})
  .then((data)=>{
    res.render('profile', { data,namee })
  })
})

router.get('/editprofile',function(req,res){
  User.findOne({ username: req.session.passport.user })
    .then((data) => {
      res.render('editprofile', { data, namee })
    })
})

router.post('/save',function(req, res){
  User.findOne({ username: req.session.passport.user })
  .then((data) => {

  })
})

router.post('/updatepassword',function(req, res){
  User.findOne({ username: req.session.passport.user })
  .then((data) => {
    data.changePassword(req.body.oldpassword,req.body.newpassword,function(err){
      if(err){
        res.redirect('/profile')
      }
      else{
        res.redirect('/logout');
      }
    })
  })

})

router.post('/savepersonal',function(req,res){
  User.findOne({username: req.session.passport.user})
  .then((userfound)=>{
    userfound.age=req.body.age;
    userfound.dob=req.body.dob;
    userfound.gender=req.body.gender;
    userfound.save().then(()=>{
      res.redirect('viewprofile');
    })
  })
})

router.post('/savedetails',function(req,res){
  User.findOne({ username: req.session.passport.user })
    .then((userfound) => {
      userfound.Address = req.body.Address;
      userfound.phone = req.body.phone;
      userfound.email = req.body.email;
      userfound.save().then(() => {
        res.redirect('viewprofile');
      })
    })
})

function isloggedin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/');
  }
}


module.exports = router;
