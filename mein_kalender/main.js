let jahr = 2026;
let monat = 2;
let heute = new Date();
let heutigerTag = heute.getDate();
let heutigerMonat = heute.getMonth();
let aktuellesJahr = heute.getFullYear();

let monate = [
  "Januar", "Februar", "März", "April",
  "Mai", "Juni", "Juli", "August",
  "September", "Oktober", "November", "Dezember"
];

function renderCalendar() {
        let tageImMonat = new Date(jahr,monat +1, 0).getDate();
        let startTag = (new Date(jahr, monat , 1).getDay() +6) % 7;
        let tbody = document.getElementById("tage");
        document.getElementById("monatTitel").textContent =
        monate[monat] + " " + jahr;
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
            if (tag === heutigerTag && monat === heutigerMonat && jahr === aktuellesJahr) {
            td.classList.add("heute");
        }
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
    renderCalendar();
}

function prevMonth() {
    monat--;
    if (monat < 0) {
        monat = 11;
        jahr--;
    }
    renderCalendar();
}
function goToToday() {
    monat = new Date().getMonth();
    jahr = new Date().getFullYear();
    renderCalendar();
}
document.getElementById("nextBtn").addEventListener("click", nextMonth);
document.getElementById("prevBtn").addEventListener("click", prevMonth);
renderCalendar();
