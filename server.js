const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); // -a express provided middleware- when we accept a data from client to server, we have to use a middleware. if we don't use this line, the console.log("...", req.bdy) will show req.body as undefined(when we use the body tab of thunderclient, to enter the data)- while creating contact
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);// we made a middleware in the folder middleware... and getting it here... when we get error, it is not in json format, but in html, if we need to change it, we need to make middleware which takes in response and gives it in the form of json.

// 1st iteration-
// app.get("/api/contacts", (req, res) => {
//     res.status(200).json({message: "Get all contacts"});
// })

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

//! Pehle humne jo commented (1st iteration) hai, wo kiya tha, without making of routers, fir humne routers banaye, fir humne controllers banaye, aur ab humne controllers ko use karke routers ko banaya hai. isliye comment kiya wala code router ke ander contactRoutes.js me hai.