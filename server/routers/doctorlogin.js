import express from 'express';
import DoctorLogin from '../models/DoctorLogin';
import uuid from 'node-uuid';

let router = express.Router();
let sessionMap = [];

router.post('/', (req, res)=> {
  DoctorLogin.findOne({
    doctor_name: req.body.doctor_name,
    password: req.body.password
  }, (err, data)=> {

    if (data !== null) {
      let sessionId = uuid.v4();
      sessionMap.push({sessionId, doctorId: data._id});
      res.cookie('sessionId', sessionId);
      res.status(200).send(data._id);
    } else {
      res.sendStatus(403);
    }

  });
});


router.get('/cookie', (req, res)=> {
  let sessionId = req.cookies.sessionId;

  let exit = sessionMap.find((session)=> {
    return sessionId === session.sessionId;
  });
  if (exit) {
    res.status(200);
    res.send(exit.doctorId);
  } else {
    res.sendStatus(403);
  }


});


module.exports = router;