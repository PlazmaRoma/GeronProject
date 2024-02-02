// // Level 1
// export enum ESeasons {
//   winter = "Зимний",
//   spring = "Весенний",
//   summer = "Летний",
//   autumn = "Осенний",
// }

// export enum EParts {
//   TECH = "Технический",
//   DESIGN = "Дизайн",
//   PROJECT = "Проектировщики",
// }

// type TSeason = {
//   closeProjects: number;
//   income: number;
//   hired: number;
//   dismissed: number;
//   newProjects: number;
// };

// export type TSeasons = {
//   winter: TSeason;
//   spring: TSeason;
//   summer: TSeason;
//   autumn: TSeason;
// };

// type DetailParams = {
//   width: number;
//   height: number;
//   weight: number;
// };

// export type Detail = {
//   title: string;
//   params: DetailParams;
// };

// export type Project = {
//   name: string;
//   details: Detail[];
//   mainEngineer: string;
//   deadline: string;
// };

// type Department = "tech" | "turbo" | "chemical";

// export type FDatasetType = Record<Department, Project[]>;

// export type TEmployee = {
//   name:string,
//   age:number,
//   isActive:boolean,
//   sallary:string
// }

// import { Storage } from "./data";
// import products from "../../json/product_data.json";

// export type Tshop_data = {
//   city: string;
//   name: string;
//   address: string;
//   warehouse_id: number;
//   products: Tproducts[];
// };

// export type Tproducts = {
//   product_name: string;
//   seller_company: string;
//   quantity: number;
//   unit_price: number;
//   supply_id: number;
//   warehouse_id: number;
// };

// export class Products extends Storage {
//   constructor() {
//     super();
//     products.forEach((item) => {
//       this.setProducts(item.warehouse_id, item);
//     });
//   }

//   addProduct(warehouseId: number, newProduct: Tproducts) {
//     const storage = this.getStorage(warehouseId);
//     storage.products.push(newProduct);
//     this.updateStorage = storage;
//   }

//   sortByPrice(warehouseId: number, ascending: boolean = true) {
//     const storage = this.getStorage(warehouseId);

//     storage.products.sort((a, b) =>
//       ascending ? a.unit_price - b.unit_price : b.unit_price - a.unit_price
//     );

//     this.updateStorage = storage;
//   }
// }

