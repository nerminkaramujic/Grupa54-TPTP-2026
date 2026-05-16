const form = document.getElementById('contactForm');                    /* Kod je većinom pomogao napisati AI */
const successDiv = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // 1. Ime
    const name = document.getElementById('name');
    if (name.value.trim().length < 2) {
        showError(name, "Unesite ispravno ime.");
        isValid = false;
    } else {
        clearError(name);
    }

    // 2. Prezime
    const surname = document.getElementById('surname');
    if (surname.value.trim().length < 2) {
        showError(surname, "Unesite ispravno prezime.");
        isValid = false;
    } else {
        clearError(surname);
    }

    // 3. Dropdown (Tema)
    const subject = document.getElementById('subject');
    if (subject.value === "") {
        showError(subject, "Odaberite temu upita.");
        isValid = false;
    } else {
        clearError(subject);
    }

    // 4. Telefon (Regex: cifre, razmaci, crtice)
    const phone = document.getElementById('phone');
    const phoneRegex = /^[0-9\s\-]+$/;
    if (!phoneRegex.test(phone.value.trim())) {
        showError(phone, "Dozvoljeni samo brojevi, razmaci i crtice.");
        isValid = false;
    } else {
        clearError(phone);
    }

    // 5. Email (Regex validacija)
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, "Unesite ispravnu email adresu.");
        isValid = false;
    } else {
        clearError(email);
    }

    // 6. Poruka
    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
        showError(message, "Poruka mora imati barem 10 znakova.");
        isValid = false;
    } else {
        clearError(message);
    }

    // Ako je sve u redu
    if (isValid) {
        form.classList.add('hidden');
        successDiv.classList.remove('hidden');
        successDiv.innerHTML = `
            <h3>Hvala, ${name.value}!</h3>
            <p>Vaša poruka je uspješno poslana.</p>
        `;
    }
});

// Reset funkcija
document.getElementById('resetBtn').addEventListener('click', () => {
    form.reset();

    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => clearError(input));

    successDiv.classList.add('hidden');
    form.classList.remove('hidden');
});

function showError(input, message) {
    const group = input.parentElement;
    const errorSpan = group.querySelector('.error-msg');

    input.classList.add('error-border');
    errorSpan.innerText = message;
}

function clearError(input) {
    const group = input.parentElement;
    const errorSpan = group.querySelector('.error-msg');

    input.classList.remove('error-border');
    errorSpan.innerText = "";
}