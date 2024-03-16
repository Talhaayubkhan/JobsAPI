const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid authorization");
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      throw new UnauthenticatedError("Authentication invalid, try again");
    }

    // const user = await User.findById(decodedToken.id).select("-password");
    // req.user = user;
    req.user = { userId: decodedToken.userId, name: decodedToken.name };
    next();
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = authenticationMiddleware;
