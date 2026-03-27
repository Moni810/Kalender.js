let tbody = document.getElementById("tage");
console.log (tbody);
for (let i = 0; i < tage.length; i++) {
    let wochen = tage[i];
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    if (tage[i] === null) td.classList.add("vormonat");
    tr.appendChild("td"); 
    if ((i + 1) % 7 ===0) {
        tbody.appendChild("tr");
        tr = document.createElement("tr");
        if (tage[i] !== null);
    }

    td.textContent = "1";
    } 