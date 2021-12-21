import React, { useContext } from "react";

import { Pane, Typography } from "neetoui/v2";

import formInitialValues from "constants/formInitialValues";
import { DashboardContext } from "contexts/dashboard";

import ContactForm from "./Form";

export default function NewContactPane() {
  const { showNewContactPane, setShowNewContactPane } =
    useContext(DashboardContext);

  return (
    <Pane
      isOpen={showNewContactPane}
      onClose={() => setShowNewContactPane(false)}
    >
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <ContactForm contact={formInitialValues.contactsForm} />
    </Pane>
  );
}
