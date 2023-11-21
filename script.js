// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let a = 1;
// if (a > 0) {
//     console.log("True");
// } else
//     if (a < 0) {
//         console.log("False");
//     } else console.log("Try again");


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// word = 'test';
// console.log(typeof word);
// if (word === "test") {
//     console.log('true');

// } else;


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let b = 1;
// const Nub = Number(b);
// if (Nub > 10) {
//     Res = Nub - 5;
// } else Res = Nub + 5;
// console.log(Res);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const chyslo = prompt("Введіть число від 1 до 12");
// let mounth;
// switch (chyslo) {
//     case "1":
//         mounth = "Січень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "2":
//         mounth = "Лютий";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "3":
//         mounth = "Березень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "4":
//         mounth = "Квітень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "5":
//         mounth = "Травень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "6":
//         mounth = "Червень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "7":
//         mounth = "Липень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "8":
//         mounth = "Серпень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "9":
//         mounth = "Вересень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "10":
//         mounth = "Жовтень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "11":
//         mounth = "Листопад";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;
//     case "12":
//         mounth = "Грудень";
//         console.log(mounth);
//         alert(`${chyslo}й Місяць - ${mounth}`);
//         break;

//     default:
//         alert("Спробуйте ще раз");
// }




//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const chislo = prompt("Введіть тризначне число:");
// const newchislo = Number.parseInt(chislo);
// console.log(typeof newchislo);
// console.log(newchislo);

// const c = (newchislo / 100 - (newchislo % 100) / 100);
// console.log(c);


// const b = ((newchislo - (c * 100)) - ((newchislo - (c * 100)) % 10)) / 10;
// console.log(b);


// const a = ((newchislo - (c * 100)) - (b * 10));
// console.log(a);

// const summa = a + b + c;

// console.log(summa);
// alert(`'Сума цифр Вашого числа ${summa}'`);
