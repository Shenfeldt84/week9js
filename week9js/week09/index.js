// Задача № 1 про уборщика
let cleanerSalary = 40000;
let singerTeacherSalary = 22000;
console.log(cleanerSalary + singerTeacherSalary);
// Задача № 2
let cityName = "Владивосток";
let number = "2000";
console.log(`${cityName + number}`);

let city = "Владивосток";
let songName = "2000";
console.log("Владивосток " + "2000");
// Задача №4
let degree = 2;
console.log(degree ** 5);
// Задача № 5
let string =
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";
console.log(string);
// Задача № 6
const greetings = "Привет";
const name = "Кот";
console.log("Привет " + " Кот!");
// Задача № 3  про Русалку
const totalMinutes = 720;
const hourAmountMinutes = 60;
console.log(720 / 60);
// Задача № 7

let time;
time = 34;
console.log(time);
console.log("Старт поездки. Осталось минут:" + time);
console.log(time - 15);
time = 19;
console.log("Немного сториз с соцсетях. Осталось минут:" + time);
console.log(time - 10);
time = 9;
console.log("Немного не новостей, но событий. Осталось минут:" + time);
console.log(time - 9);
time = 0;
console.log("Вы приехали. Добро пожаловать в Москву!");
// Задача №8
let fahrenheit = 451;
console.log((fahrenheit - 32) / 1.8);
let celsius = 232.8;
console.log(
  `${fahrenheit} градуса по Фаренгейту - это ${celsius} градуса по Цельсию. `
);

// Задание под звездочкой часть 1.
let bankInterest = "18.5%";
let stringAsNumber = Number(bankInterest);
// let clientSaving = 30000;
let clientIncome = 150;
let yearsOfDeposit = 70;
yearsOfDeposit = yearsOfDeposit - (yearsOfDeposit / 100) * bankInterest;

console.log("Ваш депозит на начало расчётного периода составлял 30000 руб.");

console.log("Согласно вашему тарифу, вам была присвоена ставка 18.5%");

console.log(
  "К концу расчётного периода прирост составил 150 руб., и на данный момент ваш депозит составляет 30150 руб."
);
