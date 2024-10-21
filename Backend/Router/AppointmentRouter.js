import express from "express";
import {
  deleteAppointment,
  getAppointment,
  postAppointment,
  updateAppointment,
} from "../Controller/appointmentController.js";
import {
  isAdminAuthonticated,
  isPatientAuthonticated,
} from "../Middleware/auth.js";
const router = express.Router();
router.post("/appointment/", isPatientAuthonticated, postAppointment);
router.get("/appointment/getall", isAdminAuthonticated, getAppointment);
router.put("/appointment/update/:id", isAdminAuthonticated, updateAppointment);
router.delete("/appointment/delete/:id", isAdminAuthonticated, deleteAppointment);
export default router;
