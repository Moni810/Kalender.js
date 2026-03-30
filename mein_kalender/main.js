let jahr = 2026;
let monat = 2;

let monate = [
  "Januar", "Februar", "März", "April",
  "Mai", "Juni", "Juli", "August",
  "September", "Oktober", "November", "Dezember"
];

function renderCalendar() {
     document.getElementById("monatTitel").textContent =
        monate[monat] + " " + jahr;
        let tageImMonat = new Date(jahr,monat +1, 0).getDate();
let startTag = new Date(jahr, monat, 7).getDay( +6) % 7;
    let tbody = document.getElementById("tage");
    tbody.innerHTML ="";

    let tr = document.createElement("tr");
    let zellenZähler = 0;


    for (let i = 0; i < startTag; i++) {
        let td = document.createElement("td");
        td.textContent = "";
        tr.appendChild(td);
        zellenZähler++;
    }

    for (let tag = 1 ; tag <= tageImMonat; tag++) {
        let td = document.createElement("td");
        td.textContent = tag;

        tr.appendChild(td);
        zellenZähler++;
        
        if (zellenZähler % 7 === 0) {
            tbody.appendChild(tr);
            tr = document.createElement("tr");
        }
    }

    while (zellenZähler % 7 !== 0) {
                let td = document.createElement("td");
                td.textContent = "";
                tr.appendChild(td);
                zellenZähler++;
            }
            tbody.appendChild(tr);         
}

function nextMonth() {
    monat++;

    if (monat > 11) {
        monat = 0;
        jahr++;
    }
}

function prevMonth() {
    monat--;

    if (monat < 0) {
        monat = 11;
        jahr--;
    }
}
renderCalendar();
document.getElementById("nextBtn").addEventListener("click", function()) {
    console.log("Klick funktioniert");
    document.getElementById("prevBtn").addEventListener("click", function()) {
    console.log("Klick funktioniert");
    }
}
console.log(document.getElementById("nextBtn"));
