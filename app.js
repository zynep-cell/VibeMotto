let dailyMotto = "";

window.onload = function() {
    setDailyMotto(); // Günün mottosunu en üstte sabitle
    renderButtons();
    initInputs();
};

function setDailyMotto() {
    // Tüm kategorilerden rastgele bir tane seç ve sabitle
    const allCats = Object.keys(vibeData);
    const randomCat = allCats[Math.floor(Math.random() * allCats.length)];
    const quotes = vibeData[randomCat];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById('motto-en').innerText = `"${quote.en}"`;
    document.getElementById('motto-tr').innerText = quote.tr;
}

function renderButtons() {
    const nav = document.getElementById('category-buttons');
    Object.keys(vibeData).forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.onclick = () => updateCategoryContent(cat);
        nav.appendChild(btn);
    });
}

function updateCategoryContent(cat) {
    // Arkaplan Rengi Geçişi
    document.body.style.backgroundColor = categoryStyles[cat].color;

    // Kategorinin Odak Kelimelerinden Rastgele Birini Seç
    const words = categoryStyles[cat].words;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    const ritualBox = document.getElementById('ritual-box');
    ritualBox.style.opacity = "0";
    
    setTimeout(() => {
        ritualBox.innerText = `ODAK: ${randomWord}`;
        ritualBox.style.opacity = "1";
    }, 400);

    // Kategoriye özel içeriği alt kısımda göster (isteğe bağlı yeni sözler için)
    const categoryQuotes = vibeData[cat];
    const newQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    
    // Alt kısımda yeni bir motto alanı istersen buraya ekleme yapabilirsin
    // Şu an için sadece odak kelimesi ve renk değişiyor
}
