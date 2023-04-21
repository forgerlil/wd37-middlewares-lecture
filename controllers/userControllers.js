const serveUser = (req, res, next) => {
  try {
    if (Math.random() > 0.5) return res.send("Here's the user");
    throw new Error('ERR_NO_USR');
  } catch (error) {
    next(error);
  }
};

module.exports = serveUser;
