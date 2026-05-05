// Sayfa tamamen yüklendiğinde çalış
window.addEventListener('load', function() {
    console.log("Uygulama başlatılıyor...");
    renderButtons();
    initInputs();
});

function renderButtons() {
    const nav = document.getElementById('category-buttons');
    if (!nav) return;
    
    nav.innerHTML = ""; 

    // Veri kontrolü
    if (typeof vibeData !== 'undefined') {
        const categories = Object.keys(vibeData);
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.innerText = cat;
            btn.type = "button"; // Buton tipini belirle
            btn.onclick = function() {
                updateTheme(cat);
            };
            nav.appendChild(btn);
        });
        console.log("Butonlar oluşturuldu: ", categories);
    } else {
        console.error("vibeData bulunamadı! data.js dosyasını kontrol et.");
    }
}

function updateTheme(cat) {
    const quotes = vibeData[cat];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById('motto-en').innerText = `"${random.en}"`;
    document.getElementById('motto-tr').innerText = random.tr;

    document.body.style.backgroundColor = categoryStyles[cat].color;
    document.getElementById('ritual-box').innerText = `ODAK: ${categoryStyles[cat].word}`;
    
    const orb = document.getElementById('focus-orb');
    orb.style.opacity = "1";
    orb.style.width = "450px";
    orb.style.height = "450px";
    orb.style.borderColor = "rgba(0,0,0,0.08)";
}

function initInputs() {
    const canvasInput = document.getElementById('canvas-input');
    const rewardInput = document.getElementById('reward-input');

    canvasInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value) {
            createFloatingWord(this.value);
            this.value = "";
        }
    });

    rewardInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#dcd3c9', '#b5a492', '#ffffff']
            });
            let savedVal = this.value;
            this.value = `Harikasın: ${savedVal}! ✨`;
            setTimeout(() => { this.value = ""; }, 3000);
        }
    });
}

function createFloatingWord(val) {
    const el = document.createElement('div');
    el.className = 'floating-word';
    el.innerText = val;
    document.body.appendChild(el);

    // Stilleri JS ile garantiye alalım
    el.style.position = "fixed";
    el.style.bottom = "20%";
    el.style.left = "50%";
    el.style.transform = "translateX(-50%)";
    el.style.transition = "all 3s ease-out";
    el.style.opacity = "1";
    el.style.fontFamily = "Lora, serif";

    setTimeout(() => {
        el.style.transform = "translate(-50%, -300px)";
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 3000);
    }, 100);
}
