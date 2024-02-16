// import * as Order from "./src/models/Order";

// const user = "Виктор Марш";
// const address = "г.Павлодар, ул.Торайгырова, дом 16, подъезд 2, кв. 95";
// const sum = 30000;

// const order = new Order({ user: user, adress: address, sum: sum });

// //order.newAddress = "г.Павлодар, ул.Торайгырова, дом 16";

// console.log(order.getInfoOrder());

// interface Person {
//     name: string;
//     age: number;
//     hasLicense: boolean;
//   }

//   const people: Person[] = [
//     { name: "John", age: 21, hasLicense: true },
//     { name: "Ann", age: 17, hasLicense: false },
//     { name: "Maria", age: 30, hasLicense: true },
//   ];

//   const filteredPeople = people.filter(
//     (person) => person.age >= 18 && person.hasLicense
//   );

//   console.log(filteredPeople);

// interface stateHuman {
//     name: string;
//     age: number;
//     gender: string;
//     job: string;
//     education: boolean;
//     lead: string;
// }

// const stateHumanes: stateHuman[] = [
//   {
//     name: "Fill",
//     age: 32,
//     gender: "Male",
//     job: "Google",
//     education: true,
//     lead: "SEO",
//   },
//   {
//     name: "Erling",
//     age: 44,
//     gender: "Male",
//     job: "Microsoft",
//     education: true,
//     lead: "Manager",
//   },
//   {
//     name: "Alina",
//     age: 19,
//     gender: "Female",
//     job: "BBC",
//     education: false,
//     lead: "Journalist",
//   },
// ];

// const filteredStHum = stateHumanes.filter(
//   (statehum) =>
//     statehum.education === true &&
//     (statehum.lead === "SEO" || statehum.lead === "Manager")
// );

// console.log(filteredStHum);

// type ariv = "arrived" | "left";

// interface TTransact {
//   summ: number;
//   category: string;
//   type: ariv;
// }

// const summarrleft: TTransact[] = [
//     {summ: 10000, category: "job", type: "arrived"},
//     {summ: 2000, category: "credits", type: "left"},
//     {summ: 1000, category: "bankers", type: "left"}
// ]

// const descleft = summarrleft.filter(
//     (lefted) => lefted.type === "left"
// )

// const leftedsumm = descleft.reduce((summleft, left) => {
//     return summleft + left.summ
// },0)

// console.log(leftedsumm)

// import { Products, Tproducts } from "./src/scripts/types";
// const productsStore = new Products();
// console.log(productsStore.allStorages);

// const newProduct: Tproducts = {
//   product_name: "Видеокарта",
//   seller_company: "КомпМаг",
//   quantity: 10,
//   unit_price: 50,
//   supply_id: 999,
//   warehouse_id: 340,
// };

// productsStore.addProduct(102, newProduct);
// productsStore.sortByPrice(102, true);

// productsStore.sortByPrice(102, true)
// productsStore.sortByPrice(102, true)

// console.log(productsStore.getStorage(101));

// import * as Users from "./src/scripts/13lessnFiles/Client";
// import { BasketProduct, Order } from "./src/scripts/13lessnFiles/order-types";
// import * as Address from "./src/scripts/13lessnFiles/Delivery";
// import { catalogue } from "./src/scripts/13lessnFiles/Catalogue";

// const order: Order = {
//   client: Users.user,
//   delivery: { dateTime: new Date(), type: Address.myAddress },
//   basket: {
//     products: [],
//     total: 0,
//   },
// };

// const products: BasketProduct[] = [];

// for (let index = 0; index < Array(5).length; index++) {
//   const random = Math.floor(Math.random() * 50);

//   const selectProduct = catalogue.products[random];

//   products.push(selectProduct);
// }

// order.basket = {
//   products,
//   total: products.reduce(
//     (sum, currentProduct) => sum + currentProduct.price, 0
//   ),
// };

// const order1: Order = {
//     client: Users.user,
//     delivery: { dateTime: new Date(), type: Address.myAddress },
//     basket: {
//       products: [],
//       total: 0,
//     },
//   };

//   const order2: Order = {
//     client: Users.user2,
//     delivery: { dateTime: new Date(), type: Address.myAddress2 },
//     basket: {
//       products: [],
//       total: 0,
//     },
//   };

//   const order3: Order = {
//     client: Users.user3,
//     delivery: { dateTime: new Date(), type: Address.myAddres3 },
//     basket: {
//       products: [],
//       total: 0,
//     },
//   };

//   const order4: Order = {
//     client: Users.user4,
//     delivery: { dateTime: new Date(), type: Address.myAddress4 },
//     basket: {
//       products: [],
//       total: 0,
//     },
//   };

//   const orders: Order[] = [order1, order2, order3, order4];

//   function getRandomOrder(orders: Order[]): Order {
//     const randomIndex = Math.floor(Math.random() * orders.length);
//     return orders[randomIndex];
//   }

//   const randomOrder = getRandomOrder(orders);

//   console.log("Случайный заказ:", randomOrder);

import { format } from "date-fns";
import { ru } from "date-fns/locale";

const generateRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const day = 25;
const year = 23;

const randomMonth = generateRandomNumber(1, 12);

console.log(
  format(new Date(), `${day}.${randomMonth}.${year}`, { locale: ru })
);
