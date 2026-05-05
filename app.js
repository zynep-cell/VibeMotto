document.addEventListener('DOMContentLoaded', () => {
    setupCategories();
    setupCanvas();
    setDailyRitual();
});

function setupCategories() {
    const nav = document.getElementById('category-buttons');
    Object.keys(vibeData).forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.onclick = () => showMotto(cat);
        nav.appendChild(btn);
    });
}

function showMotto(category) {
    const quotes = vibeData[category];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const card = document.getElementById('content-card');
    
    card.classList.add('hidden');
    setTimeout(() => {
        document.getElementById('motto-en').innerText = `“${randomQuote.en}”`;
        document.getElementById('motto-tr').innerText = randomQuote.tr;
        card.classList.remove('hidden');
        card.classList.add('fade-in');
    }, 300);
}

function setupCanvas() {
    const input = document.getElementById('canvas-input');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== "") {
            releaseWord(input.value);
            input.value = "";
        }
    });
}

function releaseWord(word) {
    const orb = document.createElement('div');
    orb.className = 'floating-orb';
    orb.innerText = word;
    document.body.appendChild(orb);

    setTimeout(() => {
        orb.style.opacity = "0";
        orb.style.bottom = "80%";
        orb.style.transform = "translateX(-50%) scale(2)";
        setTimeout(() => orb.remove(), 2500);
    }, 100);
}

function setDailyRitual() {
    const ritualText = document.getElementById('ritual-text');
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    ritualText.innerText = `Ritüel: ${rituals[dayOfYear % rituals.length]}`;
}
