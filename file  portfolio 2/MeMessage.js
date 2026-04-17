// ⚠️ MUHIM: Quyidagi qiymatlarni o'zgartiring!
        const BOT_TOKEN = "8660536749:AAFiu4MyTMxsm-QJ4w7cBnC4bgq2FvE5qKA"; // @BotFather dan olingan token
        const CHAT_ID = "7133875128";     // @userinfobot dan olingan ID

        async function sendToTelegram() {
            // const name    = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const message = document.getElementById('message').value.trim();
            const btn = document.getElementById('sendBtn');


            // Validatsiya
            if (!username || !message) {
                showStatus('⚠️ Fill in the name and message fields!', 'error');
                return;
            }

            btn.disabled = true;
            btn.textContent = '⏳ Sending...';

            // Telegram uchun xabar  
            const text = `
🔔 <b>Yangi xabar!</b>

👤 <b>Username:</b>  ${'@' + username}

📨 <b>Email:</b> ${email}

💬 <b>Xabar:</b> ${message}


🌐 <i>Web sayt orqali yuborildi</i>
    `.trim();

            try {
                const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: text,
                        parse_mode: 'HTML'
                    })
                });

                const result = await response.json();

                if (result.ok) {
                    alert('✅ Message sent successfully!', 'success');
                    // Formani tozalash
                    // document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('username').value = '';
                    document.getElementById('message').value = '';
                } else {
                    alert('❌ Error: ' + result.description, 'error');
                }
            } catch (err) {
                alert('❌ Network error. Check your Internet connection.', 'error');
            }

            btn.disabled = false;
            btn.textContent = 'Send a message';
        }

        function showStatus(msg, type) {
            const status = document.getElementById('status');
            status.textContent = msg;
            status.className = 'status ' + type;
            setTimeout(() => { status.className = 'status'; }, 5000);
        }
        
        