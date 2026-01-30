// ==UserScript==
// @name         Gota.io PERFECT Multibox (Slave Feed Fix + Chat + 256x Split)
// @namespace    http://tampermonkey.net/
// @version      5.3
// @description  Space=Ты, D=Раб сплит, A=Раб фид, Q=256x сплит (Работает чат!)
// @author       You
// @match        https://gota.io/*
// @match        https://play.gota.io/*
// @match        https://gota.io/camlan/
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // === НАСТРОЙКИ ===
    const CONFIG = {
        channel: 'gota_perfect_sync',
        packetMove: 16,
        packetSplit: 17,
        packetFeed: 21,
        slaveSplitKey: 'KeyD',
        slaveFeedKey: 'KeyA',
        macro256Key: 'KeyQ'  // Клавиша для 256x сплита
    };

    // === ПЕРЕМЕННЫЕ ===
    const bc = new BroadcastChannel(CONFIG.channel);
    let activeSocket = null;
    let isMaster = document.hasFocus();
    let masterFeedInterval = null;

    // === ПРОВЕРКА ЧАТА ===
    function isTyping() {
        const el = document.activeElement;
        return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA');
    }

    // === 1. СТАТУС ВКЛАДКИ ===
    window.addEventListener('focus', () => {
        isMaster = true;
        document.title = "👑 MASTER";
        if (masterFeedInterval) clearInterval(masterFeedInterval);
    });

    window.addEventListener('blur', () => {
        isMaster = false;
        document.title = "💤 Slave";
    });

    // === 2. ПЕРЕХВАТ СЕТИ ===
    const originalSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function(data) {
        activeSocket = this;

        // Если мы Мастер — шлем координаты рабу
        if (isMaster && activeSocket.readyState === 1) {
            if (data instanceof ArrayBuffer || data instanceof Uint8Array) {
                const view = new DataView(data instanceof ArrayBuffer ? data : data.buffer);
                if (view.byteLength > 0 && view.getUint8(0) === CONFIG.packetMove) {
                    const payload = Array.from(new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer));
                    bc.postMessage({ type: 'mirror_move', data: payload });
                }
            }
        }
        return originalSend.apply(this, arguments);
    };

    // === 3. УПРАВЛЕНИЕ (ТОЛЬКО МАСТЕР) ===
    document.addEventListener('keydown', (e) => {
        if (!isMaster || isTyping()) return;

        // КЛАВИША D: Сплит раба
        if (e.code === CONFIG.slaveSplitKey) {
            e.preventDefault();
            e.stopPropagation();
            bc.postMessage({ type: 'cmd_split' });
        }

        // КЛАВИША A: Фид раба
        if (e.code === CONFIG.slaveFeedKey) {
            e.preventDefault();
            e.stopPropagation();
            
            if (!e.repeat && !masterFeedInterval) {
                bc.postMessage({ type: 'cmd_feed_pulse' });
                masterFeedInterval = setInterval(() => {
                    bc.postMessage({ type: 'cmd_feed_pulse' });
                }, 40);
            }
        }

        // КЛАВИША Q: 256x сплит (раб выполняет 8 раз сплит = 2^8 = 256 частей)
        if (e.code === CONFIG.macro256Key) {
            e.preventDefault();
            e.stopPropagation();
            
            if (!e.repeat) {
                bc.postMessage({ type: 'cmd_macro256' });
            }
        }
    });

    document.addEventListener('keyup', (e) => {
        if (!isMaster) return;

        if (e.code === CONFIG.slaveFeedKey) {
            if (masterFeedInterval) {
                clearInterval(masterFeedInterval);
                masterFeedInterval = null;
            }
        }
    });

    // === 4. ИСПОЛНЕНИЕ (РАБ) ===
    bc.onmessage = (ev) => {
        if (isMaster || !activeSocket || activeSocket.readyState !== 1) return;
        
        const msg = ev.data;

        if (msg.type === 'mirror_move') {
            originalSend.call(activeSocket, new Uint8Array(msg.data));
        }
        
        if (msg.type === 'cmd_split') {
            sendPacket(CONFIG.packetSplit);
        }
        
        if (msg.type === 'cmd_feed_pulse') {
            sendPacket(CONFIG.packetFeed);
        }

        // 256x сплит = 8 раз сплит с интервалом
        if (msg.type === 'cmd_macro256') {
            macro256Split();
        }
    };

    function sendPacket(id) {
        if (activeSocket && activeSocket.readyState === 1) {
            originalSend.call(activeSocket, new Uint8Array([id]));
        }
    }

    // Функция для 256x сплита (8 раз подряд с небольшой задержкой)
    function macro256Split() {
        let count = 0;
        const interval = setInterval(() => {
            sendPacket(CONFIG.packetSplit);
            count++;
            if (count >= 8) {
                clearInterval(interval);
            }
        }, 40); // 40мс между каждым сплитом
    }

    console.log("✅ Gota.io Bot: Q = 256x Split, A = Feed, D = Split");
})();
