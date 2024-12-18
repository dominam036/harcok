const th_hm_value = "Harc megnevezése";
const th_szf_value = "Szembenálló felek";
const th_hr_value = "Haderő";

const td_hm_value = "Rákóczi szabadságharc";
const td_szf_value = "Kuruc";
const td_hr_value = "70.000";

const td_szf2_value = "Labanc";
const td_hr2_value = "60.000";

const td_hm3_value = "48-as szabadságharc";
const td_szf3_value = "Osztrák császárság (+ Orosz birodalom)";
const td_hr3_value = "170.000 (+ 200.000)";

const td_szf4_value = "Magyar királyság";
const td_hr4_value = "170.000";

const td_hm5_value = "I. világháború";
const td_szf5_value = "Antant";
const td_hr5_value = "43 millió";

const td_szf6_value = "Központi hatalmak";
const td_hr6_value = "25 millió";

const td_hm7_value = "Bosworthi csata";
const td_szf7_value = "Angolok (York + Lancester)";
const td_hr7_value = "15.000";

const table = document.createElement("table");//table elem létrehozása
document.body.appendChild(table);//table elem hozzáadása a document.body-hoz

const thead = document.createElement("thead");//thead elem létrehozása
table.appendChild(thead);//thead elem hozzáadása a table-hoz

const h_row = document.createElement("tr");//h_row elem létrehozása
thead.appendChild(h_row);//h_row elem hozzáadása a thead-hoz

const th_hm = document.createElement("th");//th_hm elem létrehozása
th_hm.innerHTML = th_hm_value;//th_hm szövegének megadása
h_row.appendChild(th_hm);//th_hm elem hozzáadása a h_row-hoz

const th_szf = document.createElement("th");//th_szf elem létrehozása
th_szf.innerHTML = th_szf_value;//th_szf szövegének megadása
h_row.appendChild(th_szf);//th_szf elem hozzáadása a h_row-hoz

const th_hr = document.createElement("th");//th_hr elem létrehozása
th_hr.innerHTML = th_hr_value;//th_hr szövegének megadása
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
td_szf.innerHTML =td_szf_value;//td_szf szövegének megadása
t_row.appendChild(td_szf);//td_szf elem hozzáadása a t_row-hoz

const td_hm = document.createElement("td");//td_hm elem létrehozása
td_hm.innerHTML = td_hm_value;//td_hm szövegének megadása
t_row.appendChild(td_hm);//td_hm elem hozzáadása a t_row-hoz

const td_hr = document.createElement("td");//td_hr elem létrehozása
td_hr.innerHTML = td_hr_value;//td_hr szövegének megadása
t_row.appendChild(td_hr);//td_hr elem hozzáadása a t_row-hoz

const td_szf2 = document.createElement("td");//td_szf2 elem létrehozása
td_szf2.innerHTML = td_szf2_value;//td_szf2 szövegének megadása
t_row2.appendChild(td_szf2);//td_szf2 elem hozzáadása a t_row2-hoz

const td_hr2 = document.createElement("td");//td_hr2 elem létrehozása
td_hr2.innerHTML = td_hr2_value;//td_hr2 szövegének megadása
t_row2.appendChild(td_hr2);//td_hr2 elem hozzáadása a t_row2-hoz

const td_szf3 = document.createElement("td");//td_szf3 elem létrehozása
td_szf3.rowSpan = 2;//td_szf3 rowspanjának 2-re állítása
td_szf3.innerHTML = td_szf3_value;//td_szf3 szövegének megadása
t_row3.appendChild(td_szf3);//td_szf3 elem hozzáadása a t_row3-hoz

const td_hm3 = document.createElement("td");//td_hm3 elem létrehozása
td_hm3.innerHTML = td_hm3_value;//td_hm3 szövegének megadása
t_row3.appendChild(td_hm3);//td_hm3 elem hozzáadása a t_row3-hoz

const td_hr3 = document.createElement("td");//td_hr3 elem létrehozása
td_hr3.innerHTML = td_hr3_value;//td_hr3 szövegének megadása
t_row3.appendChild(td_hr3);//td_hr3 elem hozzáadása a t_row3-hoz

const td_szf4 = document.createElement("td");//td_szf4 elem létrehozása
td_szf4.innerHTML = td_szf4_value;//td_szf4 szövegének megadása
t_row4.appendChild(td_szf4);//td_szf4 elem hozzáadása a t_row4-hoz

const td_hr4 = document.createElement("td");//td_hr4 elem létrehozása
td_hr4.innerHTML = td_hr4_value;//td_hr4 szövegének megadása
t_row4.appendChild(td_hr4);//td_hr4 elem hozzáadása a t_row4-hoz

const td_szf5 = document.createElement("td");//td_szf5 elem létrehozása
td_szf5.rowSpan = 2;//td_szf5 rowspanjának 2-re állítása
td_szf5.innerHTML = td_szf5_value;//td_szf5 szövegének megadása
t_row5.appendChild(td_szf5);//td_szf5 elem hozzáadása a t_row5-hoz

const td_hm5 = document.createElement("td");//td_hm5 elem létrehozása
td_hm5.innerHTML = td_hm5_value;//td_hm5 szövegének megadása
t_row5.appendChild(td_hm5);//td_hm5 elem hozzáadása a t_row5-hoz

const td_hr5 = document.createElement("td");//td_hr5 elem létrehozása
td_hr5.innerHTML = td_hr5_value;//td_hr5 szövegének megadása
t_row5.appendChild(td_hr5);//td_hr5 elem hozzáadása a t_row5-hoz

const td_szf6 = document.createElement("td");//td_szf6 elem létrehozása
td_szf6.innerHTML = td_szf6_value;//td_szf6 szövegének megadása
t_row6.appendChild(td_szf6);//td_szf6 elem hozzáadása a t_row6-hoz

const td_hr6 = document.createElement("td");//td_hr6 elem létrehozása
td_hr6.innerHTML = td_hr6_value;//td_hr6 szövegének megadása
t_row6.appendChild(td_hr6);//td_hr6 elem hozzáadása a t_row6-hoz

const td_szf7 = document.createElement("td");//td_szf7 elem létrehozása
td_szf7.innerHTML = td_szf7_value;//td_szf7 szövegének megadása
t_row7.appendChild(td_szf7);//td_szf7 elem hozzáadása a t_row7-hoz

const td_hm7 = document.createElement("td");//td_hm7 elem létrehozása
td_hm7.innerHTML = td_hm7_value;//td_hm7 szövegének megadása
t_row7.appendChild(td_hm7);//td_hm7 elem hozzáadása a t_row7-hoz

const td_hr7 = document.createElement("td");//td_hr7 elem létrehozása
td_hr7.innerHTML = td_hr7_value;//td_hr7 szövegének megadása
t_row7.appendChild(td_hr7);//td_hr7 elem hozzáadása a t_row7-hoz