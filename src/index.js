const nodemailer = require("nodemailer");

async function main() {

  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
      // user: "delphia.hermann@ethereal.email",
      // pass: "Qhj5PX5DckzA846p6C",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <ahmad.sidiq559@gmail.com>', // sender address
    to: "delphia.hermann@ethereal.email, baz@example.com", // list of receivers
    subject: "Hy this is Siddiq ✔", // Subject line
    text: "This is a tasting by siddiq", // plain text body
    html: "<b>Must do the best !</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
