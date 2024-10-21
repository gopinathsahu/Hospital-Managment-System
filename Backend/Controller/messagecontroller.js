import { Message } from "../Model/messageSchema.js";
import { asynccatcherror } from "../Middleware/asyncerrorhandler.js";
import ErrorHandler from "../Middleware/ErrorMiddleware.js";
export const sendMessage = asynccatcherror(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return  next ( new ErrorHandler("please fill the full form ",400));
  }
  await Message.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });
  res.status(200).json({
    success: true,
    messaage: "message sent successfully",
  });
});
 export const getall=asynccatcherror(async(req,res,next)=>{
      const message=await Message.find();
      res.status(200).json({
       success:true,
       message 
      })
 })