import express from 'express';
import User from '../models/User';

let router = express.Router();

router.get('/', (req, res)=> {
  User.find((err, data)=> {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  User.findOne({
    _id: req.params.id
  }, {password:0,__v:0},(err, data)=> {
    if(data) {
      res.send(data);
    } else {
      res.sendStatus(404);
    }
  });
});

router.get('/:username&:password', (req, res)=> {
  User.findOne({
    username: req.params.username,
    password: req.params.password
  }, (err, data)=> {
    if (data) {
      res.send({
        result: true,
        user_id: data._id
      });
    } else {
      res.send({
        result: false,
        user_id: null
      });
    }

  });
});

module.exports = router;