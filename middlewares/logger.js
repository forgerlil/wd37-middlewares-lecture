const ErrorHandler = require('../utils/ErrorHandler');

const logger = (req, res, next) => {
  try {
    console.log('You have reached the users route!');
    if (Math.random() > 0.5) throw new ErrorHandler('ERR_INVALID_BODY', 400);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = logger;
