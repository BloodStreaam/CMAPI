const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
	
const jwt = require('jsonwebtoken');
//router.use(bodyParser);
var jsonParser = bodyParser.json()
router.post('/', jsonParser, async (req, res, next) =>{
    let data = jwt.decode(req.query.token)
    await sendEmail(data.email, data.pass)
    console.log("Email send!")
    res.sendStatus(200)
})

async function sendEmail(email, pass){
    console.log(email);
    console.log(pass);
    let mail = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'vianaonwheels@gmail.com',
            pass:'V!ana0nWh33ls'
        }
    });
    let info = await mail.sendMail({
        from: 'vianaonwheels@gmail.com',
        to: email,
        subject: 'You password information - VianaOnWheels',
        html:`<p>You resquested for the passwrod and user information:</p>
            <ul>
                <li><h6>email: ${email}</h6>
                </li><li><h6>email: ${pass}</h6></li>
            </ul>
            <p>Thank you for using our App!</p>
            <p>Viana and the world thanks you!</p>`
      });
}

module.exports = router