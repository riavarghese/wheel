import React from "react";

import { Button } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

const AppHeader = ({
  isContactsPage,
  showMenu,
  setShowMenu,
  setShowNewNotePane,
}) => {
  return (
    <Header
      title={isContactsPage ? "All Contacts" : "All Notes"}
      menuBarToggle={() => setShowMenu(!showMenu)}
      searchProps={{
        placeholder: "Search Name, Email, Phone Number, Etc.",
      }}
      actionBlock={
        <Button
          onClick={() => setShowNewNotePane(true)}
          label={isContactsPage ? "Add Contact" : "Add New Note"}
          icon="ri-add-line"
        />
      }
    />
  );
};

export default AppHeader;
