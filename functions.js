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
        tdSzf2 : 'Labanc', // array tomb elso elem tdSzf2 tulajdonsaganak ertekadas
        tdHr2: '60.000', // array tomb elso elem tdHr2 tulajdonsaganak ertekadas
    },
    { // array tomb masodik elemenek letrehozasa
        tdHm: '48-as szabadságharc', // array tomb masodik elem tdHm tulajdonsaganak ertekadas
        tdSzf : 'Osztrák császárság (+ Orosz birodalom)', // array tomb masodik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '170.000 (+ 200.000)', // array tomb masodik elem tdHr tulajdonsaganak ertekadas
        tdSzf2 : 'Magyar királyság', // array tomb masodik elem tdSzf2 tulajdonsaganak ertekadas
        tdHr2: '170.000', // array tomb masodik elem tdHr2 tulajdonsaganak ertekadas
    },
    { // array tomb harmadik elemenek letrehozasa
        tdHm: 'I. világháború', // array tomb harmadik elem tdHm tulajdonsaganak ertekadas
        tdSzf : 'Antant', // array tomb harmadik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '43 millió', // array tomb harmadik elem tdHr tulajdonsaganak ertekadas
        tdSzf2 : 'Központi hatalmak', // array tomb harmadik elem tdSzf2 tulajdonsaganak ertekadas
        tdHr2: '25 millió', // array tomb harmadik elem tdHr2 tulajdonsaganak ertekadas
    },
    { // array tomb negyedik elemenek letrehozasa
        tdHm: 'Bosworthi csata', // array tomb negyedik elem tdHm tulajdonsaganak ertekadas
        tdSzf : 'Angolok (York + Lancester)', // array tomb negyedik elem tdSzf tulajdonsaganak ertekadas
        tdHr: '15.000', // array tomb negyedik elem tdHr tulajdonsaganak ertekadas
    }
]

function RenderTable(){ // a RenderTable függvény létrehozása
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

    for (let i = 1; i < array.length; i++) { //for ciklus, ami végig megy a array-on
        const tbody = document.createElement('tbody') // létrehozzuk a tbody taget 
        table.appendChild(tbody) // a table-hez hozzáadjuk a tbodyt
        const elem = array[i]; // kivesszük egy változóba a tömb aktuális elemét
        const tr = document.createElement('tr') //létrehozunk egy sort
        const tr2 = document.createElement('tr') //létrehozzuk a második sort
        tbody.appendChild(tr) //hozzáadjuk a tbodyhoz az első sort
        tbody.appendChild(tr2) //hozzáadjuk a tbodyhoz a második sort
    
        const tdHm = document.createElement('td') //lértehozunk egy tdHm elemet
        tdHm.innerHTML = elem.tdHm //beállitjuk a cella szövegét az aktuális elemnek
        tdHm.rowSpan = 2 //beállitjuk a tdHm cella rowspanjét 2-re
        tr.appendChild(tdHm) //hozzáadjuk a tdHm cellát az első sorhoz(tr)
    
        const tdSzf = document.createElement('td') //lértehozunk egy tdSzf elemet
        tdSzf.innerHTML = elem.tdSzf  //beállitjuk a cella szövegét az aktuális elemnek
        tr.appendChild(tdSzf) //hozzáadjuk a tdSzf cellát az első sorhoz(tr)
    
        const tdHr = document.createElement('td') //lértehozunk egy tdHr elemet
        tdHr.innerHTML = elem.tdHr  //beállitjuk a cella szövegét az aktuális elemnek
        tr.appendChild(tdHr) //hozzáadjuk a tdHr cellát az első sorhoz(tr)
    
        if(elem.tdSzf2 || elem.tdHr2){ // Ebbe az elágazásba ellenőrizzük, hogy az elemnek van-e tdSzf2, és tdHr2 tulajdonsága
            const tdSzf2 = document.createElement('td') //lértehozunk egy tdSzf2 elemet
            tdSzf2.innerHTML = elem.tdSzf2  //beállitjuk a cella szövegét az aktuális elemnek
            tr2.appendChild(tdSzf2) //hozzáadjuk a tdSzf2 cellát az első sorhoz(tr2)
    
            const tdHr2 = document.createElement('td') //lértehozunk egy tdHr2 elemet
            tdHr2.innerHTML = elem.tdHr2  //beállitjuk a cella szövegét az aktuális el
            tr2.appendChild(tdHr2) //hozzáadjuk a tdHr2 cellát az első sorhoz(tr2)
        }
    }
}

RenderTable() //a RenderTable függvény meghívása