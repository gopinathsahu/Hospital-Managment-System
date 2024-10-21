import express from "express";
import {
  register,
  logIn,
  addAdmin,
  getAllDoctor,
  getUserDetails,
  adminLoggedOut,
  patientLoggedOut,
  addNewDoctor
} from "../Controller/UserController.js";
import {
  isAdminAuthonticated,
  isPatientAuthonticated,
} from "../Middleware/auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", logIn);
router.post("/admin/newadmin", isAdminAuthonticated, addAdmin);
router.get("/user/doctors", getAllDoctor);
router.get("/patient/me", isPatientAuthonticated, getUserDetails);
router.get("/admin/me", isAdminAuthonticated, getUserDetails);
router.get("/admin/logout", isAdminAuthonticated, adminLoggedOut);
router.get("/patient/logout", isPatientAuthonticated, patientLoggedOut);
router.post("/admin/newdoctor", isAdminAuthonticated, addNewDoctor);

export default router;
