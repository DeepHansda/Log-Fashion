const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');

const RegMode = require('../db/models/modReg')
const ModContact = require('../db/models/modContact');
const auth = require('../middleware/auth')








// user login (-------------------------------------------------------------------

router.post('/login', async (req, res) => {

    try {

        const email = req.body.email;
        const password = req.body.password;
        const logmain = await RegMode.findOne({
            email
        });
        const compare = await bcrypt.compare(password, logmain.password);
        if (compare) {
            const token = await logmain.generateAuthToken();
            res.cookie("jwt", token)
            await res.set('x-access-token', token)
            res.status(200).send({
                accessToken: token
            })
        } else {
            res.status(404).send("Please Register Or login details invalid")
        }
    } catch (err) {
        console.log(err)
    }
})

// ---------------------------------------------------------------------)user login









// user registration (-----------------------------------------------------
router.get('/registration', (req, res) => {
    res.status(200).send('registration')
})

router.post("/registration", async (req, res) => {
    try {
        const reg = new RegMode({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });

        const token = await reg.generateAuthToken();

        res.cookie("jwt", token);
        await res.set('x-access-token', token)

        const saveRegUser = await reg.save();
        res.status(200).send({
            accessToken: token
        })
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }

})


// -----------------------------------------------------------) user registration




// user massage (---------------------------------------------------------

router.post("/", async (req, res) => {
    try {
        const message = new ModContact({
            fullName: req.body.fullName,
            number: req.body.phoneNumber,
            email: req.body.email,
            message: req.body.message
        });
        const savedMessage = await message.save();
        res.status(200).send(savedMessage)

    } catch (err) {
        res.status(500).send(err);
        console.log(err)
    }
})

// --------------------------------------------------------------------- ) user massage
module.exports = router;