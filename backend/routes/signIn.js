const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const {User} = require('../db/models');

router.route('/')
.get((req, res) => {
  if (req.query.err) res.locals.err = 'Incorrect login or password';
  res.render('login')
})
.post(async(req, res) => {
  console.log("12345")
  console.log(req.body, "signIN <<<<<<<<<<<<<<<========================");
  const {email, password} = req.body;
  if (email && password) {
    const currentUser = await User.findOne({where:{email}});
    console.log(currentUser);
    if (currentUser && await(bcrypt.compare(password, currentUser.password))) {
      req.session.user = {id:currentUser.id, name:currentUser.Name};
      console.log( req.session.user )
      return res.json({id: currentUser.id, email: currentUser.email, Name: currentUser.Name, City: currentUser.City, phone: currentUser.Userphonenumber})
    } else {
      return res.redirect('/signin/?err=true')
    }
  } else {
    return res.redirect('/login/?err=true')
  }
})

module.exports = router;
