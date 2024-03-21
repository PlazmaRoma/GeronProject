import { FC, useState } from "react";
import { Typography } from "./src/shared/ui/Typography";
import { Header } from "./src/components/Header";
import { Button } from "./src/shared/ui/Button";
import { Card } from "./src/shared/ui/Card";

export const App: FC = function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Header count={count} />
      <Card>
        <Typography size={20} align="center" className={"mb-3"}>
          {"Функционал счетчика"}</Typography>

        <Button mode={"dark"} onClick={() => setCount(count + 1)}>{"Прибавить count"}</Button>
      </Card>
    </>
  )
}
