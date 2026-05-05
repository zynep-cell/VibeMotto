window.onload = () => {
    renderButtons();
    // İlk açılışta rastgele bir içerik gelsin
    const firstCat = Object.keys(vibeData)[0];
    updateAll(firstCat);
    initInputs();
};

function renderButtons() {
    const nav = document.getElementById('category-buttons');
    Object.keys(vibeData).forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.onclick = () => updateAll(cat);
        nav.appendChild(btn);
    });
}

function updateAll(cat) {
    // Sözleri Güncelle
    const quotes = vibeData[cat];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motto-en').innerText = `"${randomQuote.en}"`;
    document.getElementById('motto-tr').innerText = randomQuote.tr;

    // Arkaplan ve Odak Kelimesi
    document.body.style.backgroundColor = categoryStyles[cat].color;
    const words = categoryStyles[cat].words;
    document.getElementById('ritual-box').innerText = `ODAK: ${words[Math.floor(Math.random() * words.length)]}`;
}

function initInputs() {
    // Zihni Boşalt (Uçma Efekti)
    document.getElementById('canvas-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value) {
            const word = document.createElement('div');
            word.className = 'flying-word';
            word.innerText = this.value;
            document.body.appendChild(word);
            
            setTimeout(() => {
                word.style.transform = "translate(-50%, -300px)";
                word.style.opacity = "0";
                setTimeout(() => word.remove(), 3000);
            }, 100);
            this.value = "";
        }
    });

    // Ödül (Patlama Efekti)
    document.getElementById('reward-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value) {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.8 }, colors: ['#dcd3c9'] });
            this.value = "Tebrikler! ✨";
            setTimeout(() => this.value = "", 2000);
        }
    });
}
