/**
 * a fejléc legenerálása
 * @param {object} obj a fejléc elemeit tartalmazó objektum
 */
function fejlecGeneralas(obj){
    const thead = document.createElement('thead') //thead elem létrehozása
    table.appendChild(thead) //thead elem hozzáadása a table-hoz
    const tr = document.createElement('tr') //a tr elem létrehozása
    thead.appendChild(tr) //a sor hozzáadása a thead-hez
    for (let i in obj) { //az array 0. elemének végigjárása
        const th = document.createElement('th')//th elem létrehozása
        th.innerHTML = obj[i] //th szövegének megadása az i értékével
        tr.appendChild(th) //th elem hozzáadása a tr-hez
    }
}

/**
 * a table legenerálása
 * @param {array} tomb a bejárandó tömb, melynek elemeit le szeretnénk generálni
 */
function RenderTable(tomb){ // a RenderTable függvény létrehozása
    
    fejlecGeneralas(array[0]);

    for (let i = 1; i < tomb.length; i++) { //for ciklus, ami végig megy a tomb-on
        const tbody = document.createElement('tbody') // létrehozzuk a tbody taget 
        table.appendChild(tbody) // a table-hez hozzáadjuk a tbodyt
        const elem = tomb[i]; // kivesszük egy változóba a tömb aktuális elemét
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

/**
 * egy elem validálása
 * @param {HTMLElement} validelem a validálandó html elem
 * @param {HTMLElement} error 
 * @returns 
 */
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

/**
 * két elem validálása
 * @param {HTMLElement} elsoelem az első validálandó html elem
 * @param {HTMLElement} masodikelem a második validálandó html elem
 * @param {HTMLElement} error az error classal rendelkező html elem
 * @returns visszaadja, hogy valid-e a két elem
 */
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

/**
 * a form legenerálása
 */
function formGeneralas(){ //a formGeneralas függvény meghívása
    const form = document.createElement('form') //a form elem létrehozása
    form.id = 'form' //a form id-jának beállítása form-ra
    form.action = '#' //a form action-ja '#'
    document.body.appendChild(form) //a form hozzáadása a body-hoz

    for(let i = 0; i < formtomb.length; i++){ //a formtomb bejárása
        const div = document.createElement('div') //div elem létrehozása
        form.appendChild(div) //a div elem hozzáadása a form-hoz
        const label = document.createElement('label') //label elem létrehozása
        label.innerHTML = formtomb[i].label //a label szövegének beállítása
        div.appendChild(label) //a div hozzáadása a label-hez
        const br = document.createElement('br') //br elem létrehozása
        label.appendChild(br) // a be hozzáadása a label-hez
        const input = document.createElement('input')//input elem létrehozása
        input.type = 'text' //az input type 'text'
        input.id = formtomb[i].id //az input id-jának beállítása
        input.name = formtomb[i].id  //az input nevének beállítása(megegyezik az id-val)
        div.appendChild(input) //az input hozzáadása a div-hez
        const error = document.createElement('span') //span elem létrehozása és elraktározása az error változóban
        error.className = 'error' //az error osztálya 'error'
        div.appendChild(error) //az error hozzáadása a div-hez
    }

    const button = document.createElement('button') //button elem létrehozása
    button.innerHTML = 'Hozzáadás' //a button szovegének megadása
    form.appendChild(button) //a button hozzáadása a form-hoz
}