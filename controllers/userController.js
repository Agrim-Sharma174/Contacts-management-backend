const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.send(400);
        throw new Error("User already exists");
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log("User: ", user);
    if(user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

    res.json({message: "Register the user"});
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message: "Login the user"});
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler( async (req, res) => {
    res.json({message: "current user info"});
});

module.exports = {registerUser, loginUser, currentUser};