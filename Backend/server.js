import app from "./app.js";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});
let PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(` the server run a port number ${PORT}`);
});
