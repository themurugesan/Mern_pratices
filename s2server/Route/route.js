const getmongo = require("../components/getmongo")
const postmongo = require("../components/postmongo")

const routes=require("express").Router()

routes.route("/getmongo").get(getmongo)
routes.route("/postmongo").post(postmongo)

module.exports=routes