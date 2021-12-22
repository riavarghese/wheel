import React from "react";

import { Button } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

const AppHeader = ({
  isContactsPage,
  isMenuBarOpen,
  setIsMenuBarOpen,
  buttonAction,
}) => {
  return (
    <Header
      title={isContactsPage ? "All Contacts" : "All Notes"}
      menuBarToggle={() => setIsMenuBarOpen(!isMenuBarOpen)}
      searchProps={{
        placeholder: "Search Name, Email, Phone Number, Etc.",
      }}
      actionBlock={
        <Button
          onClick={buttonAction}
          label={isContactsPage ? "Add Contact" : "Add New Note"}
          icon="ri-add-line"
        />
      }
    />
  );
};

export default AppHeader;
