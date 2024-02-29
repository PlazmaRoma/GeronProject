import React from "react";
import { FC } from "react";
import { Header } from "./src/components/Header";
import { BasketCard } from "./src/components/BasketCard";
// import { Card } from "./src/shared/ui/Card";
// import { Typography } from "./src/shared/ui/Typography";
// import { Button } from "./src/shared/ui/Button";

const data = ["Apple", "Grapefruit", "Orange"];

export const App: FC = function App() {
  const list = data.map((item) => <BasketCard key={item} title={item} />);

  return (
    <>
      <Header />
      <ul className="w-full">{list}</ul>
    </>
  );
};
