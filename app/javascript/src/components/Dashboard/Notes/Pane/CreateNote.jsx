import React, { useContext } from "react";

import { Pane, Typography } from "neetoui/v2";

import formInitialValues from "constants/formInitialValues";
import { DashboardContext } from "contexts/dashboard";

import Form from "./Form";

export default function NewNotePane() {
  const { showNewNotePane, setShowNewNotePane } = useContext(DashboardContext);

  return (
    <Pane isOpen={showNewNotePane} onClose={() => setShowNewNotePane(false)}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form note={formInitialValues.notesForm} isEdit={false} />
    </Pane>
  );
}
