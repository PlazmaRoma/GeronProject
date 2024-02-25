import { FC } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const LightCard: FC = function Mid() {
  return (
    <Card
      className="w-1/9 border border-black items-center"
      color="white"
      placeholder={undefined}
    >
      <CardBody
        className="flex flex-col justify-center"
        placeholder={undefined}
      >
        <Typography
          variant="h5"
          color="gray"
          className="mb-2 text-center"
          placeholder={undefined}
        >
          Lorem Ipsum
        </Typography>
        <Typography
          className="border-black text-center"
          placeholder={undefined}
        >
          Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum
          dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit
          amet. Lorem Ipsum dolor sit amet.
        </Typography>
      </CardBody>
      <CardFooter placeholder={undefined} className="pt-0">
        <Button color="gray" placeholder={undefined}>
          Metative
        </Button>
      </CardFooter>
    </Card>
  );
};
