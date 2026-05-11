function osvjeziSat() {

    const vrijemeSada = new Date();
    const sati = vrijemeSada.getHours().toString().padStart(2, 0);
    const minute = vrijemeSada.getMinutes().toString().padStart(2, 0);
    const sekunde = vrijemeSada.getSeconds().toString().padStart(2, 0);

    const vrijemeTekst = `${sati}:${minute}:${sekunde}`;

    document.getElementById("sat-container").textContent = vrijemeTekst;


}


const podaciAtrakcija = [
    {
        naslov: "Arheološki park",
        opis: "Sojeničko neolitsko naselje koje svjedoči o bogatoj historiji Tuzle.",
        slika: "images/arheoloski_park.jpg",
        kategorija: "historija",
        link: "detalji.html"
    },
    {
        naslov: "Slani Slapovi",
        opis: "Jedinstvena inhalacija slanom vodom na otvorenom.",
        slika: "images/slani_slapovi.jpg",
        kategorija: "voda",
        link: "detalji.html"
    },
    {
        naslov: "Muzej Geološka postavka",
        opis:   "Pogledajte fosile, minerale i kristale soli stare milionima godina.",
        kategorija: "historija",
        slika: "images/muzej.jpg",
        link: "muzej.link"

    },
    {
        naslov: "Restoran Panonski Lovac",
        opis: "Gastronomski užitak u prelijepom ambijentu sa pogledom na jezera.",
        slika: "images/restoran.jpg",
        kategorija: "zabava"
    },
    {
        naslov: "Prvo panonsko jezero",
        opis: "Najveće jezero u kompleksu, poznato po kristalno čistoj slanoj vodi i ljekovitim svojstvima.",
        slika: "images/jezero1.jpg",
        kategorija: "voda",
        link: "detalji.html"
    },
    {
        naslov: "Drugo panonsko jezero",
        opis: "Idealno mjesto za plivanje i relaksaciju, okruženo uređenim plažama i ugostiteljskim objektima.",
        slika: "images/jezero2.jpg",
        kategorija: "voda",
        link: "detalji.html"
    },
    {
        naslov: "Treće panonsko jezero",
        opis: "Najmodernije jezero u sklopu kompleksa, opremljeno vodenim toboganima.",
        slika: "images/jezero3.jpg",
        kategorija: "voda",
        link: "detalji.html"
    },
    {
        naslov: "Dječiji zabavni park",
        opis: "Igralište prilagođeno djeci svih uzrasta za nezaboravnu zabavu.",
        slika: "images/djeciji_park.jpg",
        kategorija: "zabava",
        link: "detalji.html"
    }
];

function prikaziKartice(podaci) {
    console.log("asdasdasdas fja");
    const kako_do_nas_container = document.getElementById("container-za-kako-do-nas")
    const container = document.getElementById("container-za-kartice");
    kako_do_nas_container.innerHTML = " ";
    container.innerHTML = " "; 
    container.style.display = "grid";

    podaci.forEach(atrakcija => {
        const karticaHTML = `
            <div class="kartica" data-kategorija="${atrakcija.kategorija}">
                <a href="${atrakcija.link}" class="btn-vise">
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
    if (kategorija === 'sve') {
        prikaziKartice(podaciAtrakcija);
    } else {
        const filtrirano = podaciAtrakcija.filter(a => a.kategorija === kategorija); //prolazi kroz sve elemente i provjerava da li se kategorija podudara(nesto slicno petlji)
        prikaziKartice(filtrirano);
    }
}


function prikaziMapu() { 

    const container = document.getElementById("container-za-kako-do-nas")
    const container_za_kartice = document.getElementById("container-za-kartice");

    container_za_kartice.style.display = "none";
    container_za_kartice.innerHTML = "";
    container.innerHTML = `
            <h3 class="mapa-naslov">KAKO DO NAS?</h3>
            <p>Panonska jezera smještena su u samom centru Tuzle. Ovaj jedinstveni kompleks slanih jezera lako je dostupan svim posjetiocima. Uz pomoć mape u nastavku brzo i jednostavno pronađite najkraći put do naših ljekovitih voda!</p>
            <iframe class="mapa" id="kako-do-nas-iframe" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.8346083164996!2d18.6820244!3d44.5394906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ad240102f0d3%3A0x3727dab5238ff128!2sPanonska%20jezera!5e0!3m2!1shr!2sba!4v1715366400000!5m2!1shr!2sba" frameborder="0"></iframe>
    `;



}


prikaziKartice(podaciAtrakcija);

const buttonZaSve = document.getElementById("sve-button");
const buttonZaZabavu = document.getElementById("zabava-button");
const buttonZaJezera = document.getElementById("jezera-button");
const buttonZaHistoriju = document.getElementById("historija-button");
const kakoDoNasButton = document.getElementById("mapa-button");


buttonZaSve.addEventListener("click", () =>filtriraj("sve"));
buttonZaZabavu.addEventListener("click", () => filtriraj("zabava"));
buttonZaJezera.addEventListener("click",  () =>filtriraj("voda"));
buttonZaHistoriju.addEventListener("click", () => filtriraj("historija"));
kakoDoNasButton.addEventListener("click", () => prikaziMapu());






osvjeziSat();
setInterval(osvjeziSat, 1000); 
