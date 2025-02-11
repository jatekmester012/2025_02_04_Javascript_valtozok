console.log(5 == "5"); // false
console.log(typeof(5));
console.log(typeof("5"));


console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false

let a = "6";
console.log(`a: ${a}`);
console.log(!(a < 5));

console.log("LOGIKAI OPERÁTOROK");
console.log(5 > 5 && a > 20);
console.log("Check type");
console.log(5 > 5 && typeof a === "number");
console.log(a == 3 || a == 5);


let z;
z=3+4; // összeadás
console.log(z);
z=3-4; // kivonás
console.log(z);
z=2*3; // szorzás
console.log(z);
z=2/3; // osztás
console.log(z);
z=3%2; // modulo
console.log(z);
z=3**2; // hatványképzés (hatványalap**hatványkitevő)
console.log(z);

let x,y;
x=5;
y=++x; // preinkrement
console.log(`x=${x}, y=${y}`);
x=5;
y=x++; // posztinkrement
console.log(`x=${x}, y=${y}`);
x=5;
y=--x; // predekrement
console.log(`x=${x}, y=${y}`);
x=5;
y=x--; // posztdekrement
console.log(`x=${x}, y=${y}`); 

console.log('Addig jár a korsó a kútra amég el nem törik!');
let kocka = 'kocka';
console.log(kocka);

const gyumolcs = { fa: 'alma', fajta: 'Starking', szin: 'piros' };
console.log('fajta' in gyumolcs); //true
console.log(gyumolcs instanceof Object); //true


function myFunction() {
    let valtozo = 5;
    return valtozo;
}

console.log(myFunction());
console.log(valtozo);