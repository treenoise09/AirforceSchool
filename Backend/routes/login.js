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
    if(result.length === 0){
        return res.status(200).send({success: true})
    }
    const query2 = `
      INSERT INTO Historylogin (user_id, login_datetime, login_status) VALUES ( ?, CURRENT_TIMESTAMP(),'SUCCESS' )
    `
    await pool.execute(query2,[result[0].id])
    return res.redirect('/register/'+result[0].id);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: error.message });
  }
});





module.exports = router;
