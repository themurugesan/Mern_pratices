const Auth = require("../Components/Auth");
const Createtoken = require("../Components/Createtoken");
const Deleteindb = require("../Components/Deleteindb");
const { Formdata, GetFormdata } = require("../Components/Formdata");
const Getdata = require("../Components/Getdata");
const Getsuccessdata = require("../Components/Getsuccessdata");
const Hashgeneration = require("../Components/Hashgeneration");
const Login = require("../Components/Login");
const Postdata = require("../Components/Postdata");
const postmongoform = require("../Components/postmongoform");
const Pullarrayofobject = require("../Components/Pullarrayofobject");
const pullrequest = require("../Components/Pullrequest");
const Senddata = require("../Components/Senddata");
const Updatefilename = require("../Components/Updatefilename");
const Updateformdata = require("../Components/Updateformdata");

const router = require("express").Router();

router.route("/arrayupdate").post(Updatefilename)
router.route("/arraypull").post(pullrequest)
router.route("/data").post(Postdata,Getsuccessdata);
router.route("/getdata").get(Getdata)
router.route("/formdata").post(Hashgeneration,Formdata)
router.route("/getformdata").get(GetFormdata)
router.route("/updateformdata").post(Updateformdata)
router.route("/postmongo").post(postmongoform)
router.route("/pullarrayofobject").post(Pullarrayofobject)
router.route("/deleteindb").post(Deleteindb)
router.route("/hashgeneration").post(Hashgeneration)
router.route("/token").post(Createtoken)



// Login
router.route("/login").post(Auth,Login);
router.route("/senddata").post(Auth,Senddata)


// router.route("/muthu").get(Getdata)

module.exports = router;