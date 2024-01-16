const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the contact name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the contact email"]
    },
    phone: {
        type: String,
        required: [true, "Please enter the contact phone"]
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema);

// we will add this in the controller controllers/contactController.js