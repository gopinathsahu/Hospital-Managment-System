import { Appointment } from "../Model/appointmentSchema.js";
import { asynccatcherror } from "../Middleware/asyncerrorhandler.js";

import ErrorHandler from "../Middleware/ErrorMiddleware.js";
import { User } from "../Model/UserSchema.js";
export const postAppointment = asynccatcherror(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !doctor_firstName ||
    !doctor_lastName ||
    !address
  ) {
    return next(new ErrorHandler("Please Fill the alll field", 400));
  }
  const isConflict = await User.find({
    firstName: doctor_firstName,
    lastName: doctor_lastName,
    role: "Doctor",
    doctorDepartment: department,
  });
  if (isConflict.length === 0) {
    return next(new ErrorHandler("Doctor not found", 404));
  }

  if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Doctors Conflict! Please Contact Through Email Or Phone!",
        400
      )
    );
  }
  const doctorId = isConflict[0]._id;
  const patientId = req.user._id;
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor: {
      firstName: doctor_firstName,
      lastName: doctor_lastName,
    },
    hasVisited,
    address,
    doctorId,
    patientId,
  });
  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment Send!",
  });
});

export const getAppointment = asynccatcherror(async (req, res, next) => {
  const getall = await Appointment.find();
  res.status(200).json({
    success: true,
    getall,
  });
});
export const updateAppointment = asynccatcherror(async (req, res, next) => {
  const { id } = req.params;
  let Appointmentupdate = await Appointment.findById(id);
  if (!Appointmentupdate) {
    return next(new ErrorHandler("Appointment not found", 404));
  }
  Appointmentupdate = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "update successfully",
    Appointmentupdate,
  });
});
export const deleteAppointment = asynccatcherror(async (req, res, next) => {
  const { id } = req.params;
  const deletedetails = await Appointment.deleteOne();
  if (!deletedetails) {
    return next(new ErrorHandler("Appointment not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Appointment deleted  successfully",
  });
});
