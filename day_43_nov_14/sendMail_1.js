const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "raghu11697@gmail.com",
        pass: "lusk soub ijyo lorb", // google app password
    }
});
let mailOptions = {
    from: 'raghu11697@gmail.com',
    to: ['simranshah3012@gmail.com', 'sainathreddy4560@gmail.com'],
    subject: "Sending Email From NodeJS",
    html: `
        <h1>Ticket Booking Confirmation</h1>
        <pre>
            helloooooooo
            hiiiiiiiiiiiiii
            good morning
        </pre>
    `
}
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log('email sent succesfully!!!')
    }
})