module.exports = (req, res, next) => {
  console.log("User", req.user);
  if (!req.user) return res.status(401).json("Unauthorized");
  next();
};
