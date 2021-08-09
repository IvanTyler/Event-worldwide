const express = require('express');
const db = require('../db/models');

const router = express.Router();

router.route('/')
  // .get(async (req, res) => {
  //   try {
  //     const allSubscribes = await db.Subscribe.findAll({
  //       where: { Userid: req.session.user.id }, include: [db.User, db.Event],
  //     });
  //     const allSubscribes = await db.Subscribe.findAll()
  //     return res.json(allSubscribes).status(200);
  //   } catch (error) {
  //     return res.sendStatus(500);
  //   }
  // })
  .post(async (req, res) => {
    console.log('dfsdfdsf---->', req.session.user.data);
    console.log(req.body);
    // const newEvent = await db.Event.create(req.body)
    // const newSubscribe = await db.Subscribe.create({ Userid: req.session.user.id, Eventid: newEvent.id })
    // res.json(newSubscribe);
  })
  .delete(async (req, res) => {
    console.log(req.body);
    try {
      const { id } = req.body;
      if (id) {
        await db.Subscribe.destroy({
          where: { id },
        });
        return res.sendStatus(200);
      }
      return res.sendStatus(418);
    } catch (error) {
      return res.sendStatus(500);
    }
  })
  // .patch((req, res) => {
  //   db = db.map((el) => {
  //     if (el.id === req.body.id) {
  //       el.status = !el.status;
  //     }
  //     return el;
  //   });
  //   res.json(db);
  // });

module.exports = router;
