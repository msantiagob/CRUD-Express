const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

// routes
app.get('/', (req, res) => {
  res.send('Welcome to');
});

// mongodb connection
mongoose.set('strictQuery', true);
mongoose
  .connect(
    'mongodb+srv://santiago:2866768@cluster0.yh9zc71.mongodb.net/Exhibitor?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log('listening on port');
});
