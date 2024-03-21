import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";

export const Route = createFileRoute("/notes/$noteid/edit")({
  component: NotesFormRoute,
  staticData: {
    title: "Редактировать заметку",
  },
});

function NotesFormRoute() {
  return <NoteForm />;
}
