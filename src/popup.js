document.addEventListener('DOMContentLoaded', function() {
  const chatBox = document.getElementById('chat-box');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  // Initialize Dialogflow Messenger
  dfMessenger = new DialogflowMessenger({
    dfApiKey: // This is where the api key goes which I have stored at home,
    dfAgentId: // The agend ID,
    defaultLocale: 'en'
  });

  sendBtn.addEventListener('click', function() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
      appendMessage('You: ' + userMessage);
      // Send user message to Dialogflow
      dfMessenger.sendUserMessage(userMessage);
      userInput.value = '';
    }
  });

  function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
  }
});
