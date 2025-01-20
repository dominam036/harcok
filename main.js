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

const formtomb = [ //a form tömbjének létrehozása
    {
        label: "Harc megnevezése: ", //az input label-ének(szövegének) megadása
        id: "harc_nev" //id értékének megadása
    },
    {
        label: "1. Harcoló fél: ", //az input label-ének(szövegének) megadása
        id: "harcolo1" //id értékének megadása
    },
    {
        label: "1. Haderő: ", //az input label-ének(szövegének) megadása
        id: "hadero1" //id értékének megadása
    },
    {
        label: "2. Harcoló fél: ", //az input label-ének(szövegének) megadása
        id: "harcolo2" //id értékének megadása
    },
    {
        label: "2. Haderő", //az input label-ének(szövegének) megadása
        id: "hadero2" //id értékének megadása
    }
]

formGeneralas() //a formGeneralas függvény meghívása

const table = document.createElement("table");//table elem létrehozása
document.body.appendChild(table);//table elem hozzáadása a document.body-hoz

RenderTable(array) //a RenderTable függvény meghívása

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

    if (!ketvalidalas(harcolo2, hadero2, errorszoveg)) { //hadero2 és a harcolo2 validálásának eredményének vizsgálata
        valid = false //a valid értékének false-ra állítása
    }
    
    if(valid){ //Akkor megyünk be az elágazásba, ha a valid true
        if(harcolo2_value && hadero2_value){ //harcolo2_value és hadero2_value értékének vizsgálata
            const ujElem = {  //ujElem objectum létrehozása
                tdHm:  harc_nev_value, //az objektum tdHm értéke a harc_nev_value
                tdSzf: harcolo1_value, //az objektum tdSzf értéke a harcolo1_value
                tdHr:  hadero1_value, //az objektum tdHr értéke a hadero1_value
                tdSzf2: harcolo2_value, //az objektum tdSzf2 értéke a harcolo2_value
                tdHr2: hadero2_value //az objektum tdHr2 értéke a hadero2_value
            }
            array.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
        }
        else{
            const ujElem = { //ujElem objectum létrehozása 3 tulajdonsággal
                tdHm:  harc_nev_value, //az objektum tdHm értéke a harc_nev_value
                tdSzf: harcolo1_value, //az objektum tdSzf értéke a harcolo1_value
                tdHr:  hadero1_value, //az objektum tdHr értéke a hadero1_value
            }
            array.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
        }
        table.innerHTML = "" //a table törlése

        RenderTable(array) //meghivom a RenderTable függvényt
    }
})