let username = prompt("Enter your username");
const ws = new WebSocket("ws://localhost:8030");

const messageList = document.getElementById('message');
const inputMessage = document.getElementById('inputMessage');
const sendButton = document.getElementById('sendButton');

ws.onopen = () => {
  console.log('Connected to the WebSocket server');
  const li = document.createElement('li');
  li.textContent = 'Connected to the WebSocket server';
  messageList.appendChild(li);
};

ws.onmessage = (event) => {
  const { type, message, username } = JSON.parse(event.data);
  if (type === 'message') {
    const li = document.createElement('li');
    li.textContent = username ? `${username}: ${message}` : message;
    messageList.appendChild(li);
  }
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
  const li = document.createElement('li');
  li.textContent = 'Error: WebSocket connection failed';
  messageList.appendChild(li);
};

ws.onclose = () => {
  console.log('WebSocket connection closed');
  const li = document.createElement('li');
  li.textContent = 'WebSocket connection closed';
  messageList.appendChild(li);
};

const sendMessage = () => {
  const message = inputMessage.value;
  if (message) {
    const payload = {
      type: 'message',
      message: message,
      username: username // Replace 'YourUsername' with the actual username if needed
    };
    const li = document.createElement('li');
    li.textContent = ` ${username}: ${message}`
    li.textContent = payload.username ? `${payload.username}: ${payload.message}` : payload.message;
    messageList.appendChild(li);

    ws.send(JSON.stringify(payload));
    inputMessage.value = "";
  }
};

sendButton.addEventListener('click', sendMessage);

inputMessage.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
