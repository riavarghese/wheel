import React, { useState, useContext } from "react";

import DeleteContact from "Common/Delete";
import EmptyState from "Common/EmptyState";
import AppHeader from "Common/Header";
import Menubar from "Common/Menubar";
import { DashboardContext } from "contexts/dashboard";

import { CONTACTS_MENUBAR_COMPONENTS, CONTACTS } from "./constants";
import CreateContact from "./Create";
import ContactsList from "./List";

const Contacts = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const isContactsNotEmpty = !!CONTACTS.length;
  const { isDeleteAlertOpen, setIsNewContactPaneOpen } =
    useContext(DashboardContext);

  return (
    <div className="w-full flex">
      <Menubar
        isMenuBarOpen={isMenuBarOpen}
        menubarProps={CONTACTS_MENUBAR_COMPONENTS}
        title="Contacts"
      />
      <div className="w-full overflow-y-auto px-8">
        <AppHeader
          isContactsPage
          isMenuBarOpen={isMenuBarOpen}
          setIsMenuBarOpen={setIsMenuBarOpen}
          buttonAction={() => setIsNewContactPaneOpen(true)}
        />
        {isContactsNotEmpty ? (
          <ContactsList />
        ) : (
          <EmptyState
            title="Looks like you don't have any contacts!"
            subtitle="Add contacts to send customized emails to them."
            primaryActionLabel="Add Contacts"
          />
        )}
        <CreateContact />
        {isDeleteAlertOpen && <DeleteContact isContactsPage />}
      </div>
    </div>
  );
};

export default Contacts;
