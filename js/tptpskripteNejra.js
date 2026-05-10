document.addEventListener("DOMContentLoaded", function() {
    // 1. Slide-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // 2. Back to Top
    const topBtn = document.getElementById("topBtn");
    
    if (topBtn) { // Provjera da li dugme uopšte postoji u HTML-u
        window.onscroll = function() {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        };

        topBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});