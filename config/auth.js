// middleware for private routes / routes that require a logged in user
module.exports = function isLoggedIn(req, res, next) {
  // pass the req,res to next middleware / route handler function
  if (req.isAuthenticated()) return next();
  // redirect to login page if user is not already logged in
  res.redirect("/auth/google");
};
