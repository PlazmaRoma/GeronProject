import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../shared/ui/Button";

interface Props {}

type Form = {
  title: string;
  description: string;
};

export const NoteForm: FC<Props> = function NoteForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<Form>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <>
      <form
        className="gap-6 flex flex-col pt-4"
        onSubmit={handleSubmit((form) => {
          console.log(form);
        })}
      >
        <Controller
          name="description"
          control={control}
          rules={{
            required: "Это поле обязательное",
            validate: (value) => value.length > 5 || "Минимум 6 символов",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              error={Boolean(error?.message)}
              helperText={error?.message}
              label="Описание"
              fullWidth={true}
              variant="outlined"
              maxRows={4}
            />
          )}
        />

        <TextField
          label={"Описание"}
          fullWidth={true}
          multiline={true}
          maxRows={4}
        />
        <Button disabled={!isValid} type="submit">{"Добавить"}</Button>
      </form>
    </>
  );
};