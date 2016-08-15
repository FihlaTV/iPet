import express from 'express';
import Doctor from '../models/Doctor';

let router = express.Router();

router.get('/', (req, res)=> {
  Doctor.find((err, data)=> {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Doctor.findOne({
    id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});

module.exports = router;