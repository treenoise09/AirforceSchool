const express = require("express");
const fs = require('fs').promises;
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
      imagePhotoType,
      imageIDCardType,
      PrefixEmergency,
      firstnameEmergency,
      lastnameEmergency
    } = req.body;
    console.log(req.body)

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
                contactNumberMother, motherStatus, PrefixEmergency, 
                firstnameEmergency,lastnameEmergency, contactPhone, 
                militaryCourseCompleted, militaryCourseYear, 
                childOfMilitary, dataComplete, webpageFormat, 
                readableText, webpageSpeed, usability, 
                newsChannels, reasonForApplying, promoInterest, 
                addressRegistered, addressCurrent,
                imagePhotoType,
                imageIDCardType,
                ethnicityEmergency,
                nationalityEmergency
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
                ?, ?, ?,
                ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?, ?, 
                ?, ?,
                ?,
                ?,
                ?,
                ?)
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
      PrefixEmergency,
      firstnameEmergency,
      lastnameEmergency,
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
      imagePhotoType,
      imageIDCardType,
      ethnicityEmergency,
      nationalityEmergency
    ]);

    return res.send({ success: true });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ success: false, error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const query = "SELECT * FROM register WHERE id=?";
    const rows = await pool.execute(query, [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ success: false });
    } else {
      const user = rows[0]
      // Convert LONGBLOB data to Base64 strings
      // Assuming imagePhoto and imageIDCard are stored as LONGBLOB in the database
      if (user.imagePhoto) {
        console.log(user.imagePhoto)
        user.imagePhoto = `data:image/${user.imagePhotoType};base64,${Buffer.from(user.imagePhoto).toString('base64')}`;
      }

      if (user.imageIDCard) {
        user.imageIDCard = `data:image/${user.imageIDCardType};base64,${Buffer.from(user.imageIDCard).toString('base64')}`;

      }
      return res.json({ data: user, success: true });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ success: false, message: "Error retrieving user" });
  }
});


module.exports = router;
