// server.js
const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`🚀 Gota.io Control Server запущен на порту ${PORT}`);

const clients = new Set();

wss.on('connection', (ws) => {
    console.log('✅ Новый клиент подключился');
    clients.add(ws);

    ws.on('message', (message) => {
        const data = message.toString();
        
        clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });

    ws.on('close', () => {
        console.log('❌ Клиент отключился');
        clients.delete(ws);
    });

    ws.on('error', (error) => {
        console.error('⚠️ Ошибка WebSocket:', error);
    });
});

// === HEARTBEAT: Каждые 10 секунд шлем пинг всем клиентам ===
setInterval(() => {
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'heartbeat' }));
        }
    });
}, 10000); // 10 секунд

console.log('💓 Heartbeat включен (каждые 10 сек)');
console.log('👑 Мастер будет отправлять команды');
console.log('💤 Рабы будут их получать');
