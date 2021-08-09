const express = require('express');
const router = express.Router();


/* GET home page. */
router
.route('/')
.get(async (req, res)=> {
  console.log('ЗДЕСЯ')
  res.send('123');
})


module.exports = router;
