const array = [
    { //array tomb nulladik elemenek letrehozasa
        thHm: "Harc megnevezése", // array tomb nulladik elem thHm tulajdonsaganak ertekadas
        thSzf: "Szembenálló felek", // array tomb nulladik elem thSzf tulajdonsaganak ertekadas
        thHr: "Haderő" // array tomb nulladik elem thHr tulajdonsaganak ertekadas
    },
    { // array tomb elso elemenek letrehozasa
        tdHm: 'Rákóczi szabadságharc', // array tomb elso elem tdHm tulajdonsaganak ertekadas
        tdSzf: "Kuruc", // array tomb elso elem tdSzf tulajdonsaganak ertekadas
        tdHr: "70.000", // array tomb elso elem tdHr tulajdonsaganak ertekadas
    },
    { // array tomb masodik elemenek letrehozasa
        tdSzf : 'Labanc', // array tomb masodik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '60.000', // array tomb masodik elem tdHr tulajdonsaganak ertekadas
    },
    { // array tomb harmadik elemenek letrehozasa
        tdHm: '48-as szabadságharc', // array tomb harmadik elem tdHm tulajdonsaganak ertekadas
        tdSzf : 'Osztrák császárság (+ Orosz birodalom)', // array tomb harmadik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '170.000 (+ 200.000)', // array tomb harmadik elem tdHr tulajdonsaganak ertekadas
    },
    { // array tomb negyedik elemenek letrehozasa
        tdSzf : 'Magyar királyság', // array tomb negyedik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '170.000', // array tomb negyedik elem tdHr tulajdonsaganak ertekadas
    },
    { // array tomb otodik elemenek letrehozasa
        tdHm: 'I. világháború', // array tomb otodik elem tdHm tulajdonsaganak ertekadas
        tdSzf : 'Antant', // array tomb otodik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '43 millió', // array tomb otodik elem tdHr tulajdonsaganak ertekadas
    },
    { // array tomb hatodik elemenek letrehozasa
        tdSzf : 'Központi hatalmak', // array tomb hatodik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '25 millió', // array tomb hatodik elem tdHr tulajdonsaganak ertekadas
    },
    { // array tomb hetedik elemenek letrehozasa
        tdHm: 'Bosworthi csata', // array tomb hetedik elem tdHm tulajdonsaganak ertekadas
        tdSzf : 'Angolok (York + Lancester)', // array tomb hetedik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '15.000', // array tomb hetedik elem tdHr tulajdonsaganak ertekadas
    }
]

const table = document.createElement("table");//table elem létrehozása
document.body.appendChild(table);//table elem hozzáadása a document.body-hoz

const thead = document.createElement("thead");//thead elem létrehozása
table.appendChild(thead);//thead elem hozzáadása a table-hoz

const h_row = document.createElement("tr");//h_row elem létrehozása
thead.appendChild(h_row);//h_row elem hozzáadása a thead-hoz

const th_hm = document.createElement("th");//th_hm elem létrehozása
th_hm.innerHTML = array[0].thHm;//th_hm szövegének megadása a rowobjectum tulajdonságával
h_row.appendChild(th_hm);//th_hm elem hozzáadása a h_row-hoz

const th_szf = document.createElement("th");//th_szf elem létrehozása
th_szf.innerHTML = array[0].thSzf;//th_szf szövegének megadása a rowobjectum tulajdonságával
h_row.appendChild(th_szf);//th_szf elem hozzáadása a h_row-hoz

const th_hr = document.createElement("th");//th_hr elem létrehozása
th_hr.innerHTML = array[0].thHr;//th_hr szövegének megadása a rowobjectum tulajdonságával
h_row.appendChild(th_hr);//th_hr elem hozzáadása a h_row-hoz

const tbody = document.createElement("tbody");//tbody elem létrehozása
table.appendChild(tbody);//tbody elem hozzáadása a table-hoz

for (let i = 0; i < array.length; i++) { //for ciklus, ami végig megy a array-on
    const tbody = document.createElement('tbody') // létrehozzuk a tbody taget 
    table.appendChild(tbody) // a table-hez hozzáadjuk a tbodyt
    const elem = array[i]; // kivesszük egy változóba a tömb aktuális elemét
    const tr = document.createElement('tr') //létrehozunk egy sort
    const tr2 = document.createElement('tr') //létrehozzuk a második sort
    tbody.appendChild(tr) //hozzáadjuk a tbodyhoz az első sort
    tbody.appendChild(tr2) //hozzáadjuk a tbodyhoz a második sort

    const tdHm = document.createElement('td') //lértehozunk egy tdHm elemet
    tdHm.innerHTML = elem.harc //beállitjuk a cella szövegét az aktuális elemnek
    tdHm.rowSpan = 2 //beállitjuk a tdHm cella rowspanjét 2-re
    tr.appendChild(tdHm) //hozzáadjuk a tdHm cellát az első sorhoz(tr)

    const tdSzf = document.createElement('td') //lértehozunk egy tdSzf elemet
    tdSzf.innerHTML = elem.fel  //beállitjuk a cella szövegét az aktuális elemnek
    tr.appendChild(tdSzf) //hozzáadjuk a tdSzf cellát az első sorhoz(tr)

    const tdhr = document.createElement('td') //lértehozunk egy tdhr elemet
    tdhr.innerHTML = elem.hadero  //beállitjuk a cella szövegét az aktuális elemnek
    tr.appendChild(tdhr) //hozzáadjuk a tdhr cellát az első sorhoz(tr)

    const tdSzf2 = document.createElement('td') //lértehozunk egy tdSzf2 elemet
    tdSzf2.innerHTML = elem.fel2  //beállitjuk a cella szövegét az aktuális elemnek
    tr2.appendChild(tdSzf2) //hozzáadjuk a tdSzf2 cellát az első sorhoz(tr2)

    const tdhr2 = document.createElement('td') //lértehozunk egy tdhr2 elemet
    tdhr2.innerHTML = elem.hadero2  //beállitjuk a cella szövegét az aktuális elemnek
    tr2.appendChild(tdhr2) //hozzáadjuk a tdhr2 cellát az első sorhoz(tr2)


}