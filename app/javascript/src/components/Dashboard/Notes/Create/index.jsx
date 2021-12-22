import React, { useContext } from "react";

import { Pane, Typography } from "neetoui/v2";

import { DashboardContext } from "contexts/dashboard";

import Form from "./Form";

const Create = () => {
  const { isNewNotePaneOpen, setIsNewNotePaneOpen } =
    useContext(DashboardContext);

  return (
    <Pane
      isOpen={isNewNotePaneOpen}
      onClose={() => setIsNewNotePaneOpen(false)}
    >
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form />
    </Pane>
  );
};

export default Create;
