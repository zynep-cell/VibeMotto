window.onload = function() {
    renderButtons();
    initInputs();
};

function renderButtons() {
    const nav = document.getElementById('category-buttons');
    if (!nav) return;
    
    nav.innerHTML = ""; // Temizle
    
    // vibeData'nın yüklendiğinden emin olalım
    if (typeof vibeData !== 'undefined') {
        Object.keys(vibeData).forEach(cat => {
            const btn = document.createElement('button');
            btn.innerText = cat;
            btn.onclick = () => updateTheme(cat);
            nav.appendChild(btn);
        });
    } else {
        console.error("Hata: data.js yüklenemedi!");
    }
}

function updateTheme(cat) {
    const quotes = vibeData[cat];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Metinleri Güncelle
    document.getElementById('motto-en').innerText = `"${random.en}"`;
    document.getElementById('motto-tr').innerText = random.tr;

    // Stil ve Halka Güncelle
    document.body.style.backgroundColor = categoryStyles[cat].color;
    document.getElementById('ritual-box').innerText = `ODAK: ${categoryStyles[cat].word}`;
    
    const orb = document.getElementById('focus-orb');
    orb.style.borderColor = "rgba(0,0,0,0.08)";
    orb.style.width = "450px";
    orb.style.height = "450px";
}

function initInputs() {
    const canvasInput = document.getElementById('canvas-input');
    const rewardInput = document.getElementById('reward-input');

    canvasInput.onkeypress = function(e) {
        if (e.key === 'Enter' && this.value) {
            createFloatingWord(this.value);
            this.value = "";
        }
    };

    rewardInput.onkeypress = function(e) {
        if (e.key === 'Enter' && this.value) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#dcd3c9', '#b5a492', '#ffffff']
            });
            let val = this.value;
            this.value = `Tebrikler: ${val}! ✨`;
            setTimeout(() => { this.value = ""; }, 3000);
        }
    };
}

function createFloatingWord(val) {
    const el = document.createElement('div');
    el.className = 'floating-word';
    el.innerText = val;
    el.style.left = "50%";
    el.style.position = "fixed";
    el.style.bottom = "20%";
    el.style.transform = "translateX(-50%)";
    el.style.transition = "all 3s ease-out";
    el.style.fontFamily = "Lora, serif";
    el.style.fontStyle = "italic";
    
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.transform = "translate(-50%, -300px)";
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 3000);
    }, 100);
}
