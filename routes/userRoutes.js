const express = require('express');
const userRouter = express.Router();
const logger = require('../middlewares/logger');
const serveUser = require('../controllers/userControllers');

userRouter.use(logger);

userRouter.get('/', serveUser);

module.exports = userRouter;
