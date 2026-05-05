window.addEventListener('load', function() {
    renderButtons();
    initInputs();
    
    // SAYFA AÇILDIĞINDA RASTGELE BİR MOTTO İLE BAŞLAT
    const categories = Object.keys(vibeData);
    const randomCat = categories[Math.floor(Math.random() * categories.length)];
    updateTheme(randomCat); 
});

// updateTheme fonksiyonunun içindeki orb kısmını şu şekilde güncelle:
function updateTheme(cat) {
    const quotes = vibeData[cat];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById('motto-en').innerText = `"${random.en}"`;
    document.getElementById('motto-tr').innerText = random.tr;

    document.body.style.backgroundColor = categoryStyles[cat].color;
    document.getElementById('ritual-box').innerText = `ODAK: ${categoryStyles[cat].word}`;
    
    const orb = document.getElementById('focus-orb');
    // Halkayı her tıklamada biraz daha canlı yapalım
    orb.style.width = "480px";
    orb.style.height = "480px";
    orb.style.borderColor = "rgba(0, 0, 0, 0.1)"; // Daha belirgin gri
    orb.style.boxShadow = "0 0 80px rgba(255, 255, 255, 0.8)";
}
