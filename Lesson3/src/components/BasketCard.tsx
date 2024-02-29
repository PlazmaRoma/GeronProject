import { FC, useState } from "react";
import { Card } from "../shared/ui/Card";
import { Typography } from "../shared/ui/Typography";
import { Button } from "../shared/ui/Button";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CompProps {
  title: string;
}

export const BasketCard: FC<CompProps> = function BasketCard() {
  const [count, setCount] = useState<number>(0);
  const [basketTotal, setBasketTotal] = useState<number>(0);
  const [products] = useState<Product[]>([
    { id: 1, name: "Pineapple", price: 10 },
    { id: 2, name: "Apple", price: 20 },
    { id: 3, name: "Banana", price: 30 }
  ]);

  const handleBuy = (price: number) => {
    setCount(count + 1);
    setBasketTotal(basketTotal + price);
  };

  return (
    <>
      <Typography size={24} weight={600} align="center">
        Products price in the cart: {basketTotal}
      </Typography>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Card>
              <Typography size={20} weight={600} align="center">
                {product.name} - ${product.price}
              </Typography>
              <div className="flex">
                <Button mode="dark" onClick={() => handleBuy(product.price)}>
                  Buy
                </Button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};
