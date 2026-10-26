// 1 апреля — рофл-стиль
(function() {
    const today = new Date();
    const isAprilFools = today.getMonth() === 3 && today.getDate() === 1;
    
    if (!isAprilFools) return;
    
    // Добавляем CSS
    const style = document.createElement('style');
    style.textContent = `
        /* === 1 АПРЕЛЯ РОФЛ СТИЛЬ === */
        
        body {
            background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff) !important;
            background-size: 400% 400% !important;
            animation: rainbowBg 3s ease infinite !important;
            font-family: 'Comic Sans MS', 'Comic Sans', cursive !important;
        }
        
        @keyframes rainbowBg {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .container {
            transform: rotate(-1deg);
            animation: wobble 2s ease-in-out infinite;
            border: 5px dashed #ff00ff !important;
        }
        
        @keyframes wobble {
            0%, 100% { transform: rotate(-1deg); }
            50% { transform: rotate(1deg); }
        }
        
        h1 {
            animation: bounce 1s ease infinite !important;
            text-shadow: 3px 3px 0 #ff00ff, -3px -3px 0 #00ffff !important;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .thread-card {
            border: 3px dotted #ff00ff !important;
            background: linear-gradient(135deg, #ffffcc, #ffccff) !important;
            animation: pulse 2s ease infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        
        .thread-title {
            color: #ff00ff !important;
            text-shadow: 2px 2px 0 #00ffff !important;
        }
        
        button, .german-btn, .reply-btn, .submit-reply {
            background: linear-gradient(45deg, #ff00ff, #00ffff) !important;
            color: #fff !important;
            font-family: 'Comic Sans MS', cursive !important;
            animation: spin 3s linear infinite;
            border: 2px solid #000 !important;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Курсоры-эмодзи */
        * {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text y="26" font-size="26">🌈</text></svg>'), auto !important;
        }
        
        button, a, input, textarea {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text y="26" font-size="26">🎉</text></svg>'), pointer !important;
        }
        
        /* Переворот текста */
        .thread-comment {
            font-family: 'Comic Sans MS', cursive !important;
            color: #ff00ff !important;
        }
        
        /* Летающие звёздочки */
        body::before {
            content: '🌈 🎉 🎈 🎁 🎂 🍰 🧁 🎊 🎉 🌈';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            font-size: 40px;
            animation: floatEmoji 10s linear infinite;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.3;
        }
        
        @keyframes floatEmoji {
            0% { transform: translateY(100vh) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
        }
        
        /* Глитч на капче */
        .captcha-question {
            animation: glitchCaptcha 0.3s infinite;
            background: linear-gradient(45deg, #ff00ff, #00ffff) !important;
        }
        
        @keyframes glitchCaptcha {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Меняем заголовок
    document.title = '🎉 1 АПРЕЛЯ! 🎉 ' + document.title;
    
    // Показываем уведомление
    setTimeout(() => {
        const banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            color: white;
            padding: 30px 50px;
            border-radius: 20px;
            font-family: 'Comic Sans MS', cursive;
            font-size: 24px;
            text-align: center;
            z-index: 99999;
            box-shadow: 0 0 50px rgba(255, 0, 255, 0.8);
            animation: pulse 1s infinite;
            border: 5px solid white;
            cursor: pointer;
        `;
        banner.innerHTML = '🎉 С 1 АПРЕЛЯ! 🎉<br><small style="font-size:14px;">Нажми чтобы закрыть</small>';
        banner.onclick = () => banner.remove();
        document.body.appendChild(banner);
        
        setTimeout(() => banner.remove(), 5000);
    }, 1000);
})();
