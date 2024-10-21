import express from "express";
import { getall, sendMessage } from "../Controller/messagecontroller.js";
import {isAdminAuthonticated} from '../Middleware/auth.js'
const router =express.Router();
router.post('/send',sendMessage);
router.get('/getall',isAdminAuthonticated,getall);
export default router;