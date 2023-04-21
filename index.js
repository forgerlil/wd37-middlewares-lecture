const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const userRouter = require('./routes/userRoutes');
const cors = require('cors');

app.use(express.static('public'));
app.use(
  cors({ origin: 'https://myDeployedApp.com/', optionsSuccessStatus: 200 })
);

app.get('/', (req, res) => {
  console.log('Hello World!');
  res.send('All good');
});

app.use('/users', userRouter);
// app.use('/orders', orderRouter);

// ERROR HANDLER MIDDLEWARE!
app.use((err, req, res, next) => {
  // handle our errors!
  const errorLibrary = ['ERR_NO_USR', 'ERR_INVALID_BODY'];
  console.log('The error handler is dealing with the error!');
  return res.status(err.statusCode || 500).send(err.message);
});

app.listen(port, () => `Server up on port ${port}`);
