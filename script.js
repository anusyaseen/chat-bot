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
    "what is your name?": "My name is ChatBot.",
    "where are you from?": "I am from the digital world.",
    "what do you do?": "I am here to assist you with your questions.",
    "what is your favorite color?": "I don't have a favorite color, but I like all colors!",
    "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "what is the weather like?": "I can't check the weather, but you can use a weather app!",
    "what is your purpose?": "My purpose is to assist you and provide information.",
    "can you help me with math?": "Sure! What math problem do you need help with?",
    "what is the capital of France?": "The capital of France is Paris.",
    "who is the president of the USA?": "As of my last update, the president is Joe Biden.",
    "what is the largest planet in our solar system?": "The largest planet is Jupiter.",
    "how many continents are there?": "There are seven continents.",
    "what is the speed of light?": "The speed of light is approximately 299,792 kilometers per second.",
    "who wrote 'Romeo and Juliet'?": "William Shakespeare wrote 'Romeo and Juliet'.",
    "what is the boiling point of water?": "The boiling point of water is 100 degrees Celsius at sea level.",
    "what is a black hole?": "A black hole is a region of space where gravity is so strong that nothing can escape from it.",
    "what is artificial intelligence?": "Artificial intelligence is the simulation of human intelligence in machines.",
    "what is the meaning of life?": "The meaning of life is a philosophical question that varies from person to person.",
    "can you speak other languages?": "I can understand and respond in multiple languages!",
    "what is your favorite food?": "I don't eat, but I hear pizza is popular!",
    "how do I reset my password?": "You can usually reset your password by clicking 'Forgot Password' on the login page.",
    "what is the best way to learn programming?": "Practice regularly and work on projects to improve your skills.",
    "what is the stock market?": "The stock market is a collection of markets where stocks are bought and sold.",
    "how do I cook pasta?": "Boil water, add salt, then add pasta and cook until al dente.",
    "what is the fastest land animal?": "The fastest land animal is the cheetah.",
    "how do I improve my writing skills?": "Read regularly and practice writing every day.",
    "what is the tallest mountain in the world?": "Mount Everest is the tallest mountain in the world.",
    "what is a healthy diet?": "A healthy diet includes a variety of fruits, vegetables, whole grains, and lean proteins.",
    "how do I stay motivated?": "Set clear goals and remind yourself of your reasons for pursuing them.",
    "what is the best exercise for weight loss?": "Cardio exercises like running, cycling, and swimming are effective for weight loss.",
    "how do I meditate?": "Find a quiet space, sit comfortably, and focus on your breath.",
    "what is the difference between a virus and a bacteria?": "Viruses are smaller and require a host to replicate, while bacteria can live independently.",
    "what is the human genome?": "The human genome is the complete set of DNA in a human being.",
    "how do I start a business?": "Research your market, create a business plan, and secure funding.",
    "what is the best way to save money?": "Create a budget and set aside a portion of your income regularly.",
    "how do I improve my public speaking skills?": "Practice regularly and seek feedback from others.",
    "what is the importance of sleep?": "Sleep is essential for physical and mental health.",
    "how do I manage stress?": "Practice relaxation techniques like deep breathing, meditation, or exercise.",
    "what is the best way to learn a new language?":

    };

    return responses[userMessage.toLowerCase()] || "I'm sorry, I don't understand that.";
}
