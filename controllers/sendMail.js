const nodemailer = require("nodemailer");
const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    // connect with the smtp
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.net",
        port: 587,
        secure: false,
        auth: {
        user: 'nathanael.labadie27@ethereal.email',
        pass: 'EygktQC7jQxd1yWeqc'
    },});
    res.send("I am sending mail")
};
async function main() {
    let info = await transporter.sendMail({
        from: '"Laxidhar das 👻" <rawtoxicop@gmail.com>', // sender address
        to: "kingqueenstatusyt@gmail.com", // list of receivers
        subject: "Hello sweetheart✔", // Subject line
        text: "Hello world? I hope you are doing well!", // plain text body
        html: "<b>Hello Boss </b>", // html bo
    })
    console.log("Message sent: %s", info.messageId);
    res.json(info)
}

module.exports = sendMail;