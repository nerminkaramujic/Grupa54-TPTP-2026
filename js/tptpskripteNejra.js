document.addEventListener("DOMContentLoaded", function() {
    // AI asistencija: Generisanje sintakse za IntersectionObserver prema mojoj zamisli o animacijama
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const topBtn = document.getElementById("topBtn");
    
    // AI koristen za pisanje logike dugmeta (prikaz nakon 400px skrola)
    if (topBtn) { // Provjera da li dugme uopšte postoji u HTML-u
        window.onscroll = function() {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        };

        // AI koristen za implementaciju 'smooth scroll' funkcije
        topBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});