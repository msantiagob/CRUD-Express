const express = require('express');
const calendarSchema = require('../models/calendar');
const router = express.Router();

// create user
router.post('/calendar', (req, res) => {
  const calendar = calendarSchema(req.body);
  calendar
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get('/calendar', (req, res) => {
  calendarSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get('/calendar/:id', (req, res) => {
  const { id } = req.params;
  calendarSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.patch('/calendar/:id', (req, res) => {
  const { id } = req.params;
  const { date, am6, am9, pm12, pm3, pm6 } = req.body;
  calendarSchema
    .updateOne({ _id: id }, { $set: { date, am6, am9, pm12, pm3, pm6 } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a user
router.delete('/calendar/:id', (req, res) => {
  const { id } = req.params;
  calendarSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
