const express=require('express')
const router=express.Router();
const{Reg,Log, Bookings,Check_booking}=require("../controller/product")


router.route("/reg").post(Reg)
router.route("/log").post(Log)
router.route("/bok").post(Bookings)
router.route("/check").post(Check_booking)

module.exports=router;

