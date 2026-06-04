document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Replace this with your actual Discord Webhook URL
    const webhookUrl = "https://discord.com/api/webhooks/1512061108201193634/htoysvxo0pnRZ3-crQKJGKHIe7zgrmx53LSR92p_y4gdWx5xR1GOIEPEHJzqpolnVtEN";

    // Format the payload as a Discord Embed for structured readability
    const requestData = {
        embeds: [{
            title: "📬 New Contact Form Submission",
            color: 5814783, // Discord Blurple color code
            fields: [
                { name: "Name", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Message", value: message }
            ],
            timestamp: new Date().toISOString()
        }]
    };

    // Send data to Discord via fetch API
    fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (response.ok) {
            alert("We will email you soon.");
            document.getElementById('contactForm').reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
    });
});
