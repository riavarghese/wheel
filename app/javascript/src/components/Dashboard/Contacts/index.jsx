import React, { useState, useContext } from "react";

import EmptyState from "components/Common/EmptyState";
import AppHeader from "components/Common/Header";
import Menubar from "components/Common/Menubar";
import { DashboardContext } from "contexts/dashboard";

import { CONTACTS } from "./constants";
import NewContactPane from "./Pane";
import ContactsTable from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isContactsNotEmpty = !!CONTACTS.length;
  const { setShowNewContactPane } = useContext(DashboardContext);

  return (
    <div className="w-full flex">
      <Menubar showMenu={showMenu} isContactsPage />
      <div className="w-full overflow-y-auto px-8">
        <AppHeader
          isContactsPage
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          buttonAction={() => setShowNewContactPane(true)}
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
        <NewContactPane />
      </div>
    </div>
  );
};

export default Contacts;
