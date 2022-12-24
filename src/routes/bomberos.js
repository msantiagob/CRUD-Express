const express = require('express');
const bomberosSchema = require('../models/bomberos');
const router = express.Router();

// create
router.post('/bomberos', (req, res) => {
  const bomberos = bomberosSchema(req.body);
  bomberos
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all
router.get('/bomberos', (req, res) => {
  bomberosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// update a
router.patch('/bomberos/:id', (req, res) => {
  const { id } = req.params;
  const { date, am6, am9, pm12, pm3, pm6 } = req.body;
  bomberosSchema
    .updateOne({ _id: id }, { $set: { date, am6, am9, pm12, pm3, pm6 } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a 
router.delete('/bomberos/:id', (req, res) => {
  const { id } = req.params;
  bomberosSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
