import React, { useContext } from "react";

import { Pane, Typography } from "neetoui/v2";

import formInitialValues from "constants/formInitialValues";
import { DashboardContext } from "contexts/dashboard";

import Form from "./Form";

const Create = () => {
  const { isNewContactPaneOpen, setIsNewContactPaneOpen } =
    useContext(DashboardContext);

  return (
    <Pane
      isOpen={isNewContactPaneOpen}
      onClose={() => setIsNewContactPaneOpen(false)}
    >
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form contact={formInitialValues.contactsForm} />
    </Pane>
  );
};

export default Create;
