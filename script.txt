document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    
    if (userMessage === '') return;

    appendMessage('user', userMessage);
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        appendMessage('bot', botResponse);
    }, 1000);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    // Simple bot responses
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you?": "I'm just a bot, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
        ": What is your name?":"My name is [Your Name].",
        " How are you?":"I am fine, thank you! How about you?",
        "Where are you from":" I am from [Your Country/City].",
        "What do you do?":"I am a [Your Job/Occupation] or I am a student."

    };

    return responses[userMessage.toLowerCase()] || "I'm sorry, I don't understand that.";
}