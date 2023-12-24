// api/process-form.js
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // You can add code here to validate and process the form data

        // Send email (example using a hypothetical email sending module)
        sendEmail(name, email, subject, message);

        res.status(200).json({ success: true });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

// Example email sending function
function sendEmail(name, email, subject, message) {
    // Implement email sending logic here
    // You might want to use a third-party service or your own SMTP server
}
