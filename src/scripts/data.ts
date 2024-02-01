//import { TSeasons } from "./types";
// enum EColors {
//   red = "красный",
//   black = "черный",
//   gray = "серый",
// }

// const color = EColors.red;
// console.log(color);

// const getColorText = (color: EColors) => {
//   switch (color) {
//     case EColors.black:
//       console.log("черный");
//       break;
//     case EColors.red:
//       console.log("красный");
//       break;
//     case EColors.gray:
//       console.log("серый");
//     default:
//       console.log("такого цвета нет");
//   }
// };

// type TCallback = (num1: number, num2: number) => number;
// const generateRandomNumber = (callback: TCallback) => {
//   let num1: number = Math.floor(Math.random() * 100);
//   let num2: number = Math.floor(Math.random() * 100);
//   let answer = callback(num1, num2);
//   return answer;
// };

// const summary = (num1: number, num2: number) => {
//   return num1 + num2;
// };
// const divide = (num1: number, num2: number) => {
//   return num2 != 0 ? num1 / num2 : 0;
// };
// const multiply = (num1: number, num2: number) => {
//   return num1 * num2;
// };

// console.log(generateRandomNumber(summary));
// console.log(generateRandomNumber(multiply));
// console.log(generateRandomNumber(divide));

// const getName = (callback: (name: string) => void) => {
//   let userName: string = "Roman";
//   callback(userName);
// };

// const sayHi = (name: string) => {
//   console.log("Hi " + name);
// };
// getName();

// let year = [2019, 2020, 2021, 2022, 2023, 2024];
// let month = ["Spring", "Summer", "Autumn", "Winter"];

// console.log(year[3] + "\n" + month[2] + "\n" + month[3] + "\n" + year[0]);

// let array = [
//     {
//         name: "Roman",
//         age: 13
//     },
//     {
//         name: "Azamat",
//         age: 14
//     },
// ]

// console.log(array[1].age +"\n" + array[0].name + "\n")

// type TMonth = {
//   title: string;
//   days: number;
// };

// let mothes: TMonth[] = [
//   {
//     title: "Январь",
//     days: 31,
//   },
//   {
//     title: "Февраль",
//     days: 28,
//   },
//   {
//     title: "Март",
//     days: 31,
//   },
//   {
//     title: "Апрель",
//     days: 31,
//   },
//   {
//     title: "Май",
//     days: 31,
//   },
// ];

// mothes.push({
//   title: "Июнь",
//   days: 31,
// });

// let mothesMore30Days: TMonth[] = [];

// for (let i = 0; i < mothes.length; i++) {
//   if (mothes[i].days < 30) {
//     mothesMore30Days.push(mothes[i]);
//   }
// }

// let sumOfDays: number = 0;
// for (let i = 0; i < mothes.length; i++) {
//   sumOfDays += mothes[i].days;
// }
// console.log("Сумма всех дней в месяце: " + sumOfDays);

// let MinMothes: TMonth = mothes[0];
// let MaxMothes: TMonth = mothes[0];

// for (let i = 0; i < mothes.length; i++) {
//   if (mothes[i].days < MinMothes.days) {
//     MinMothes = mothes[i];
//   }
//   if (mothes[i].days > MinMothes.days) {
//     MaxMothes = mothes[i];
//   }
// }

// console.log(MaxMothes);
// console.log(MinMothes);

// let numbers: number[] = [1, 2, 3, 4, 5, 6];

// numbers.unshift(7);
// numbers.splice(2, 0, 7777);
// let numbers2 = numbers.concat(numbers);
// let numbers3 = [...numbers, ...numbers2];

// console.log(numbers3);

// numbers.forEach((item) => {
//   console.log(item);
// });

// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// let strings = ["3000", "2", "30", "200", "5"];
// let strToNumber = strings.map((element) => {
//   return parseInt(element);
// });
// console.log(strToNumber);

// let numbersMore5 = numbers3.filter((item) => item > 5);
// console.log(numbersMore5);

// type TCategory = "smartphone" | "laptop";
// type TStuff = {
//   category: TCategory;
//   price: number;
//   count: number;
// };

// let stuffs: TStuff[] = [
//   {
//     category: "smartphone",
//     price: 150000,
//     count: 3,
//   },
//   {
//     category: "laptop",
//     price: 300000,
//     count: 5,
//   },
//   {
//     category: "smartphone",
//     price: 250000,
//     count: 8,
//   },
//   {
//     category: "laptop",
//     price: 200000,
//     count: 7,
//   },
// ];

// let smartphones: TStuff[] = stuffs.filter((item) => {
//   return item.category === "smartphone";
// });
// let laptops: TStuff[] = stuffs.filter((item) => {
//   return item.category === "laptop";
// });
// console.log(smartphones);
// console.log(laptops);

// smartphones.sort((a,b) => {return a.price - b.price})
// console.log(smartphones);

// type TwCategory = "smartphone" | "laptop";
// type TwStuff = {
//   category: TwCategory;
//   price: number;
//   count: number;
// };

// let stuffs: TwStuff[] = [
//   {
//     category: "smartphone",
//     price: 150000,
//     count: 3,
//   },
//   {
//     category: "laptop",
//     price: 350000,
//     count: 5,
//   },
//   {
//     category: "smartphone",
//     price: 250000,
//     count: 8,
//   },
//   {
//     category: "laptop",
//     price: 200000,
//     count: 7,
//   },
//   {
//     category: "smartphone",
//     price: 300000,
//     count: 2,
//   },
// ];

// let smartphones: TwStuff[] = stuffs.filter((item) => {
//   return item.category === "smartphone";
// });
// let laptops: TwStuff[] = stuffs.filter((item) => {
//   return item.category === "laptop";
// });

// stuffs.push({
//   category: "laptop",
//   price: 500000,
//   count: 3,
// });

// function addCategoryW(categorys: TwCategory, prices: number, counts: number) {
//   if (categorys === "smartphone") {
//     smartphones.push({
//       category: categorys,
//       price: prices,
//       count: counts,
//     });
//   } else {
//     laptops.push({
//       category: categorys,
//       price: prices,
//       count: counts,
//     });
//   }
// }

// smartphones.map((item) => (item.price *= 1.1));
// laptops.map((item) => (item.price *= 0.8));
// console.log(smartphones);
// console.log(laptops);

// smartphones.sort((a, b) => {
//   return a.price - b.price;
// });

// laptops.sort((a, b) => {
//   return b.price - a.price;
// });
// console.log(smartphones);
// console.log(laptops);

// let products = [...smartphones, ...laptops];
// products.sort((a, b) => {
//   return b.price - a.price;
// });
// console.log(products);

// export const testFunction = () =>{
//   console.log("test");
// }

// export let test: string = "test";

// // Level 1
//import * as ETypes from "./types";

// export const data: ETypes.TSeasons = {
//   winter: {
//     closeProjects: 10,
//     income: 600000,
//     hired: 10,
//     dismissed: 10,
//     newProjects: 10,
//   },
//   spring: {
//     closeProjects: 10,
//     income: 750000,
//     hired: 10,
//     dismissed: 10,
//     newProjects: 10,
//   },
//   summer: {
//     closeProjects: 10,
//     income: 550000,
//     hired: 10,
//     dismissed: 10,
//     newProjects: 10,
//   },
//   autumn: {
//     closeProjects: 10,
//     income: 900000,
//     hired: 10,
//     dismissed: 10,
//     newProjects: 10,
//   },
// };

// export function MaxIncomeSeason() {
//   return Math.max(
//     data.winter.income,
//     data.spring.income,
//     data.summer.income,
//     data.autumn.income
//   );
// }

// export function MinIncomeSeason() {
//   return Math.min(
//     data.winter.income,
//     data.spring.income,
//     data.summer.income,
//     data.autumn.income
//   );
// }

// export function MaxEmployeesSeason() {
//   return Math.max(
//     data.winter.hired,
//     data.spring.hired,
//     data.summer.hired,
//     data.autumn.hired
//   );
// }

// export function DisEmployeesSeason() {
//   return Math.max(
//     data.winter.dismissed,
//     data.spring.dismissed,
//     data.summer.dismissed,
//     data.autumn.dismissed
//   );
// }

// import {FDatasetType} from "./types"

// export const FDataset: FDatasetType = {
//   tech: [
//     {
//       name: "Проект Автоматизации",
//       details: [
//         {
//           title: "Шасси",
//           params: { width: 45, height: 20, weight: 70 },
//         },
//         {
//           title: "Двигатель",
//           params: { width: 35, height: 35, weight: 120 },
//         },
//         {
//           title: "Экран",
//           params: { width: 25, height: 15, weight: 20 },
//         },
//         {
//           title: "Кабель",
//           params: { width: 5, height: 1000, weight: 30 },
//         },
//         {
//           title: "Корпус",
//           params: { width: 60, height: 40, weight: 200 },
//         },
//       ],
//       mainEngineer: "Иван Иванов",
//       deadline: "2023-12-15",
//     },
//     {
//       name: "Система Охлаждения",
//       details: [
//         {
//           title: "Трубы",
//           params: { width: 10, height: 200, weight: 50 },
//         },
//         {
//           title: "Компрессор",
//           params: { width: 40, height: 40, weight: 110 },
//         },
//         {
//           title: "Радиатор",
//           params: { width: 50, height: 30, weight: 75 },
//         },
//         {
//           title: "Вентилятор",
//           params: { width: 20, height: 20, weight: 25 },
//         },
//         {
//           title: "Фильтр",
//           params: { width: 15, height: 15, weight: 10 },
//         },
//       ],
//       mainEngineer: "Петр Петров",
//       deadline: "2023-10-20",
//     },
//   ],
//   turbo: [
//     {
//       name: "Турбина A-100",
//       details: [
//         {
//           title: "Лопатки",
//           params: { width: 5, height: 30, weight: 20 },
//         },
//         {
//           title: "Вал",
//           params: { width: 10, height: 200, weight: 100 },
//         },
//         {
//           title: "Кожух",
//           params: { width: 100, height: 100, weight: 400 },
//         },
//         {
//           title: "Подшипник",
//           params: { width: 15, height: 15, weight: 10 },
//         },
//         {
//           title: "Система смазки",
//           params: { width: 30, height: 30, weight: 70 },
//         },
//       ],
//       mainEngineer: "Сергей Сергеев",
//       deadline: "2024-02-28",
//     },
//     {
//       name: "Турбогенератор B-200",
//       details: [
//         {
//           title: "Ротор",
//           params: { width: 40, height: 100, weight: 300 },
//         },
//         {
//           title: "Статор",
//           params: { width: 50, height: 110, weight: 320 },
//         },
//         {
//           title: "Соединительная часть",
//           params: { width: 20, height: 30, weight: 50 },
//         },
//         {
//           title: "Панель управления",
//           params: { width: 60, height: 40, weight: 90 },
//         },
//         {
//           title: "Кабельное соединение",
//           params: { width: 10, height: 500, weight: 100 },
//         },
//       ],
//       mainEngineer: "Андрей Андреев",
//       deadline: "2023-11-15",
//     },
//   ],
//   chemical: [
//     {
//       name: "Синтез органических соединений",
//       details: [
//         {
//           title: "Реактор",
//           params: { width: 100, height: 200, weight: 600 },
//         },
//         {
//           title: "Фильтр",
//           params: { width: 30, height: 30, weight: 40 },
//         },
//         {
//           title: "Колонна дистилляции",
//           params: { width: 80, height: 300, weight: 800 },
//         },
//         {
//           title: "Хранилище",
//           params: { width: 150, height: 150, weight: 1000 },
//         },
//         {
//           title: "Система насосов",
//           params: { width: 40, height: 40, weight: 120 },
//         },
//       ],
//       mainEngineer: "Екатерина Смирнова",
//       deadline: "2023-09-30",
//     },
//     {
//       name: "Производство удобрений",
//       details: [
//         {
//           title: "Бункер",
//           params: { width: 200, height: 200, weight: 1500 },
//         },
//         {
//           title: "Мешалка",
//           params: { width: 50, height: 50, weight: 200 },
//         },
//         {
//           title: "Лента конвейера",
//           params: { width: 100, height: 1000, weight: 400 },
//         },
//         {
//           title: "Система сушки",
//           params: { width: 100, height: 100, weight: 500 },
//         },
//         {
//           title: "Пакетировочная машина",
//           params: { width: 60, height: 60, weight: 300 },
//         },
//       ],
//       mainEngineer: "Ольга Олеговна",
//       deadline: "2023-07-15",
//     },
//   ],
// };

import shop_data from "../../json/shop_data.json";

import {Tproducts, Tshop_data } from "./types";

export class Storage {
  private _data: Tshop_data[];

  constructor() {
    this._data = shop_data;
  }

  get allStorages() {
    return this._data;
  }

  protected set updateStorage(storage: Tshop_data) {
    this._data = this._data.map((item) => {
      if (item.warehouse_id !== storage.warehouse_id) return item;

      return storage;
    });
  }

  getStorage(id: number): Tshop_data {
    return this._data.find((item) => item.warehouse_id === id);
  }

  protected setProducts(id: number, products: Tproducts) {
    const storage = this.getStorage(id);
    storage.products.push(products);
    this.updateStorage = storage;
  }
}
