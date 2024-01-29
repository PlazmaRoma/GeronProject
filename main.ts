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

type ariv = "arrived" | "left";

interface TTransact {
  summ: number;
  category: string;
  type: ariv;
}

const summarrleft: TTransact[] = [
    {summ: 10000, category: "job", type: "arrived"},
    {summ: 2000, category: "credits", type: "left"},
    {summ: 1000, category: "bankers", type: "left"}
]

const descleft = summarrleft.filter(
    (lefted) => lefted.type === "left"
)

const leftedsumm = descleft.reduce((summleft, left) => {
    return summleft + left.summ
},0)

console.log(leftedsumm)