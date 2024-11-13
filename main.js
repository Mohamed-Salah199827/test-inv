function showDetails() {
    document.getElementById('details').style.display = 'block';
}

async function sendMessage(event) {
    event.preventDefault(); // منع إعادة التحميل

    const guestName = document.getElementById('guestName').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch('https://api.example.com/sendMessage', { // عدل رابط الـAPI هنا
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: guestName, message: message })
        });

        if (response.ok) {
            responseMessage.textContent = "Thank you! Your message has been sent.";
            responseMessage.style.color = 'green';
        } else {
            responseMessage.textContent = "Oops! Something went wrong. Please try again.";
            responseMessage.style.color = 'red';
        }
    } catch (error) {
        responseMessage.textContent = "Error: Unable to send message.";
        responseMessage.style.color = 'red';
    }

    // إعادة تعيين الحقول بعد الإرسال
    document.getElementById('messageForm').reset();
}