const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        try {
            // Attempt to send email
            await sendEmail(name, email, subject, message);
            res.status(200).json({ success: true });
        } catch (error) {
            // Log the error
            console.error('Error sending email:', error);
            // Return a more descriptive error message
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

async function sendEmail(name, email, subject, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'alansariabdulla17@gmail.com', // Replace with your recipient's email
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    return transporter.sendMail(mailOptions);
}
