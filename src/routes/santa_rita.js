const express = require('express');
const santaRitaSchema = require('../models/santa_rita');
const router = express.Router();

// create
router.post('/santa-rita', (req, res) => {
  const santaRita = santaRitaSchema(req.body);
  santaRita
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all
router.get('/santa-rita', (req, res) => {
  santaRitaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a
router.patch('/santa-rita/:id', (req, res) => {
  const { id } = req.params;
  const { date, am6, am9, pm12, pm3, pm6 } = req.body;
  santaRitaSchema
    .updateOne({ _id: id }, { $set: { date, am6, am9, pm12, pm3, pm6 } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a
router.delete('/santa-rita/:id', (req, res) => {
  const { id } = req.params;
  santaRitaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
