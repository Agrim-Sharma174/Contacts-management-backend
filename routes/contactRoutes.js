const express = require("express");
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");

//* 2nd iteration- router.route("/").get(getContacts);

// 1st iteration- 
//  router.route("/").get((req, res) => {
//     res.status(200).json({message: "Get all contacts"});
// });

//* 2nd iteration- router.route("/").post(createContact);

// 1st iteration- 
//  router.route("/").post((req, res) => {
//     res.status(200).json({message: "Create contact"});
// });
//* 2nd iteration- router.route("/:id").get(getContact);
// 1st iteration- 
//  router.route("/:id").get((req, res) => {
//     res.status(200).json({message: `Get contacts for ${req.params.id}`});
// });
//* 2nd iteration- router.route("/:id").put(updateContact);
// 1st iteration- 
//  router.route("/:id").put((req, res) => {
//     res.status(200).json({message: `Update contacts for ${req.params.id}`});
// });
//* 2nd iteration- router.route("/:id").delete(deleteContact);
// 1st iteration- 
// router.route("/:id").delete((req, res) => {
//     res.status(200).json({message: `Delete contacts for ${req.params.id}`});
// });

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;


//! NOTE: tHE COMMENTED CODES SHOW THAT THOSE WERE USED BEFORE THE CONTROLLERS WERE CREATED. THE SECOND WAY OF DOING THIS WAS TO USE THE CONTROLLERS. Ab isko bhi short karne ka tareeka hai, ki jo jo router.route("/").get() ya router.route("/").post() etc. hai, unko hum ek hi line me likh sakte hai, jaise ki niche likha hai.