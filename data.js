const vibeData = {
    "Odak ve Süreklilik": [
        { en: "Small consistent steps beat big occasional efforts.", tr: "Küçük ama tutarlı adımlar, büyük ama aralıklı çabalardan üstündür." },
        { en: "Focus on what you can control right now.", tr: "Şu an kontrol edebileceğin şeye odaklan." },
        { en: "One thing at a time, done well, is more than many things half-done.", tr: "Bir şeyi bir kerede, iyi yapmak, birçok şeyi eksik yapmaktan iyidir." },
        { en: "Consistency is stronger than intensity.", tr: "Süreklilik, yoğunluktan daha güçlüdür." },
        { en: "Little by little, a little becomes a lot.", tr: "Az az, zamanla çok olur." }
    ],
    "Plan ve Eylem": [
        { en: "Plans over moods, action over hesitation.", tr: "Duyguların önüne plan koy, tereddüt yerine harekete geç." },
        { en: "Do it because it’s scheduled, not because you feel like it.", tr: "İçinden geldiği için değil, planlandığı için yap." },
        { en: "Your future self will thank you for what you start today.", tr: "Gelecekteki sen, bugün başlattığın şeyler için sana teşekkür edecek." },
        { en: "Prepare, act, adjust.", tr: "Hazırla, uygula, gerektiğinde ayarla." },
        { en: "A plan in action beats a perfect plan waiting.", tr: "Bekleyen mükemmel bir plan, uygulamadaki bir plandan daha az etkilidir." }
    ],
    "Gelişim ve Motivasyon": [
        { en: "Progress, even if tiny, is still progress.", tr: "İlerlemenin boyutu küçük olsa da, ilerlemedir." },
        { en: "Done is better than perfect.", tr: "Bitmiş olan, mükemmel olandan iyidir." },
        { en: "Consistency compounds, not intensity.", tr: "Başarıyı getiren yoğunluk değil, sürekliliktir." },
        { en: "Every small win counts.", tr: "Her küçük kazanım önemlidir." },
        { en: "Start where you are, use what you have, do what you can.", tr: "Bulunduğun yerden başla, sahip olduklarını kullan, yapabileceğini yap." },
        { en: "Progress > perfection.", tr: "İlerleme, mükemmellikten üstündür." }
    ],
    "Anı Yaşamak": [
        { en: "This moment is enough, focus on it.", tr: "Bu an yeterli, ona odaklan." },
        { en: "Breathe, notice, act—don’t overthink.", tr: "Nefes al, fark et, harekete geç—fazla düşünme." },
        { en: "Let go of what hasn’t happened yet.", tr: "Henüz gerçekleşmemiş olanı bırak." },
        { en: "Be present, not perfect.", tr: "Mükemmel olmayı değil, şu anı yaşa." },
        { en: "Control the controllables, release the rest.", tr: "Kontrol edebileceklerini kontrol et, geri kalanı bırak." }
    ],
    "Enerji ve Yönetim": [
        { en: "Energy first, then task.", tr: "Önce enerjin, sonra işin." },
        { en: "Do one thing well, then move to the next.", tr: "Bir işi iyi yap, sonra diğerine geç." },
        { en: "Pause, assess, act.", tr: "Dur, değerlendir, harekete geç." },
        { en: "Your mind is for having ideas, not holding them all at once.", tr: "Beynini fikir üretmek için kullan, hepsini aynı anda tutmak için değil." },
        { en: "Handle one input, release the rest.", tr: "Bir bilgiyi işle, kalanını bırak." },
        { en: "Flow with energy, not with urgency.", tr: "Acilmiş gibi değil, enerjiyle ak." }
    ],
    "Zaman ve Öncelik": [
        { en: "Prioritize what matters, let go of the rest.", tr: "Önemli olana öncelik ver, geri kalanı bırak." },
        { en: "Do first what moves you forward most.", tr: "En çok ilerleten işi önce yap." },
        { en: "Time is a tool, not a trap.", tr: "Zaman bir araçtır, tuzak değil." }
    ],
    "Stres ve Kaygı": [
        { en: "Feel it, don’t fight it.", tr: "Hisset, savaşma." },
        { en: "Stress is energy, channel it.", tr: "Stres enerjidir, doğru yönlendir." },
        { en: "Worry less, act more.", tr: "Daha az kaygılan, daha çok harekete geç." }
    ],
    "Sağlık ve Beden": [
        { en: "Body first, mind will follow.", tr: "Önce beden, sonra zihin takip eder." },
        { en: "Move daily, rest intentionally.", tr: "Her gün hareket et, dinlenmeyi planla." },
        { en: "Nutrition fuels focus.", tr: "Beslenme odaklanmayı besler." }
    ],
    "Öğrenme ve Gelişim": [
        { en: "Learn a little every day.", tr: "Her gün biraz öğren." },
        { en: "Curiosity drives growth.", tr: "Merak, gelişimi tetikler." },
        { en: "Mistakes are data, not defeat.", tr: "Hatalar veri, yenilgi değil." }
    ],
    "Farkındalık ve İlişkiler": [
        { en: "Name the feeling, then act.", tr: "Duyguyu adlandır, sonra harekete geç." },
        { en: "Healthy boundaries protect energy.", tr: "Sağlıklı sınırlar enerjini korur." },
        { en: "Connect to recharge, not to drain.", tr: "Bağlan, enerji toplamak için, tüketmek için değil." }
    ]
};

// Bu kısım arka plan stilleri ve odak kelimeleri için
const categoryStyles = {
    "Odak ve Süreklilik": { color: "#f4f1ea", word: "DİSİPLİN" },
    "Plan ve Eylem": { color: "#edf2f4", word: "HAREKET" },
    "Gelişim ve Motivasyon": { color: "#f9f6f2", word: "BÜYÜME" },
    "Anı Yaşamak": { color: "#f1f4f1", word: "FARKINDALIK" },
    "Enerji ve Yönetim": { color: "#f7f7f7", word: "AKILLI AKIŞ" },
    "Zaman ve Öncelik": { color: "#fdfbf9", word: "SADELİK" },
    "Stres ve Kaygı": { color: "#fdf4f5", word: "HUZUR" },
    "Sağlık ve Beden": { color: "#f2f9f9", word: "DİRİLİK" },
    "Öğrenme ve Gelişim": { color: "#f5f5f5", word: "MERAK" },
    "Farkındalık ve İlişkiler": { color: "#fcf8ff", word: "DENGE" }
};
