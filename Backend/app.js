import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import fileupload from "express-fileupload";
import connectedToDb from "./Database/database.js";
import router from "./Router/messageRouter.js";
import { errormiddleware } from "./Middleware/ErrorMiddleware.js";
import userRouter from "./Router/UserRouter.js";
import appointmentRouter from "./Router/AppointmentRouter.js";
const app = express();
config({ path: "./config/.env" });
app.use(
  cors({
    origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieparser());
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", router);
app.use("/api/v1/", userRouter);
app.use("/api/v1/", appointmentRouter);
connectedToDb();
app.use(errormiddleware);
export default app;
