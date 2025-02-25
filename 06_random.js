console.log(Math.random())
console.log(Math.random())*10
console.log(Math.floor(Math.random()*10))
// console.log(Math.random(1,30))

console.log(Math.floor(Math.random()*1000)+2000)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const rndInt = randomIntFromInterval(1, 6);
  console.log(rndInt);

  let a1 = prompt('A dobokockával dobot szám az ',rndInt);

  function dobas() {
    let rndInt = Math.floor(Math.random() * 6) + 1; // 1 és 6 közötti véletlenszám
    document.getElementById("dobas").innerHTML = `Eredmény: ${rndInt}`;
}


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function dobas() {
    
    let szamok = [];
    for (let i = 0; i < 5; i++) {
        szamok.push(randomIntFromInterval(1, 90)); // Generálunk 6 véletlenszámot
    }
    document.getElementById("dobas").innerHTML = `Sorsolt számok: ${szamok.join(", ")}`;
}
