// let age: number = 123;
// let bmw: number = 20;
// let audi: number = 15;

// let summ: number = bmw + audi;
// bmw = 25;
// audi = 20;
// let razn: number = bmw - audi;
// bmw = 17;
// audi = 15;
// let deln: number = bmw / audi;
// bmw = 20;
// audi = 25;
// let proizv: number = bmw * audi;

// // console.log("Summ: " + summ, "Razn: " + razn, "Deln: " + deln, "Proizv: " + proizv);

// // Создание своей тип данных

// type TStatusServer = 200 | 300 | 400;

// let currentStatus: TStatusServer = 200;

// Условия

let password: string = "asdasdasdasdads123";

/*if (password.length > 8 && !password.includes("qwerty")) {
  console.log("Надежный пароль");
} else {
  console.log("Пароль слишком легкий");
}
*/
// ------------------------------------------------------ Работа со строками 06.11.2023
// Задача с палиндромом
/*
let randString: string = "заказ";

if (randString == randString.split("").reverse().join("")) // split() - разбивает в массив
  console.log("Палиндром");
else console.log("Не-а");

let randString1: string = "набор слов";
console.log(randString1.substring(0, 5));
console.log(randString1.slice(-4)); // substring(), slice() - обрезать участки строки
console.log(randString1.replace("набор", "компания")); // replace() - заменить символы
console.log(randString1.includes("слов")); // includes() - проверить содержится ли строка

// Максимум из двух чисел

let nFirst: number = 23;
let nSecond: number = 47;

if (nFirst > nSecond) console.log(nFirst);
else console.log(nSecond);

// Високосный год

let year: number = 2000;

year % 4 == 0 && year % 100 != 0
  ? console.log("Год високосный")
  : console.log("Год не високосный");

// Тестирующая система

let studentAnswer: number = 101;

studentAnswer == parseInt(studentAnswer.toString().split("").reverse().join(""))
  ? console.log("YES")
  : console.log("NO");

// Максимум из трех чисел

let aFirst: number = 23;
let aSecond: number = 47;
let aThird: number = 27;

if (aFirst > aSecond && aFirst > aThird) {
  console.log(aFirst);
} else if (aSecond > aFirst && aSecond > aThird) {
  console.log(aSecond);
} else if (aThird > aFirst && aThird > aSecond) {
  console.log(aThird);
}

// Ход короля

let firstPosition: number = 4;
let secondPosition: number = 4;
let thirdPosition: number = 5;
let fourthPosition: number = 5;

if (
  Math.abs(firstPosition - thirdPosition) <= 1 &&
  Math.abs(secondPosition - fourthPosition) <= 1
) {
  console.log("YES");
} else {
  console.log("NO");
}
*/

// ----------------------------- Функции 13.11.2023

function getNumbers(num1: number = 0, num2: number = 0) {
  return num1 + num2;
}

// console.log(getNumbers(2, 3));

// Стрелочная функция

type TSumNumbers = (num1: number, num2: number) => number;
const sumNumbers: TSumNumbers = (num1: number = 0, num2: number = 0) => {
  return num1 + num2;
};

// console.log(sumNumbers(3, 3));

// Задача "Поступление в уник"

type TPlace = "college" | "school";

const place: TPlace = "college";
const score: number = 200;

const getCourse = (place: TPlace, score: number) => {
  if (score > 180) {
    if (place == "college") {
      return "Вы поступили на второй курс";
    } else {
      return "Вы поступили на первый курс";
    }
  } else {
    return "Вы не поступили";
  }
};

// Задача выдача премии сотруднику

let mySalary = 500000;
let premiya = 0;

let stage = 10;
let projects = 50;

const setEffect = (stage: number, projects: number) => {
  let coefficent = projects / stage;
  if (coefficent >= 4) {
    return setPremiya(mySalary);
  } else {
    return "Повысьте свою эффективность";
  }
};

const setPremiya = (salary: number) => {
  if (salary > 300000) {
    premiya = (mySalary / 100) * 15;
    return "Премия: " + premiya + " Зарплата: " + mySalary;
  } else if (salary > 400000) {
    premiya = (mySalary / 100) * 10;
    return "Премия: " + premiya + " Зарплата: " + mySalary;
  } else {
    premiya = (mySalary / 100) * 20;
    return "Премия: " + premiya + " Зарплата: " + mySalary;
  }
};

//console.log(setEffect(stage, projects));

// ----------------- enum, callback, switch 20.11.2023 --------------------------------------------------

enum EColors {
  red = "красный",
  black = "черный",
  gray = "серый",
}

const color = EColors.red;

const getColorText = (color: EColors) => {
  switch (color) {
    case "черный":
      console.log("Черный цвет");
      break;

    case "красный":
      console.log("красный цвет");
      break;

    case "серый":
      console.log("серый цвет");
      break;

    default:
      break;
  }
};
//getColorText(color);
type TCallBack = (num1: number, num2: number) => number;
const generateRandomNumber = (callback: TCallBack) => {
  let num1: number = Math.floor(Math.random() * 100);
  let num2: number = Math.floor(Math.random() * 100);
  let answer = callback(num1, num2);
  return answer;
};

const summary = (num1: number, num2: number) => {
  return num1 + num2;
};
const multiply = (num1: number, num2: number) => {
  return num1 * num2;
};
const divide = (num1: number, num2: number) => {
  return num2 != 0 ? num1 / num2 : 0;
};

//console.log(generateRandomNumber(summary));

const getName = (callBack: (name: string) => string) => {
  let userName: string = "Duman";
  return callBack(userName);
};

const sayHi = (name: string) => {
  return "Привет " + name;
};

//console.log(getName(sayHi));

// 1 задача

const checkString = (callback: (text: string) => string) => {
  let text = "qwerty123";
  return callback(text);
};

const getString = (text: string) => {
  if (!text.includes("qwerty") && text.length > 8) return "всё четко";
  else if (text == text.split("").reverse().join("")) return "Палиндром";
  else return "не-а";
};

//console.log(checkString(getString));

// задача с датой регистрации

const getRegistration = (callback: (years: number) => void) => {
  let years = 4;
  return callback(years);
};

const checkRegistration = (years: number) => {
  if (years >= 4) return "магистр";
  else if (years < 4 && years >= 2) return "страж";
  else return "новичок";
};

//console.log(getRegistration(checkRegistration));

// задача с доставкой

const getPrice = (callback: (price: number, promo: boolean) => void) => {
  let price = 3000;
  let isPromo = true;
  return callback(price, isPromo);
};

const checkPrice = (price: number, promo: boolean) => {
  let delivary: string;
  if (price > 4000) return (delivary = "Доставка бесплатна");
  else if (price < 4000 && promo)
    return (delivary =
      "У Вас скидка в размере 15%. Общая стоимость: " +
      (price - (price * 15) / 100));
  else return "Стоимость доставки " + price;
};
//console.log(getPrice(checkPrice))

// животные из зоопарка

const getCount = (callback: (animals: number) => void) => {
  let animals = 3;
  return callback(animals) + " кг";
};

const setAnimals = (animals: number) => {
  let foodForAnimal = 0;
  return (foodForAnimal = animals * (365 * 4));
};

//console.log( getCount(setAnimals) )

// оператор связи

const getCell = (callback: (operator: string) => void) => {
  let operator = "Kcell";
  return callback(operator);
};

const setCell = (operator: string) => {
  switch (operator) {
    case "Kcell":
      return "Подключение бесплатно";
    case "Beeline":
      return "Подключение стоит: 4000";
    case "Tele2":
      return "Подключение стоит: 4000";
    case "Active":
      return "Подключение стоит: 4000";
  }
};
//console.log(getCell(setCell))

// ----------------- Обьекты Массивы Цикл 27.11.2023 --------------------------------------------------

// type TPerson2 = TPerson & {
//   // наследование
//   surname: string;
// };

// interface IPerson {
//   age: number;
//   name: string;
//   id?: number | string; // ? - необязательно
// }
// interface IPerson2 extends IPerson {
//   // наследование
//   surname: string;
// }

// let firstPerson: TPerson2 = {
//   age: 18,
//   name: "Duman",
//   surname: "Kaltaev",
// };

// let array: string[] = ["sd", "ds"];
// let personal: TPerson2[] = [
//   {
//     age: 18,
//     name: "Duman",
//     surname: "Kaltaev",
//   },
//   {
//     age: 18,
//     name: "Duman",
//     surname: "Kaltaev",
//   },
// ];

// // Задача 1

// type TPerson = {
//   age: number;
//   name: string;
//   id?: number | string; // ? - необязательно
// };

// let years: number[] = [2019, 2020, 2021, 2022, 2023, 2024];
// let namesYear: string[] = ["Осень", "Зима", "Весна", "Лето"];
// let persons: TPerson[] = [
//   {
//     age: 18,
//     name: "Duman",
//   },
//   {
//     age: 17,
//     name: "Danil",
//   },
//   {
//     age: 16,
//     name: "Daryn",
//   },
// ];

// let years2: number[] = [...years]; // Копирование массива
// let personal2 = { ...personal }; // Компирование объекта

// // Задача 1

// type TMonth = {
//   title: string;
//   days: number;
// };

// let monthes: TMonth[] = [
//   {
//     title: "Январь",
//     days: 23,
//   },
//   {
//     title: "Февраль",
//     days: 12,
//   },
//   {
//     title: "Март",
//     days: 29,
//   },
//   {
//     title: "Апрель",
//     days: 4,
//   },
//   {
//     title: "Май",
//     days: 25,
//   },
// ];

// monthes.push({
//   title: "Июнь",
//   days: 12,
// });

// let newMonthes: TMonth[] = [];
// let sumDays: number = 0;
// let minMonth:TMonth = monthes[0];
// let maxMonth:TMonth = monthes[0];
// for (let i = 0; i < monthes.length; i++) {

//   sumDays += monthes[i].days;

//   if (minMonth.days > monthes[i].days) {
//     minMonth = monthes[i];
//   }
//   if (maxMonth.days < monthes[i].days) {
//     maxMonth = monthes[i];
//   }

//   if (monthes[i].days < 30) {
//     newMonthes.push(monthes[i]);
//   }

// }

// console.log(minMonth)
// console.log(maxMonth)

// ----------------- методы массива 04.12.2023 --------------------------------------------------

let numbers: number[] = [1, 2, 3, 4, 5];
let objects = [{}];
// Методы для добавления элементов

numbers.push(6);
numbers.unshift(0);
numbers.splice(2, 0, 3333); // добавляет/заменяет элемент
objects.push({});

// сортировка

numbers.sort((a, b) => {
  return a - b;
});

type TCategory = "smartphone" | "laptop";
type TStuff = {
  category: TCategory;
  price: number;
  count: number;
};

let stuffs: TStuff[] = [
  {
    category: "smartphone",
    price: 150000,
    count: 3,
  },
  {
    category: "laptop",
    price: 300000,
    count: 5,
  },
  {
    category: "smartphone",
    price: 250000,
    count: 8,
  },
  {
    category: "laptop",
    price: 200000,
    count: 7,
  },
];

let smartphones: TStuff[] = stuffs.filter(
  (item) => item.category === "smartphone"
);

let laptops: TStuff[] = stuffs.filter((item) => item.category === "laptop");

smartphones.sort((a, b) => {
  return b.price - a.price;
});

laptops.sort((a, b) => {
  return b.price - a.price;
});

//3
const addStuff = (category: TCategory, price: number, count: number) => {
  if (category === "smartphone") {
    smartphones.push({
      category: category,
      price: price,
      count: count,
    });
  } else if (category === "laptop") {
    laptops.push({
      category: category,
      price: price,
      count: count,
    });
  } else console.log("Укажите корректную категорию");
};

//4
addStuff("smartphone", 120000, 9);
addStuff("laptop", 500000, 4);

//5
smartphones.map((item) => (item.price *= 1.1));
laptops.forEach((item) => (item.price = item.price - (item.price * 20) / 100));

//6
smartphones.sort((a, b) => {
  return a.price - b.price;
});
laptops.sort((a, b) => {
  return b.price - a.price;
});

// console.log(smartphones)
// console.log(laptops)

let newStuffs: TStuff[] = [...smartphones, ...laptops];

//10
newStuffs.sort((a, b) => {
  return b.price - a.price;
});
// console.log(newStuffs)

// Задача трелло 07

type TPerson = {
  name: string;
  isUvolnenie: boolean;
  salary: number;
  overdue: number;
  departament: TDepartament;
};

type TDepartament = "TECH" | "DESIGN" | "PROJECTS";
let personal: TPerson[] = [
  {
    name: "Rina",
    isUvolnenie: false,
    salary: 120000,
    overdue: 5,
    departament: "TECH",
  },
  {
    name: "Kathryn",
    isUvolnenie: false,
    salary: 160000,
    overdue: 0,
    departament: "DESIGN",
  },
  {
    name: "Danil",
    isUvolnenie: false,
    salary: 200000,
    overdue: 0,
    departament: "TECH",
  },
  {
    name: "Ilya",
    isUvolnenie: false,
    salary: 350000,
    overdue: 11,
    departament: "PROJECTS",
  },
];

let personalGood = personal.filter((person) => person.overdue === 0);
personalGood.map((person) => (person.salary *= 1.2));
// console.log(personalGood);

let personalBad = personal.filter((person) => person.overdue > 4);
personalBad.map((person) => (person.isUvolnenie = true));
// console.log(personalBad)
// 07 задача вторая

// 07 задача первая
// let personalActive = personal.filter((person) => person.isActive);

// let personalUnder20 = personalActive.filter((person) => {
//   return person.age <= 20;
// });
// personalUnder20.map((person) => {
//   return (person.salary += 50000);
// });

// let personalUnder30 = personalActive.filter((person) => {
//   return person.age <= 30 && person.age > 20;
// });
// personalUnder30.map((person) => {
//   return (person.salary += 100000);
// });

// let personalUnder40 = personalActive.filter((person) => {
//   return person.age <= 40 && person.age > 30;
// });
// personalUnder40.map((person) => {
//   return (person.salary += 150000);
// });

// let personalUnder50 = personalActive.filter((person) => {
//   return person.age > 40;
// });
// personalUnder50.map((person) => {
//   return (person.salary += 200000);
// });

// let newPersonal = [...personalUnder20, ...personalUnder30, ...personalUnder50];
// console.log(newPersonal);

// const testFunction = () => {
//   return "Test";
// };

// export default testFunction;

// export const test: string = "test";

// export const test1: string = "test1";

// // 1 подзадача
// import { seasons } from "./data";

// let firstValue = seasons.winter.income;
// let secondValue = seasons.winter.income;
// let firstHired = seasons.winter.hired;
// let firstHiredResult;
// let firstDismissed = seasons.winter.dismissed;
// let firstDismissedResult;
// let firstResult = {};
// let secondResult = {};

// Object.entries(seasons).forEach(([keys, values]) => {
//   if (values.income > firstValue) {
//     firstValue = values.income;
//     firstResult = values;
//   }

//   if (values.income < secondValue) {
//     secondValue = values.income;
//     secondResult = values;
//   }

//   if (firstHired < values.hired) {
//     firstHired = values.hired;
//     firstHiredResult = keys;
//   }

//   if (firstHired < values.hired) {
//     firstHired = values.hired;
//     firstHiredResult = keys;
//   }
//   if (firstDismissed < values.dismissed) {
//     firstDismissed = values.dismissed;
//     firstDismissedResult = keys;
//   }
// });

// console.log("Максимальное значение из всех сезонов: ", firstResult);
// console.log("Минимальное значение из всех сезонов: ", secondResult);
// console.log("В этом сезоне пришли больше всего: ", firstHiredResult);
// console.log("В этом сезоне ушли больше всего: ", firstDismissedResult);

// enum EDepartaments {
//   TECH = "технический",
//   DESIGN = "дизайн",
//   PROJECT = "проектировщики",
// }