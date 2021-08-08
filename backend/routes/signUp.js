const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../db/models')

router
.route('/')
.post(async (req, res) => {
  console.log(req.body)
  const {userName, email, password, city, phone} = req.body;
  // const curUser = await User.findOne({where:email});
  // console.log(curUser)
  // if (!curUser) {
    if (userName && email && password && city && phone) {
      try {
        const pass = await bcrypt.hash(password, 7);
        const createUser = await User.create({email, password: pass, Name: userName, City: city, Userphonenumber: phone}, {returning: true, plain: true});
        req.session.user = {id: createUser.id, name: createUser.Name};
        const {id, Name} = createUser;
        return res.json({id, Name})
      } catch (error) {
        return res.sendStatus(500)
      }
    }
  
  return res.sendStatus(400)
})

module.exports = router;
