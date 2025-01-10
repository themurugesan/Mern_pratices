const Formschemadb = require("../Model/Formschema");

const Updatefilename = async (req, res) => {
  try {
    const file = req.body;
    const check = await Formschemadb.findOne({ name: file.name });
    // const education = file.education;
    if (check) {
      const chech2 = await Formschemadb.updateOne(
        { name: file.name, "education.Qualification": file.education.Qualification },
        {
          $set: {
            "education.$.Board": file.education.Board,
          },
        },{
            new : true
        }
      );

      console.log(chech2, "check222222222");

      if(chech2){
        return res.status(200).json({msg:"Updated success",code:200})
      }
    }
  } catch (error) {
    console.log(error.message);

    return res.status(200).json({ msg: "Something went wrong", code: 500 });
  }
};
module.exports = Updatefilename;
