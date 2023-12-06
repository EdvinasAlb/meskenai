//1

const bitGirls = ["Edita", "Lina", "Brigita", "Deimantė", "Justė"];

bitGirls.unshift("Nausėda");

console.log(bitGirls);

//2

const bitcats = [];

const cats = ["Murka", "Rainius", "Meilutė", "Bosas", "Dičkis"];

const catsSvoris = ["Storas", "Normalus", "Storas", "Normalus", "Storas"];

bitcats.push(cats, catsSvoris);
console.log(bitcats);

//3
let storas = 0;
let normalus = 0;
bitcats[1].forEach((a) => {
  if (a == "Storas") {
    storas++;
  } else if (a == "Normalus") normalus++;
});
console.log("storas:", storas, "normalus:", normalus);

//4
cats.sort((a, b) => {
  if (a < b) {
    return -1;
  }

  return 0;
});

console.log(cats);
