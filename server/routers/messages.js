/**
 * Created by zhangyiru on 16-8-16.
 */

import express from 'express';// eslint-disable-line no-unused-console
import Message from '../models/Message';


let router = express.Router();

router.get('/', (req, res)=> {
  Message.find((err, data)=> {
    res.send(data);
  });
});

router.put('/', (req, res)=> {
  Message.findById(req.query.id, (err, message)=> {
    message.talk.push(req.body);
    Message.update({_id: message._id}, message, (err, data)=> {
      res.send({
        error: err,
        data: message.talk
      });
    });
  });
});

router.get('/find', (req, res)=> {
  Message.findById(req.query.id, (err, message)=> {
    res.send({
      error: err,
      data: message
    });
  });
});

module.exports = router;