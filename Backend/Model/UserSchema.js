import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name Is Required!"],
      minLength: [3, " the first name atleasst contain 3 char"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name Is Required!"],
      minLength: [3, " the last name atleasst contain 3 char"],
    },
    email: {
      type: String,
      required: [true, "Email Is Required!"],
      validate: [validator.isEmail, "please give valid email adress"],
    },
    phone: {
      type: String,
      required: [true, "Phone Number Is Required!"],
      minLength: [10, "please give the 10 digit number"],
      maxLength: [10, "please give the 10 digit number"],
    },
    nic: {
      type: String,
      required: [true, "NIC Is Required!"],
      minLength: [12, "please give the 12 digit number"],
      maxLength: [12, "please give the 12 digit number"],
    },
    dob: {
      type: Date,
      required: [true, "DOB Is Required!"],
    },
    gender: {
      type: String,
      required: [true, "Gender Is Required!"],
      enum: ["Male", "Female", "Transgender"],
    },
    
    password: {
      type: String,
      required: [true, "password Is Required!"],
      minLength: [8, "please give atleast 8 digit char"],
      select: false,
    },
    role: {
      type: String,
     
      enum: ["Admin", "Patient","Doctor"],
    },
    doctorDepartment: {
      type: String,
    },
    docAvatar: {
      public_id: String,
      url: String,
    },
  },
  { timestamps: true }
);
// this method is written for encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
     return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
// this method is written fior comparre the entered password and encrypt password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// this method is used for to generate token ....
userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};
export const User = mongoose.model("User", userSchema);
