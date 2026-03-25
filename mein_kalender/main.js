console.log("JS läuft!");

const heute = new Date().getDate();
const alleTds = document.getElementsByTagName("td");

for (let i = 0; i < alleTds.length; i++) {
    const td = alleTds[i];
    
    if (td.classList.contains("vormonat") || td.classList.contains("neuermonat")) {
        continue;
    }

    if (Number(td.textContent) === heute) {
        td.style.backgroundColor = "pink";
    }
}