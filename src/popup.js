// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Initialize Dialogue
    // I have the keys stored
    dfMessenger = new DialogflowMessenger({
      dfApiKey: '',
      dfAgentId: '',
      defaultLocale: 'en'
    });
  
    sendBtn.addEventListener('click', function() {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
        appendMessage('You: ' + userMessage);
        // Add code here to send userMessage to your chatbot API
        // Receive response from chatbot API and append to chatBox
        dfMessenger.sendText(userMessage);
        userInput.value = '';
      }
    });
  
    function appendMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatBox.appendChild(messageElement);
    }

  });
  
