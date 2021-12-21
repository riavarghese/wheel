import React, { useContext } from "react";

import { Pane, Typography } from "neetoui/v2";

import formInitialValues from "constants/formInitialValues";
import { DashboardContext } from "contexts/dashboard";

import NoteForm from "./Form";

const NewNotePane = () => {
  const { showNewNotePane, setShowNewNotePane } = useContext(DashboardContext);

  return (
    <Pane isOpen={showNewNotePane} onClose={() => setShowNewNotePane(false)}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <NoteForm note={formInitialValues.notesForm} />
    </Pane>
  );
};

export default NewNotePane;
