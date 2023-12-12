//1
// class Kibiras1 {
//   constructor() {
//     this.akmenuKiekis = 0;
//   }
//   prideti1Akmeni() {
//     this.akmenuKiekis++;
//   }
//   pridetiDaugAkmenu(kiekis) {
//     this.akmenuKiekis += kiekis;
//   }
//   kiekPririnktaAkmenu() {
//     console.log(this.akmenuKiekis);
//   }
// }
// const kibiras = new Kibiras1();
// kibiras.prideti1Akmeni();
// kibiras.pridetiDaugAkmenu(10);
// kibiras.kiekPririnktaAkmenu();
//2
// class pinigine {
//   constructor() {
//     this.popieriniaiPinigai = 0;
//     this.metaliniaiPinigai = 0;
//   }

//   metaliniai(kiekis) {
//     this.metaliniaiPinigai += kiekis;
//   }

//   pipieriniai(kiekis) {
//     this.popieriniaiPinigai += kiekis;
//   }

//   suma() {
//     console.log(
//       'Pipieriniai:',
//       this.popieriniaiPinigai,
//       'Metaliniai:',
//       this.metaliniaiPinigai
//     );
//   }
// }
// const pinigine1 = new pinigine();
// pinigine1.metaliniai(4);
// pinigine1.pipieriniai(30);
// pinigine1.suma();

//3
// class Troleibusas {
//   constructor() {
//     this.keleiviuSkaicius = 0;
//   }

//   ilipa(keleiviuSkaicius) {
//     this.keleiviuSkaicius += keleiviuSkaicius;
//   }

//   islipa(keleiviuSkaicius) {
//     this.keleiviuSkaicius -= keleiviuSkaicius;
//   }

//   vaziuoja() {
//     this.keleiviuSkaicius >= 0
//       ? console.log(this.keleiviuSkaicius)
//       : console.log('error');
//   }
// }

// const newTroleibusas = new Troleibusas();
// newTroleibusas.ilipa(10);
// newTroleibusas.islipa(10);
// newTroleibusas.vaziuoja();
