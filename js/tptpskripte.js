/* Ispod se nalazi Nerminov dio JavaScript koda. */

function osvjeziSat() {
  const satContainer = document.getElementById("sat-container");

  if (!satContainer) return;

  const vrijemeSada = new Date();
  const sati = vrijemeSada.getHours().toString().padStart(2, 0);
  const minute = vrijemeSada.getMinutes().toString().padStart(2, 0);

  const vrijemeTekst = `${sati}:${minute}`;

  satContainer.textContent = vrijemeTekst;
}

const podaciAtrakcija = [
  {
    naslov: "Arheološki park",
    opis: "Sojeničko neolitsko naselje koje svjedoči o bogatoj historiji Tuzle.",
    slika: "images/arheoloski_park.jpg",
    kategorija: "historija",
    link: "sadrzaj.html#proslost",
  },
  {
    naslov: "Slani Slapovi",
    opis: "Jedinstvena inhalacija slanom vodom na otvorenom.",
    slika: "images/slani_slapovi.jpg",
    kategorija: "voda",
    link: "sadrzaj.html#slani-slapovi",
  },
  {
    naslov: "Muzej Geološka postavka",
    opis: "Pogledajte fosile, minerale i kristale soli stare milionima godina.",
    kategorija: "historija",
    slika: "images/muzej1.jpg",
    link: "sadrzaj.html#proslost",
  },
  {
    naslov: "Restoran Panonski Lovac",
    opis: "Gastronomski užitak u prelijepom ambijentu sa pogledom na jezera.",
    slika: "images/restoran.jpg",
    kategorija: "zabava",
    link: "sadrzaj.html#rekreacija",
  },
  {
    naslov: "Prvo panonsko jezero",
    opis: "Najveće jezero u kompleksu, poznato po kristalno čistoj slanoj vodi i ljekovitim svojstvima.",
    slika: "images/jezero1.jpg",
    kategorija: "voda",
    link: "sadrzaj.html#jezera",
  },
  {
    naslov: "Drugo panonsko jezero",
    opis: "Idealno mjesto za plivanje i relaksaciju, okruženo uređenim plažama i ugostiteljskim objektima.",
    slika: "images/jezero2.jpg",
    kategorija: "voda",
    link: "sadrzaj.html#jezera",
  },
  {
    naslov: "Treće panonsko jezero",
    opis: "Najmodernije jezero u sklopu kompleksa, opremljeno vodenim toboganima.",
    slika: "images/jezero3.jpg",
    kategorija: "voda",
    link: "sadrzaj.html#jezera",
  },
  {
    naslov: "Dječiji zabavni park",
    opis: "Igralište prilagođeno djeci svih uzrasta za nezaboravnu zabavu.",
    slika: "images/djeciji_park.jpg",
    kategorija: "zabava",
    link: "sadrzaj.html#dodatno",
  },
];

function prikaziKartice(podaci) {
  console.log("asdasdasdas fja");
  const kako_do_nas_container = document.getElementById(
    "container-za-kako-do-nas",
  );
  const container = document.getElementById("container-za-kartice");

  if (!container || !kako_do_nas_container) return;

  kako_do_nas_container.innerHTML = " ";
  container.innerHTML = " ";
  container.style.display = "grid";

  podaci.forEach((atrakcija) => {
    const karticaHTML = `
            <div class="kartica" data-kategorija="${atrakcija.kategorija}">
                <a href="${atrakcija.link}"  class="btn-vise">
                <img src="${atrakcija.slika}" alt="${atrakcija.naslov}"></a>
                <div class="opis-kartice">
                    <h3>${atrakcija.naslov}</h3>
                    <p>${atrakcija.opis}</p>
                    
                </div>
            </div>
        `;

    container.innerHTML += karticaHTML;
  });
}

function filtriraj(kategorija) {
  if (kategorija === "sve") {
    prikaziKartice(podaciAtrakcija);
  } else {
    const filtrirano = podaciAtrakcija.filter(
      (a) => a.kategorija === kategorija,
    ); //prolazi kroz sve elemente i provjerava da li se kategorija podudara(nesto slicno petlji)
    prikaziKartice(filtrirano);
  }
}

function prikaziMapu() {
  const container = document.getElementById("container-za-kako-do-nas");
  const container_za_kartice = document.getElementById("container-za-kartice");

  if (!container || !container_za_kartice) return;

  container_za_kartice.style.display = "none";
  container_za_kartice.innerHTML = "";
  container.innerHTML = `
            <h3 class="mapa-naslov">KAKO DO NAS?</h3>
            <p>Panonska jezera smještena su u samom centru Tuzle. Ovaj jedinstveni kompleks slanih jezera lako je dostupan svim posjetiocima. Uz pomoć mape u nastavku brzo i jednostavno pronađite najkraći put do naših ljekovitih voda!</p>
            <iframe class="mapa" id="kako-do-nas-iframe" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.8346083164996!2d18.6820244!3d44.5394906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ad240102f0d3%3A0x3727dab5238ff128!2sPanonska%20jezera!5e0!3m2!1shr!2sba!4v1715366400000!5m2!1shr!2sba" frameborder="0"></iframe>
    `;
}

const APIKEY = "9e6f6576f668c2fa48ce85a7d675fa80";
URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
/* Ovaj dio koda sluzi za implementaciju vremenske prognoze preko API kljuca */
/* Ovo funkcionise tako sto se iz vanjskog API servisa povlace odredjeni podaci */
async function osvjeziVrijeme() {
  const aside_temp = document.getElementById("aside-temperatura");
  const emotikon = document.getElementById("vrijeme-emotikon");

  if (!aside_temp || !emotikon) return;
  try {
    const res = await fetch(`${URL}&q=Tuzla&appid=${APIKEY}`);
    let informacije = await res.json();

    aside_temp.innerText = "Tuzla: " + Math.round(informacije.main.temp) + "°C";

    const stanje = informacije.weather[0].main;

    const dan = informacije.weather[0].icon.includes("d");

    switch (stanje) {
      case "Clear":
        if (dan) {
          console.log("Dan");
          emotikon.innerText = "☀️";
        } else {
          console.log("Noc");
          emotikon.innerText = "🌙";
        }

        break;
      case "Clouds":
        emotikon.innerText = "☁️";
        break;
      case "Rain":
      case "Drizzle":
        emotikon.innerText = "🌧️";
        break;
      case "Thunderstorm":
        emotikon.innerText = "⛈️";
        break;
      case "Snow":
        emotikon.innerText = "❄️";
        break;
      case "Mist":
      case "Fog":
      case "Haze":
        emotikon.innerText = "🌫️";
        break;
      default:
        console.log("proso kroz case default");
    }

    console.log(
      "Trenutna temperatura u Tuzli: " +
        informacije.main.temp +
        "°C" +
        informacije.weather[0].main,
    );
    console.log(informacije);
  } catch (error) {
    console.error("greška kod apija nije kako treba nesto");

    aside_temp.innerText = "Tuzla: -- °C";
    emotikon.innerText = "☁️";
  }
}

osvjeziVrijeme();
const tamnaTema = document.getElementById("tamna-tema-button");
/* Ovaj dio koda sluzi za implementaciju tamne teme. Tj on dodaje klasu na tijelu prilikom klika na Button! */
tamnaTema.addEventListener("click", () => {
  document.body.classList.toggle("tamna-tema");

  if (document.body.classList.contains("tamna-tema")) {
    localStorage.setItem("tema", "tamna");
    document.documentElement.classList.remove("svijetla-tema");
    tamnaTema.innerText = "☀️";
  } else {
    localStorage.setItem("tema", "svijetla");
    document.documentElement.classList.add("svijetla-tema");
    tamnaTema.innerText = "🌙";
  }
});

const sacuvanaTema =
  localStorage.getItem(
    "tema",
  ); /* Ovaj dio koda sluzi za primjenu prefers-color-scheme tj da ne bi doslo do problema zbog buttona u headeru ukoliko je tamna tema po defaultu ukljucena */
const sistem = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sacuvanaTema === "tamna" || (!sacuvanaTema && sistem)) {
  document.body.classList.add("tamna-tema");
  tamnaTema.innerText = "☀️";
} else {
  if (sacuvanaTema === "svijetla") {
    document.documentElement.classList.add("svijetla-tema");
  }
  tamnaTema.innerText = "🌙";
}
const btn = document.getElementById("drop-meni");
const meni = document.getElementById("lista-u-headeru");

btn.addEventListener("click", () => {
  meni.classList.toggle("show");
  btn.classList.toggle("pretvoriUX");
});

prikaziKartice(podaciAtrakcija);

if (localStorage.getItem("tema") === "tamna") {
  document.body.classList.add("tamna-tema");
}

const buttonZaSve = document.getElementById("sve-button");
const buttonZaZabavu = document.getElementById("zabava-button");
const buttonZaJezera = document.getElementById("jezera-button");
const buttonZaHistoriju = document.getElementById("historija-button");
const kakoDoNasButton = document.getElementById("mapa-button");

if (buttonZaSve) buttonZaSve.addEventListener("click", () => filtriraj("sve"));
if (buttonZaZabavu)
  buttonZaZabavu.addEventListener("click", () => filtriraj("zabava"));
if (buttonZaJezera)
  buttonZaJezera.addEventListener("click", () => filtriraj("voda"));
if (buttonZaHistoriju)
  buttonZaHistoriju.addEventListener("click", () => filtriraj("historija"));
if (kakoDoNasButton)
  kakoDoNasButton.addEventListener("click", () => prikaziMapu());

osvjeziSat();
setInterval(osvjeziSat, 1000); /* "Osvjezavanje" sata svakih 1s*/

/* Iznad se nalazi Nerminov dio JavaScript-a. To je dio koji se koristi na index-u.Takodjer se koristi na svim stranicama za header. */

/* Ispod se nalazi Nejrin dio JavaScript koda. to je kod koji se koristi na stranici sadrzaj.html. */

document.addEventListener("DOMContentLoaded", function () {
  // AI asistencija: Generisanje sintakse za IntersectionObserver prema mojoj zamisli o animacijama
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const topBtn = document.getElementById("topBtn");

  // AI koristen za pisanje logike dugmeta (prikaz nakon 400px skrola)
  if (topBtn) {
    // Provjera da li dugme uopšte postoji u HTML-u
    window.onscroll = function () {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    // AI koristen za implementaciju 'smooth scroll' funkcije
    topBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }
});

/* Iznad se nalazi Nejrin dio JavaScript koda. Nejrin dio koda mora ici prvi zato sto dolazi do problema u suprotnom. */

/* Ispod se nalazi Nesadov dio koda. To je kod koji se koristi na stranici kontakt.html i on sluzi za validaciju unosa korisnika! */

const form =
  document.getElementById(
    "contactForm",
  ); /* Kod je većinom pomogao napisati AI */
const successDiv = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // 1. Ime
  const name = document.getElementById("name");
  if (name.value.trim().length < 2) {
    showError(name, "Unesite ispravno ime.");
    isValid = false;
  } else {
    clearError(name);
  }

  // 2. Prezime
  const surname = document.getElementById("surname");
  if (surname.value.trim().length < 2) {
    showError(surname, "Unesite ispravno prezime.");
    isValid = false;
  } else {
    clearError(surname);
  }

  // 3. Dropdown (Tema)
  const subject = document.getElementById("subject");
  if (subject.value === "") {
    showError(subject, "Odaberite temu upita.");
    isValid = false;
  } else {
    clearError(subject);
  }

  // 4. Telefon (Regex: cifre, razmaci, crtice)
  const phone = document.getElementById("phone");
  const phoneRegex = /^[0-9\s\-]+$/;
  if (!phoneRegex.test(phone.value.trim())) {
    showError(phone, "Dozvoljeni samo brojevi, razmaci i crtice.");
    isValid = false;
  } else {
    clearError(phone);
  }

  // 5. Email (Regex validacija)
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "Unesite ispravnu email adresu.");
    isValid = false;
  } else {
    clearError(email);
  }

  // 6. Poruka
  const message = document.getElementById("message");
  if (message.value.trim().length < 10) {
    showError(message, "Poruka mora imati barem 10 znakova.");
    isValid = false;
  } else {
    clearError(message);
  }

  // Ako je sve u redu
  if (isValid) {
    form.classList.add("hidden");
    successDiv.classList.remove("hidden");
    successDiv.innerHTML = `
            <h3>Hvala, ${name.value}!</h3>
            <p>Vaša poruka je uspješno poslana.</p>
        `;
  }
});

// Reset funkcija
document.getElementById("resetBtn").addEventListener("click", () => {
  form.reset();

  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => clearError(input));

  successDiv.classList.add("hidden");
  form.classList.remove("hidden");
});

function showError(input, message) {
  const group = input.parentElement;
  const errorSpan = group.querySelector(".error-msg");

  input.classList.add("error-border");
  errorSpan.innerText = message;
}

function clearError(input) {
  const group = input.parentElement;
  const errorSpan = group.querySelector(".error-msg");

  input.classList.remove("error-border");
  errorSpan.innerText = "";
}
