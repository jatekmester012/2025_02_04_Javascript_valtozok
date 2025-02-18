let fel = prompt('Kérek adja meg a felhasználónevét:', 'felhasználó');
console.log('Szia' ,fel)

let aa = prompt('Kérem adja meg a téglalap a oldalát:');
let bb = prompt('Kérem adja meg a téglalap b oldalát:');

let terulet = aa * bb;
console.log('A téglalap területe: ' ,terulet);
let kerulet = (parseInt(aa) + parseInt(bb)) * 2;
console.log('A téglalap kerülete: ' ,kerulet);

let r = prompt('Kérem adja meg a kör sugarát:');
korkerulet = (2 * parseInt(r) * Math.PI);
console.log(typeof(korkerulet));
korterulet = (parseInt(r) * parseInt(r) * Math.PI );
console.log('A kör kerülete: ' ,korkerulet);
console.log('A kör területe: ' ,korterulet);