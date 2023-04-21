const nodemailer = require("nodemailer");
const emailTemplate = require("./emailTemplate");

const sendMail = async ( to ) => {

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  var message = {
    to: to,
    from: process.env.MAIL_USER,
    subject: "Confirm Registration",
    text: "Please Confirm Your Account",
    html: emailTemplate("localhost:3000/api/auth/verify-account/6440e7eef63c26f1ec85e41e")
  };

   transporter.sendMail(message, (err, info) => {
    if(err){
      console.log(""+err.message);
    }
    else{
      console.log(""+info.envelope)
    }
  })
};

module.exports = sendMail;
