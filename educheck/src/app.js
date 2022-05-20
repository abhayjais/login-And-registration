const express = require("express");
require("../src/db/conn");
const dbConn = require("./models/dbSchema");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Educheck");
})

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})

//Creating Post request registration
app.post("/register", async (req, res) => {
    try {
        const addingMensRecords = new dbConn(req.body);
        console.log(req.body);
        await addingMensRecords.save();
        res.status(200).json({
            success: 200,
            msg: "Registration successful!"
        });
    }
    catch (e) {
        res.status(400).json({
            error: 400,
            msg: "Registration Failed!"
        });
    }
})

//Creating Post request for login
app.post("/login", async (req, res) => {
    try {
        const phone = req.body.phone;
        const password = req.body.password;

        const userephone = await dbConn.findOne({ phone: phone });

        if (userephone.password === password) {
            res.status(200).json({
                success: 200,
                msg: "Login successful!" 
            })
        }
        else {
            res.status(401).json({
                error: 401,
                msg: "Invalid Login details"
            })
        }
    }
    catch (error) {
        res.status(401).json({
            error: 401,
            msg: "Invalid Login details"
        })
    }
})

