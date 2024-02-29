import { FC } from "react";
import { Typography } from "../shared/ui/Typography";
import { COLORS_TEXT } from "../shared/types/colors";


export const Header: FC = function Header() {
  return (
    <>
      <header className="bg-blue-400 py-3">
        <Typography color={COLORS_TEXT.alternative} size={20} align="center" weight={700}>
            {"Products in the cart"}</Typography>
      </header>
    </>
  );
};
