let jahr = 2026;
let monat = 2;
let heute = new Date();
let heutigerTag = heute.getDate();
let heutigerMonat = heute.getMonth();
let aktuellesJahr = heute.getFullYear();

let feiertage = new Set();
let feiertagNamen = {};

let monate = [
  "Januar", "Februar", "März", "April",
  "Mai", "Juni", "Juli", "August",
  "September", "Oktober", "November", "Dezember"
];
let feiertagDeutsch = {
  "New Year's Day": "Neujahr",
  "Labor Day": "Tag der Arbeit",
  "German Unity Day": "Tag der Deutschen Einheit",
  "Christmas Day": "1. Weihnachtstag",
  "Boxing Day": "2. Weihnachtstag",
   "Epiphany" : "Heilige Drei Könige",
   "International Women's Day" : "Internationaler Frauentag",
   "Good Friday" : "Karfreitag",
   "Easter Sunday" : "Ostersonntag",
   "Easter Monday": "Ostermontag",
   "Labour Day" : "Tag der deutschen Arbeit",
   "Ascension Day" : "Christi Himmelfahrt",
   "Pentecost" : "Pfingstsonntag",
   "Whit Monday" : "Pfingstmontag",
   "Corpus Christi" : "Fronleichnam",
   "Assumption Day" : "Mariä Himmelfahrt",
   "World Children's Day" : "Weltkindertag",
   "Reformation Day" : "Reformationstag",
   "All Saints' Day" : "Allerheiligen",
   "Repentance and Prayer Day" : "Buß- und Bettag",
   "St. Stephen's Day" : "2. Weihnachtstag",


};

async function ladeFeiertage(jahr) {
    const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${jahr}/DE`);
    const data = await res.json();

    feiertage = new Set();
    feiertagNamen = {};

    data.forEach(f => {
        feiertage.add(f.date);
        feiertagNamen[f.date] = feiertagDeutsch[f.name] || f.name;
    });

     feiertage.add(`${jahr}-12-24`);
    feiertagNamen[`${jahr}-12-24`] = "Heiligabend";

    feiertage.add(`${jahr}-12-31`);
    feiertagNamen[`${jahr}-12-31`] = "Silvester";
}


function formatDate(jahr, monat, tag) {
    return `${jahr}-${String(monat + 1).padStart(2, "0")}-${String(tag).padStart(2, "0")}`;
}

async function renderCalendar() {

    await ladeFeiertage(jahr);

    let startTag = (new Date(jahr, monat, 1).getDay() + 6) % 7;
    let tageImMonat = new Date(jahr, monat + 1, 0).getDate();

    let tbody = document.getElementById("tage");

    document.getElementById("monatTitel").textContent =
        monate[monat] + " " + jahr;

    tbody.innerHTML = "";

    let tr = document.createElement("tr");


    for (let i = 0; i < startTag; i++) {
        tr.appendChild(document.createElement("td"));
    }


    for (let tag = 1; tag <= tageImMonat; tag++) {

        let td = document.createElement("td");
        td.textContent = tag;

        if (tag === heutigerTag &&
            monat === heutigerMonat &&
            jahr === aktuellesJahr) {
            td.classList.add("heute");
}

        let datum = formatDate(jahr, monat, tag);
        let spalte = (startTag + (tag - 1)) % 7;


        if (spalte === 5 || spalte === 6) {
            td.classList.add("wochenende");
        }


        if (spalte === 6) {
            td.classList.add("sonntag");
        }


        if (feiertage.has(datum)) {
            td.classList.add("feiertag");
            td.setAttribute("data-tooltip", feiertagNamen[datum]);
        }

        tr.appendChild(td);


        if (spalte === 6) {
            tbody.appendChild(tr);
            tr = document.createElement("tr");
        }
    }

    tbody.appendChild(tr);
}


function nextMonth() {
    monat++;
    if (monat > 11) {
        monat = 0;
        jahr++;
    }
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
    let heute = new Date();
    monat = heute.getMonth();
    jahr = heute.getFullYear();
    renderCalendar();
}



document.getElementById("nextBtn").addEventListener("click", nextMonth);
document.getElementById("prevBtn").addEventListener("click", prevMonth);


renderCalendar();