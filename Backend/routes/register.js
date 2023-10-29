const express = require("express");
const { body, validationResult } = require("express-validator");
const pool = require("../db");

const router = express.Router();
function decodeBase64Image(dataString) {
  const matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid base64 input string");
  }

  return Buffer.from(matches[2], "base64");
}
router.post("/", async (req, res) => {
  try {
    let {
      applicantType,
      degree,
      courseType,
      instituteName,
      gpa,
      province,
      educationStatus,
      citizenID,
      firstName,
      lastName,
      dob,
      ethnicity,
      nationality,
      religion,
      fatherPrefix,
      fatherFirstName,
      fatherLastName,
      raceFather,
      nationalityFather,
      contactNumberFather,
      fatherStatus,
      motherPrefix,
      motherFirstName,
      motherLastName,
      raceMother,
      nationalityMother,
      contactNumberMother,
      motherStatus,
      ethnicityEmergency,
      nationalityEmergency,
      contactPhone,
      militaryCourseCompleted,
      militaryCourseYear,
      childOfMilitary,
      dataComplete,
      webpageFormat,
      readableText,
      webpageSpeed,
      usability,
      newsChannels,
      reasonForApplying,
      promoInterest,
      addressRegistered,
      addressCurrent,
    } = req.body;

    let imagePhoto = decodeBase64Image(req.body.imagePhoto);
    let imageIDCard = decodeBase64Image(req.body.imageIDCard);

    const query = `
            INSERT INTO register (
                imagePhoto, imageIDCard, applicantType, 
                degree, courseType, instituteName, 
                gpa, province, educationStatus, 
                citizenID, firstName, lastName, dob, 
                ethnicity, nationality, religion, 
                fatherPrefix, fatherFirstName, fatherLastName, 
                raceFather, nationalityFather, contactNumberFather, 
                fatherStatus, motherPrefix, motherFirstName, 
                motherLastName, raceMother, nationalityMother, 
                contactNumberMother, motherStatus, ethnicityEmergency, 
                nationalityEmergency, contactPhone, 
                militaryCourseCompleted, militaryCourseYear, 
                childOfMilitary, dataComplete, webpageFormat, 
                readableText, webpageSpeed, usability, 
                newsChannels, reasonForApplying, promoInterest, 
                addressRegistered, addressCurrent
            ) VALUES (
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?, ?,
                ?, ?, ?, ?,
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?,
                ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?)
        `;

    await pool.execute(query, [
      imagePhoto,
      imageIDCard,
      applicantType,
      degree,
      courseType,
      instituteName,
      gpa,
      province,
      educationStatus,
      citizenID,
      firstName,
      lastName,
      dob,
      ethnicity,
      nationality,
      religion,
      fatherPrefix,
      fatherFirstName,
      fatherLastName,
      raceFather,
      nationalityFather,
      contactNumberFather,
      fatherStatus,
      motherPrefix,
      motherFirstName,
      motherLastName,
      raceMother,
      nationalityMother,
      contactNumberMother,
      motherStatus,
      ethnicityEmergency,
      nationalityEmergency,
      contactPhone,
      militaryCourseCompleted,
      militaryCourseYear,
      childOfMilitary,
      dataComplete,
      webpageFormat,
      readableText,
      webpageSpeed,
      usability,
      newsChannels,
      reasonForApplying,
      promoInterest,
      addressRegistered,
      addressCurrent,
    ]);

    res.send({ success: true });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const query = "SELECT * FROM register WHERE id=?";
    let result = await pool.execute(query, [req.params.id]);
    if (!result[0]) {
      return res.status(404).json({ success: false });
    } else {
      return res.json(result[0]);
    }
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, message: "Error retrieving user" });
  }
});

module.exports = router;
