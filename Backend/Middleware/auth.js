import {asynccatcherror} from "./asyncerrorhandler.js";
import ErrorHandler from "./ErrorMiddleware.js";
import {User} from "../Model/UserSchema.js";
import jwt from "jsonwebtoken";
export const isAdminAuthonticated = asynccatcherror(async (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) {
    return next(new ErrorHandler("Dashboard user is  not Authonticated", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
    // this ccode for the authorization
  if (req.user.role !== "Admin") {
    return next(
      new ErrorHandler(
        `${req.user.role} not authorized for this resources`,
        400
      )
    );
  }
  next();
});

export const isPatientAuthonticated = asynccatcherror(async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
      return next(new ErrorHandler("Patient not Authonticated", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Patient") {
      return next(
        new ErrorHandler(
          `${req.user.role} not authorized for this resources`,
          400
        )
      );
    }
    next();
  });