import Chat from './Chat';

document.addEventListener('DOMContentLoaded', () => {
  const ws = new WebSocket('ws://localhost:8080');
  const chat = new Chat(ws);
  chat.init();
});
