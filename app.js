const categoryStyles = {
    "Odak ve Süreklilik": { color: "#f4f1ea", word: "DİSİPLİN" },
    "Plan ve Eylem": { color: "#edf2f4", word: "HAREKET" },
    "Anı Yaşamak": { color: "#f1f4f1", word: "FARKINDALIK" },
    "Stres Yönetimi": { color: "#fdf4f5", word: "HUZUR" }
};

document.addEventListener('DOMContentLoaded', () => {
    renderButtons();
    initInputs();
});

function renderButtons() {
    const nav = document.getElementById('category-buttons');
    Object.keys(vibeData).forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.onclick = () => updateTheme(cat);
        nav.appendChild(btn);
    });
}

function updateTheme(cat) {
    // Sözleri Güncelle
    const quotes = vibeData[cat];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById('motto-en').innerText = `"${random.en}"`;
    document.getElementById('motto-tr').innerText = random.tr;

    // Arkaplan ve Halka Güncelle
    document.body.style.backgroundColor = categoryStyles[cat].color;
    const orb = document.getElementById('focus-orb');
    orb.style.borderColor = "rgba(0,0,0,0.05)";
    orb.style.width = "400px";
    orb.style.height = "400px";
    
    // Odak Kelimesini Ritüel Alanına Yaz
    document.getElementById('ritual-box').innerText = `ODAK: ${categoryStyles[cat].word}`;
}

function initInputs() {
    // Kanvas Uçurma
    document.getElementById('canvas-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value) {
            createFloatingWord(this.value);
            this.value = "";
        }
    });

    // Ödül Kutlaması
    document.getElementById('reward-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#dcd3c9', '#b5a492', '#fdfbf9']
            });
            this.value = `Keyfini çıkar: ${this.value}!`;
            setTimeout(() => { this.value = ""; }, 3000);
        }
    });
}

function createFloatingWord(val) {
    const el = document.createElement('div');
    el.className = 'floating-word';
    el.innerText = val;
    el.style.left = "50%";
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.transform = "translate(-50%, -200px)";
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 3000);
    }, 100);
}
