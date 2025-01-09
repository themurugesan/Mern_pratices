const { Formdata, GetFormdata } = require("../Components/Formdata");
const Getdata = require("../Components/Getdata");
const Getsuccessdata = require("../Components/Getsuccessdata");
const Postdata = require("../Components/Postdata");
const postmongoform = require("../Components/postmongoform");
const Updateformdata = require("../Components/Updateformdata");

const router = require("express").Router();

router.route("/data").post(Postdata,Getsuccessdata);
router.route("/getdata").get(Getdata)
router.route("/formdata").post(Formdata)
router.route("/getformdata").get(GetFormdata)
router.route("/updateformdata").post(Updateformdata)
router.route("/postmongo").post(postmongoform)

// router.route("/muthu").get(Getdata)

module.exports = router;