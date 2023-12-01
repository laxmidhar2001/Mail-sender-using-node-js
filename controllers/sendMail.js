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
        from: '"~Sender Name~ 👻" <~Sender Mail~>', // sender address
        to: "~Receiver Mail~", // list of receivers
        subject: "Hello ~Receiver~", // Subject line
        text: "Hello ther, I hope you are doing well!", // plain text body
        html: "<b>Hello Boss </b>", // html bo
    })
    console.log("Message sent: %s", info.messageId);
    res.json(info)
}

module.exports = sendMail;
