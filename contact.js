async function submitForm() {
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple client-side validation
    if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Send data to the server using Fetch API
    try {
        const response = await fetch('/api/process-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (response.ok) {
            // Show a confirmation pop-up or update the UI
            alert("Your message has been sent! Thank you.");

            // Clear input fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        } else {
            // Handle errors or show an appropriate message
            alert("Failed to send the message. Please try again.");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    }
}