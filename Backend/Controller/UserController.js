import { User } from "../Model/UserSchema.js";
import { asynccatcherror } from "../Middleware/asyncerrorhandler.js";
import { generateToken } from "../utils/jwttoken.js";
import ErrorHandler from "../Middleware/ErrorMiddleware.js";
import cloudinary from 'cloudinary';
export const register = asynccatcherror(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    gender,
    dob,
    password
   
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !gender ||
    !dob ||
    !password 
    
  ) {
    return next(new ErrorHandler("please fill the all fields...! ", 400));
  }

  let user = await User.findOne({ email });
  if (user) {
    return next(
      new ErrorHandler("User already exist with same email adress ", 400)
    );
  }
  user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    gender,
    dob,
    password,
    role :'Patient'
  });
  generateToken(user, "user registered successfully....", 200, res);
});

export const logIn = asynccatcherror(async (req, res, next) => {
  const { email, password, confirmPassword, role } = req.body;
  if (!email || !password || !confirmPassword || !role) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Password or email", 400));
  }
  if (password !== confirmPassword) {
    return next(new ErrorHandler("password didn't match ", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Password or email", 400));
  }
   if (role != user.role) {
     return next(new ErrorHandler("user with this role not found", 400));
   }
  generateToken(user, "user logged in  successfully....", 200, res);
});

export const addAdmin = asynccatcherror(async (req, res, next) => {
  const { firstName, lastName, email, phone, nic, gender, dob, password } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !gender ||
    !dob ||
    !password
  ) {
    return next(new ErrorHandler("please fill the all fields...! ", 400));
  }
  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler("Admin with this email already exist", 400));
  }
  const admin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    gender,
    dob,
    password,
    role: "Admin",
  });
  res.status(200).json({
    success: true,
    message: "New Admin isRegistered...!",
  });
});

export const getAllDoctor = asynccatcherror(async (req, res, next) => {
  const doctors = await User.find({ role: "Doctor" });
  if (!doctors) {
    return next(new ErrorHandler("No Doctor are present...sorry", 400));
  }
  res.status(200).json({
    success: true,
    doctors,
  });
});
export const getUserDetails = asynccatcherror(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});
export const adminLoggedOut = asynccatcherror(async (req, res, next) => {
  res
    .status(200)
    .cookie("adminToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "user logged out successfully....",
    });
});

export const patientLoggedOut = asynccatcherror(async (req, res, next) => {
  res
    .status(200)
    .cookie("patientToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "user logged out successfully....",
    });
});

export const addNewDoctor = asynccatcherror(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Doctor Avatar Required!", 400));
  }
  const { docAvatar } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(docAvatar.mimetype)) {
    return next(new ErrorHandler("File Format Not Supported!", 400));
  }
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    doctorDepartment,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !password ||
    !doctorDepartment ||
    !docAvatar
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(
      new ErrorHandler("Doctor With This Email Already Exists!", 400)
    );
  }
  const cloudinaryResponse = await cloudinary.v2.uploader.upload(
    docAvatar.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    console.log(cloudinaryResponse.error);
    return next(
      new ErrorHandler("Failed To Upload Doctor Avatar To Cloudinary", 500)
    );
  }
  const doctor = await User.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    role: "Doctor",
    doctorDepartment,
    docAvatar: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "New Doctor Registered",
    doctor,
  });
});
