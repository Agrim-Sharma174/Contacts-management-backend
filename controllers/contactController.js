const asyncHandler = require("express-async-handler");

//@desc Get all the contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler( async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});


//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler( async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone, type } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }
    res.status(201).json({ message: "Create contact" });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
});
//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };


//! WE ARE ADDING ASYNC BCOZ WHEN WE USE MONGODB, WE USE ASYNC AWAIT, AND WE NEED TO USE ASYNC AWAIT IN CONTROLLERS, SO WE ARE ADDING IT HERE. COZ WE GET PROMISES FROM MONGO.
// Also, we have to use try catch block, coz we are using async await, and we need to handle the errors. In order to do it, there is a better way to use it, we will use a middleware which is express ansync handler which is going to handleour exception inside ansync express routes, and it is going to pass it in pass them to express error handler(errorHandler.js) 
// so we will install express ansync handler
// we will wrap every funcion inside async handler, so that we don't use the try catch block, and we will pass the error to the express error handler, and it will handle it.