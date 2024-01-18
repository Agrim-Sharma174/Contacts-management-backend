const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all the contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id}); //?the uder_id: req.user.id is for validating the user // added this after making the model, and we will get all the contacts from the database, and we will send it to the client.
    // res.status(200).json({ message: "Get all contacts" }); //! when we haven't used the database, we used this line, but now we will use the database, so we will comment this line.
    res.status(200).json(contacts);
});


//@desc Create new contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler( async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone, type } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    });
    // res.status(201).json({ message: "Create contact" }); //! this was before using the database, now we will use the database, so we will comment this line.

    res.status(201).json(contact);
    
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});
//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Not authorized");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Not authorized");
    }

    await contact.deleteOne({ _id: req.params.id });


    res.status(200).json(contact);
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };


//! WE ARE ADDING ASYNC BCOZ WHEN WE USE MONGODB, WE USE ASYNC AWAIT, AND WE NEED TO USE ASYNC AWAIT IN CONTROLLERS, SO WE ARE ADDING IT HERE. COZ WE GET PROMISES FROM MONGO.
// Also, we have to use try catch block, coz we are using async await, and we need to handle the errors. In order to do it, there is a better way to use it, we will use a middleware which is express ansync handler which is going to handleour exception inside ansync express routes, and it is going to pass it in pass them to express error handler(errorHandler.js) 
// so we will install express ansync handler
// we will wrap every funcion inside async handler, so that we don't use the try catch block, and we will pass the error to the express error handler, and it will handle it.