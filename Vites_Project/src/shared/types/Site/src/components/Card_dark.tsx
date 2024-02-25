import { FC } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const DarkCard: FC = function Mid() {
  return (
    <Card className="w-1/9 items-center" color="gray" placeholder={undefined}>
      <CardBody
        className="flex flex-col justify-center"
        placeholder={undefined}
      >
        <Typography
          variant="h5"
          color="white"
          className="mb-2 text-center"
          placeholder={undefined}
        >
          Lorem Ipsum
        </Typography>
        <Typography placeholder={undefined} className="text-center">
          Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum
          dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit
          amet. Lorem Ipsum dolor sit amet.
        </Typography>
      </CardBody>
      <CardFooter placeholder={undefined} className="pt-0">
        <Button color="white" placeholder={undefined}>
          Metative
        </Button>
      </CardFooter>
    </Card>
  );
};
