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

const table = document.createElement("table");//table elem létrehozása
document.body.appendChild(table);//table elem hozzáadása a document.body-hoz

function RenderTable(){ // a RenderTable függvény létrehozása
    const thead = document.createElement("thead");//thead elem létrehozása
    table.appendChild(thead);//thead elem hozzáadása a table-hoz
    
    const h_row = document.createElement("tr");//row elem létrehozása és eltárolása a h_row változóban
    thead.appendChild(h_row);//h_row elem hozzáadása a thead-hoz
    
    const th_hm = document.createElement("th");//th elem létrehozása és eltárolása a th_hm változóban
    th_hm.innerHTML = array[0].thHm;//th_hm szövegének megadása a rowobjectum tulajdonságával
    h_row.appendChild(th_hm);//th_hm elem hozzáadása a h_row-hoz
    
    const th_szf = document.createElement("th");//th elem létrehozása és eltárolása a th_szf változóban
    th_szf.innerHTML = array[0].thSzf;//th_szf szövegének megadása a rowobjectum tulajdonságával
    h_row.appendChild(th_szf);//th_szf elem hozzáadása a h_row-hoz
    
    const th_hr = document.createElement("th");//th elem létrehozása és eltárolása a th_hr változóban
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
    
        const tdHm = document.createElement('td') //lértehozunk egy td elemet és eltároljuk a tdHm változóban
        tdHm.innerHTML = elem.tdHm //beállitjuk a cella szövegét az aktuális elemnek
        tdHm.rowSpan = 2 //beállitjuk a tdHm cella rowspanjét 2-re
        tr.appendChild(tdHm) //hozzáadjuk a tdHm cellát az első sorhoz(tr)
    
        const tdSzf = document.createElement('td') //lértehozunk egy td elemet és eltároljuk a tdSzf változóban
        tdSzf.innerHTML = elem.tdSzf  //beállitjuk a cella szövegét az aktuális elemnek
        tr.appendChild(tdSzf) //hozzáadjuk a tdSzf cellát az első sorhoz(tr)
    
        const tdHr = document.createElement('td') //lértehozunk egy td elemet és eltároljuk a tdHr változóban
        tdHr.innerHTML = elem.tdHr  //beállitjuk a cella szövegét az aktuális elemnek
        tr.appendChild(tdHr) //hozzáadjuk a tdHr cellát az első sorhoz(tr)
    
        if(elem.tdSzf2 || elem.tdHr2){ // Ebbe az elágazásba ellenőrizzük, hogy az elemnek van-e tdSzf2, és tdHr2 tulajdonsága
            const tdSzf2 = document.createElement('td') //lértehozunk egy td elemet és eltároljuk a tdSzf2 változóban
            tdSzf2.innerHTML = elem.tdSzf2  //beállitjuk a cella szövegét az aktuális elemnek
            tr2.appendChild(tdSzf2) //hozzáadjuk a tdSzf2 cellát az első sorhoz(tr2)
    
            const tdHr2 = document.createElement('td') //lértehozunk egy td elemet és eltároljuk a tdHr2 változóban
            tdHr2.innerHTML = elem.tdHr2  //beállitjuk a cella szövegét az aktuális el
            tr2.appendChild(tdHr2) //hozzáadjuk a tdHr2 cellát az első sorhoz(tr2)
        }
    }
}

RenderTable() //a RenderTable függvény meghívása

function validalas(validelem, error){ //validalas() függvény létrehozása
    let valid = true //valid változóba bool elem rakása
    if(validelem.value === ""){ //a validelem értékének vizsgálata
        const parent = validelem.parentElement //a validelem parentelement-jének változóba rakása
        const errorhelye = parent.querySelector(".error") //a parent-hez tartozó "error" class-sal rendelkező elem lekérése
        if(errorhelye != ""){ //az errorhelye értékének vizsgálata hogy nem üres-e
            errorhelye.innerHTML = error //az errorhelye-nek a szövegének beállítása a 2. paraméterre(error)
        }
        valid = false //a valid értéket false-ra állítjuk
    }
    return valid //a függvény a valid értékével tér vissza (true/false)
}

function ketvalidalas(elsoelem, masodikelem, error) { //ketvalidalas() függvény létrehozása
    let valid = true //valid változóba bool elem rakása
    if (elsoelem.value != "" && !validalas(masodikelem, error)) { //az elsoelem és a masodikelem validálásának vizsgálata
        valid = false //a valid erteket falsera állitjuk
    }
    if (masodikelem.value != "" && !validalas(elsoelem, error)) { //a masodikelem és az elsoelem validálásának vizsgálata
        valid = false //a valid erteket falsera állitjuk
    }
    return valid //a függvény a valid értékével tér vissza (true/false)
}

const form = document.getElementById('form') // form elem létrehozása

form.addEventListener('submit', function(e){ //a form submit eseménykezelő létrehozása
    e.preventDefault() // alapvető mód meggátolása
    const harc_nev = document.getElementById('harc_nev') //a harc_nev lekérése
    const harcolo1 = document.getElementById('harcolo1') //a harcolo1 lekérése
    const hadero1 = document.getElementById('hadero1') //hadero1 lekérése
    const harcolo2 = document.getElementById('harcolo2') //a harcolo2 lekérése
    const hadero2 = document.getElementById('hadero2') //hadero2 lekérése

    const harc_nev_value = harc_nev.value //a harc_nev értékét kiveszem egy harc_nev változóba
    const harcolo1_value = harcolo1.value //a harcolo1 értékét kiveszem egy harcolo1 változóba
    const hadero1_value = hadero1.value //a hadero1 értékét kiveszem egy hadero1_value változóba
    const harcolo2_value = harcolo2.value //a harcolo2 értékét kiveszem egy harcolo2_value változóba
    const hadero2_value = hadero2.value //a hadero2 értékét kiveszem egy hadero2_value változóba

    const aktualis = e.currentTarget //az aktualis hely
    const errorok = aktualis.querySelectorAll('.error') //az error class-sal rendelkező elemeket kiválasztjuk
    const errorszoveg = "A mező kitöltés kötelező!"  //az errorszoveg létrehozása, mely megadja a validálásnál használt szöveget

    for(const error of errorok){ //egy error vegigmegy az errorokon és mindegyiket ""-re állítja
        error.innerHTML = ""
    }

    let valid = true // a valid értékének true-ra állítása

    if(!validalas(harc_nev, errorszoveg)){ //harc_nev validálásának eredményének vizsgálata
        valid = false //a valid értékének false-ra állítása
    }

    if(!validalas(harcolo1, errorszoveg)){ //harcolo1 validálásának eredményének vizsgálata
        valid = false //a valid értékének false-ra állítása
    }

    if(!validalas(hadero1, errorszoveg)){ //hadero1 validálásának eredményének vizsgálata
        valid = false //a valid értékének false-ra állítása
    }

    if (!ketmezovalidalas(harcolo2, hadero2, errorszoveg)) { //hadero2 és a harcolo2 validálásának eredményének vizsgálata
        valid = false //a valid értékének false-ra állítása
    }
    
    if(valid){ //Akkor megyünk be az elágazásba, ha a valid true
        if(fel2V && hadero2V){ //ha van fel2V és hadero2V akkor megyunk be az elagazasba
            const ujElem = {  //egy uj objektumot hozok létre
                tdHm:  harc_nev_value, //az objektum tdHm értéke a harc_nev_value
                tdSzf: harcolo1_value, //az objektum tdSzf értéke a harcolo1_value
                tdHr:  hadero1_value, //az objektum tdHr értéke a hadero1_value
                tdSzf2: harcolo2_value, //az objektum tdSzf2 értéke a harcolo2_value
                tdHr2: hadero2_value //az objektum tdHr2 értéke a hadero2_value
            }
            tomb.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
        }
        else{
            const ujElem = { //egy uj objektumot hozok létre 5 tulajdonsággal
                tdHm:  harc_nev_value, //az objektum tdHm értéke a harc_nev_value
                tdSzf: harcolo1_value, //az objektum tdSzf értéke a harcolo1_value
                tdHr:  hadero1_value, //az objektum tdHr értéke a hadero1_value
            }
            tomb.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
        }
        array.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
        table.innerHTML = "" //a table törlése

        RenderTable() //meghivom a RenderTable függvényt
    }
})