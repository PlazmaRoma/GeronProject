import { BasketProduct, Shop } from "./order-types";
import data from "../../../json/product_data1.json";

export class Catalogue {
  private _data: Shop[] = [];

  constructor() {
    this._data = data;
  }
  get products() {
    const list: BasketProduct[] = [];
    this._data.forEach(({ products, id }) => {
      products.forEach((product) => {
        list.push({ shopId: id, ...product });
      });
    });
    return list;
  }
}

export const catalogue = new Catalogue();
