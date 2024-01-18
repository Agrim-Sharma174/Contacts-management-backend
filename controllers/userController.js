const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
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