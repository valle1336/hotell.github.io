const meny = document.getElementById("Meny-js");

const knapp = document.getElementById("menyButton");

let screenWidth = screen.width;


function hideMeny() {
    meny.classList.toggle("hide");
    console.log("Hide funtion used.");
}

knapp.addEventListener("click", hideMeny);

if(screenWidth < 1000) {
    meny.classList.toggle("hide");
}

if(screenWidth >= 1000) {
    knapp.classList.toggle("hide");
}

const kontaktMeny = document.getElementById("Kontakt-js");

const kontaktKnapp = document.getElementById("Skicka-js");


function hideKontakt() {
    kontaktMeny.classList.toggle("hideKontakt");
    console.log("Kontakt hide funtion used.");
}

kontaktKnapp.addEventListener("click", hideKontakt);











