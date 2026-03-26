let kalender = [];
let jahr = 2026;
let monat = 2;
let startTag = (new Date(jahr, monat, 1).getDay() + 6) % 7; 

for (let i = 0; i < startTag; i++) {
    kalender.push(null);
}
let tageimMonat = 31; 
for (let tag = 1; tag <= tageimMonat; tag++) {
    kalender.push(tag);
}

let tbody = document.getElementById("tage");
tbody.innerHTML = "";
let tr = document.createElement("tr");

for (let i = 0; i < kalender.length; i++) {
        let td = document.createElement("td");
        td.textContent = kalender[i];
            if (kalender[i] === null) td.classList.add("vormonat");
        tr.appendChild(td);
        if ((i + 1) % 7 === 0) {
            tbody.appendChild(tr);
            tr = document.createElement("tr");
            while (kalender.length % 7 !== 0) {
            kalender.push(null);
       }
    }
}