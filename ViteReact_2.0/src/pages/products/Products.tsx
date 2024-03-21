import { FC } from "react";
import { Typography } from "../../shared/ui/Typography";
import { products } from "./model/Products";
import { Card } from "../../shared/ui/Card";
import { Link } from "@tanstack/react-router";
import { Button } from "../../shared/ui/Button";

export const Products: FC = function Products() {
    const list = products.map((item) => (
        <li key={item.id.toString()}>
            <Card>
                <Typography size={20} align="center">{item.name}</Typography>
                <Link
                    to={`/products/$productID`}
                    params={{ productID: item.id.toString() }}>
                    <Button mode={"dark"}>{"Перейти"}</Button>
                </Link>
            </Card>
        </li>
    ))

    return <ul>{list}</ul>
}