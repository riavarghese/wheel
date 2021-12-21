import React, { useState } from "react";

// import { Button } from "neetoui/v2";
// import { Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";
import AppHeader from "components/Common/Header";
import Menubar from "components/Common/Menubar";

import { CONTACTS } from "./constants";
import ContactsTable from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isContactsNotEmpty = !!CONTACTS.length;

  return (
    <div className="w-full flex">
      <Menubar showMenu={showMenu} isContactsPage />
      <div className="w-full px-8">
        <AppHeader
          isContactsPage
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        {isContactsNotEmpty ? (
          <ContactsTable />
        ) : (
          <EmptyState
            title="Looks like you don't have any contacts!"
            subtitle="Add contacts to send customized emails to them."
            primaryActionLabel="Add Contacts"
          />
        )}
      </div>
    </div>
  );
};

export default Contacts;
