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
