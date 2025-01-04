// HeaderObj objektum létrehozása
const headerObj = {
    thHm: "Harc megnevezése", // HeaderObj thHm tulajdonságának értékadása
    thSzf: "Szembenálló felek", // HeaderObj thSzf tulajdonságának értékadása
    thHr: "Haderő" // HeaderObj thHr tulajdonságának értékadása
};

// Adatsorok objektumainak létrehozása
const Row1Element = {
    tdHm: "Rákóczi szabadságharc", // Row1Element tdHm tulajdonságának értékadása
    tdSzf: "Kuruc", // Row1Element tdSzf tulajdonságának értékadása
    tdHr: "70.000", // Row1Element tdHr tulajdonságának értékadása
};

const Row2Element = {
    tdSzf: "Labanc", // Row2Element tdSzf tulajdonságának értékadása
    tdHr: "60.000" // Row2Element tdHr tulajdonságának értékadása
};

const Row3Element = {
    tdHm: "48-as szabadságharc", // Row3Element tdHm tulajdonságának értékadása
    tdSzf: "Osztrák császárság (+ Orosz birodalom)", // Row3Element tdSzf tulajdonságának értékadása
    tdHr: "170.000 (+ 200.000)", // Row3Element tdHr tulajdonságának értékadása
};

const Row4Element = {
    tdSzf: "Magyar királyság", // Row4Element tdSzf tulajdonságának értékadása
    tdHr: "170.000" // Row4Element tdHr tulajdonságának értékadása
};

const Row5Element = {
    tdHm: "I. világháború", // Row5Element tdHm tulajdonságának értékadása
    tdSzf: "Antant", // Row5Element tdSzf tulajdonságának értékadása
    tdHr: "43 millió", // Row5Element tdHr tulajdonságának értékadása
};

const Row6Element = {
    tdSzf: "Központi hatalmak", // Row6Element tdSzf tulajdonságának értékadása
    tdHr: "25 millió" // Row6Element tdHr tulajdonságának értékadása
};

const Row7Element = {
    tdHm: "Bosworthi csata", // Row7Element tdHm tulajdonságának értékadása
    tdSzf: "Angolok (York + Lancester)", // Row7Element tdSzf tulajdonságának értékadása
    tdHr: "15.000" // Row7Element tdHr tulajdonságának értékadása
};

const table = document.createElement("table");//table elem létrehozása
document.body.appendChild(table);//table elem hozzáadása a document.body-hoz

const thead = document.createElement("thead");//thead elem létrehozása
table.appendChild(thead);//thead elem hozzáadása a table-hoz

const h_row = document.createElement("tr");//h_row elem létrehozása
thead.appendChild(h_row);//h_row elem hozzáadása a thead-hoz

const th_hm = document.createElement("th");//th_hm elem létrehozása
th_hm.innerHTML = headerObj.thHm;//th_hm szövegének megadása a rowobjectum tulajdonságával
h_row.appendChild(th_hm);//th_hm elem hozzáadása a h_row-hoz

const th_szf = document.createElement("th");//th_szf elem létrehozása
th_szf.innerHTML = th_szf_value;//th_szf szövegének megadása a rowobjectum tulajdonságával
h_row.appendChild(th_szf);//th_szf elem hozzáadása a h_row-hoz

const th_hr = document.createElement("th");//th_hr elem létrehozása
th_hr.innerHTML = headerObj.Hr;//th_hr szövegének megadása a rowobjectum tulajdonságával
h_row.appendChild(th_hr);//th_hr elem hozzáadása a h_row-hoz

const tbody = document.createElement("tbody");//tbody elem létrehozása
table.appendChild(tbody);//tbody elem hozzáadása a table-hoz

const t_row = document.createElement("tr");//t_row elem létrehozása
tbody.appendChild(t_row);//t_row elem hozzáadása a tbody-hoz

const t_row2 = document.createElement("tr");//t_row2 elem létrehozása
tbody.appendChild(t_row2);//t_row2 elem hozzáadása a tbody-hoz

const t_row3 = document.createElement("tr");//t_row3 elem létrehozása
tbody.appendChild(t_row3);//t_row3 elem hozzáadása a tbody-hoz

const t_row4 = document.createElement("tr");//t_row4 elem létrehozása
tbody.appendChild(t_row4);//t_row4 elem hozzáadása a tbody-hoz

const t_row5 = document.createElement("tr");//t_row5 elem létrehozása
tbody.appendChild(t_row5);//t_row5 elem hozzáadása a tbody-hoz

const t_row6 = document.createElement("tr");//t_row6 elem létrehozása
tbody.appendChild(t_row6);//t_row6 elem hozzáadása a tbody-hoz

const t_row7 = document.createElement("tr");//t_row7 elem létrehozása
tbody.appendChild(t_row7);//t_row7 elem hozzáadása a tbody-hoz

const td_szf = document.createElement("td");//td_szf elem létrehozása
td_szf.rowSpan = 2;//td_szf rowspanjának 2-re állítása
td_szf.innerHTML =Row1Element.tdSzf;//td_szf szövegének megadása a rowobjectum tulajdonságával
t_row.appendChild(td_szf);//td_szf elem hozzáadása a t_row-hoz

const td_hm = document.createElement("td");//td_hm elem létrehozása
td_hm.innerHTML = Row1Element.tdHm;//td_hm szövegének megadása a rowobjectum tulajdonságával
t_row.appendChild(td_hm);//td_hm elem hozzáadása a t_row-hoz

const td_hr = document.createElement("td");//td_hr elem létrehozása
td_hr.innerHTML = Row1Element.tdHr;//td_hr szövegének megadása a rowobjectum tulajdonságával
t_row.appendChild(td_hr);//td_hr elem hozzáadása a t_row-hoz

const td_szf2 = document.createElement("td");//td_szf2 elem létrehozása
td_szf2.innerHTML = Row2Element.tdSzf;//td_szf2 szövegének megadása a rowobjectum tulajdonságával
t_row2.appendChild(td_szf2);//td_szf2 elem hozzáadása a t_row2-hoz

const td_hr2 = document.createElement("td");//td_hr2 elem létrehozása
td_hr2.innerHTML = Row2Element.tdHr;//td_hr2 szövegének megadása a rowobjectum tulajdonságával
t_row2.appendChild(td_hr2);//td_hr2 elem hozzáadása a t_row2-hoz

const td_szf3 = document.createElement("td");//td_szf3 elem létrehozása
td_szf3.rowSpan = 2;//td_szf3 rowspanjának 2-re állítása
td_szf3.innerHTML = Row3Element.tdSzf;//td_szf3 szövegének megadása a rowobjectum tulajdonságával
t_row3.appendChild(td_szf3);//td_szf3 elem hozzáadása a t_row3-hoz

const td_hm3 = document.createElement("td");//td_hm3 elem létrehozása
td_hm3.innerHTML = Row3Element.tdHm;//td_hm3 szövegének megadása a rowobjectum tulajdonságával
t_row3.appendChild(td_hm3);//td_hm3 elem hozzáadása a t_row3-hoz

const td_hr3 = document.createElement("td");//td_hr3 elem létrehozása
td_hr3.innerHTML = Row3Element.tdHr;//td_hr3 szövegének megadása a rowobjectum tulajdonságával
t_row3.appendChild(td_hr3);//td_hr3 elem hozzáadása a t_row3-hoz

const td_szf4 = document.createElement("td");//td_szf4 elem létrehozása
td_szf4.innerHTML = Row4Element.tdSzf;//td_szf4 szövegének megadása a rowobjectum tulajdonságával
t_row4.appendChild(td_szf4);//td_szf4 elem hozzáadása a t_row4-hoz

const td_hr4 = document.createElement("td");//td_hr4 elem létrehozása
td_hr4.innerHTML = Row4Element.tdHr;//td_hr4 szövegének megadása a rowobjectum tulajdonságával
t_row4.appendChild(td_hr4);//td_hr4 elem hozzáadása a t_row4-hoz

const td_szf5 = document.createElement("td");//td_szf5 elem létrehozása
td_szf5.rowSpan = 2;//td_szf5 rowspanjának 2-re állítása
td_szf5.innerHTML = Row5Element.tdSzf;//td_szf5 szövegének megadása a rowobjectum tulajdonságával
t_row5.appendChild(td_szf5);//td_szf5 elem hozzáadása a t_row5-hoz

const td_hm5 = document.createElement("td");//td_hm5 elem létrehozása
td_hm5.innerHTML = Row5Element.tdHm;//td_hm5 szövegének megadása a rowobjectum tulajdonságával
t_row5.appendChild(td_hm5);//td_hm5 elem hozzáadása a t_row5-hoz

const td_hr5 = document.createElement("td");//td_hr5 elem létrehozása
td_hr5.innerHTML = Row5Element.tdHr;//td_hr5 szövegének megadása a rowobjectum tulajdonságával
t_row5.appendChild(td_hr5);//td_hr5 elem hozzáadása a t_row5-hoz

const td_szf6 = document.createElement("td");//td_szf6 elem létrehozása
td_szf6.innerHTML = Row6Element.tdSzf;//td_szf6 szövegének megadása a rowobjectum tulajdonságával
t_row6.appendChild(td_szf6);//td_szf6 elem hozzáadása a t_row6-hoz

const td_hr6 = document.createElement("td");//td_hr6 elem létrehozása
td_hr6.innerHTML = Row6Element.tdHr;//td_hr6 szövegének megadása a rowobjectum tulajdonságával
t_row6.appendChild(td_hr6);//td_hr6 elem hozzáadása a t_row6-hoz

const td_szf7 = document.createElement("td");//td_szf7 elem létrehozása
td_szf7.innerHTML = Row7Element.tdSzf;//td_szf7 szövegének megadása a rowobjectum tulajdonságával
t_row7.appendChild(td_szf7);//td_szf7 elem hozzáadása a t_row7-hoz

const td_hm7 = document.createElement("td");//td_hm7 elem létrehozása
td_hm7.innerHTML = Row7Element.tdHm;//td_hm7 szövegének megadása a rowobjectum tulajdonságával
t_row7.appendChild(td_hm7);//td_hm7 elem hozzáadása a t_row7-hoz

const td_hr7 = document.createElement("td");//td_hr7 elem létrehozása
td_hr7.innerHTML = Row7Element.tdHr;//td_hr7 szövegének megadása a rowobjectum tulajdonságával
t_row7.appendChild(td_hr7);//td_hr7 elem hozzáadása a t_row7-hoz