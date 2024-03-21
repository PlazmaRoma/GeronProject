import { FC } from "react";
import { Button } from "../../shared/ui/Button";
import { Card } from "../../shared/ui/Card";
import { COLORS_BORDER } from "../../shared/ui/colors";
import { Typography } from "../../shared/ui/Typography";
import { useNavigate } from "@tanstack/react-router";

interface Props {}

export const NoteList: FC<Props> = function NoteList() {
  const navigate = useNavigate();

  return (
    <>
      <div className="gap-6">
        <Button onClick={() => navigate({ to: "/notes/add" })} mode={"dark"}>
          {"+"}
        </Button>
        <ul className="flex gap-4 flex-wrap">
          <li className="w-full">
            <Card className={`${COLORS_BORDER.secondary100} border-2`}>
              <Typography size={20} weight={600}>
                {"Заголовок"}
              </Typography>{" "}
              <Typography size={16}>{"Описание заметки"}</Typography>
            </Card>
          </li>
        </ul>
      </div>
    </>
  );
};
