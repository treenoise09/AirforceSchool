const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let {
      citizenID,
    } = req.body;

    const query = `
        SELECT * FROM Register WHERE citizenID = ?        
    `;

    const result = await pool.execute(query, [
      citizenID,
    ]);
    if(!result){
        res.status(200).send({success: true})
    }
    res.redirect('/register/'+result[0].id);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, error: error.message });
  }
});





module.exports = router;
