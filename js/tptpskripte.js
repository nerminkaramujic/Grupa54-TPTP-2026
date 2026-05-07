function osvjeziSat() {

    const vrijemeSada = new Date();
    const sati = vrijemeSada.getHours().toString().padStart(2, 0);
    const minute = vrijemeSada.getMinutes().toString().padStart(2, 0);
    const sekunde = vrijemeSada.getSeconds().toString().padStart(2, 0);

    const vrijemeTekst = `${sati}:${minute}:${sekunde}`;

    document.getElementById("sat-container").textContent = vrijemeTekst;


}



osvjeziSat();
setInterval(osvjeziSat, 1000); 

const prethodnoDugme = document.getElementById("dugme-prethodna-atrakcija");
const sljedeceDugme = document.getElementById("dugme-sljedeca-atrakcija");




const podaciAtrakcija = [

     {
        naslov: "Arheološki park",
        opis: "Sojeničko neolitsko naselje koje svjedoči o bogatoj historiji Tuzle.",
        slika: "images/arheoloski_park.jpg"
    },
    {
        naslov: "Slani Slapovi",
        opis: "Jedinstvena inhalacija slanom vodom na otvorenom, idealno za opuštanje.",
        slika: "images/slani_slapovi.jpg"
    },
    {
        naslov: "Restoran Panonski Lovac",
        opis: "Gastronomski užitak u prelijepom ambijentu sa pogledom na jezera.",
        slika: "images/restoran.jpg"
    },
    {
        naslov: "Muzej Geološka postavka",
        opis: "Pogledajte fosile, minerale i kristale soli stare milionima godina.",
        slika: "images/muzej.jpg"
    }
];

let trenutniIndeks = 0;

function prikaziAtrakciju(indeks) {
    const kartica = document.getElementById('kartica-sadrzaj');
    
    
    kartica.classList.add('kartica-skrivena');

    
    setTimeout(() => {
        
        document.getElementById('atrakcija-naslov').innerText = podaciAtrakcija[indeks].naslov;
        document.getElementById('atrakcija-opis').innerText = podaciAtrakcija[indeks].opis;
        document.getElementById('atrakcija-img').src = podaciAtrakcija[indeks].slika;
        
        
        kartica.classList.remove('kartica-skrivena'); /*"Animacija" je u CSS-u u js se samo dodaje/oduzima klasa*/
    }, 300); 
}



function sljedecaAtrakcija() {
    trenutniIndeks++;
    if (trenutniIndeks >= podaciAtrakcija.length) {
        trenutniIndeks = 0; 
    }
    prikaziAtrakciju(trenutniIndeks);
}

function prethodnaAtrakcija() {
    trenutniIndeks--;
    if (trenutniIndeks < 0) {
        trenutniIndeks = podaciAtrakcija.length - 1;
    }
    prikaziAtrakciju(trenutniIndeks);
}


prethodnoDugme.addEventListener("click", prethodnaAtrakcija);
sljedeceDugme.addEventListener("click", sljedecaAtrakcija);