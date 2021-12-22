import React, { useContext } from "react";

import { Toastr, Alert } from "neetoui/v2";

import { CONTACTS } from "components/Dashboard/Contacts/constants";
import { SAMPLE_NOTES } from "components/Dashboard/Notes/constants";
import { DashboardContext } from "contexts/dashboard";

const Delete = ({ isContactsPage }) => {
  const { selectedContact, selectedNote, setIsDeleteAlertOpen } =
    useContext(DashboardContext);

  const handleDelete = () => {
    isContactsPage
      ? CONTACTS.splice(selectedContact, 1)
      : SAMPLE_NOTES.splice(selectedNote, 1);
    setIsDeleteAlertOpen(false);
    Toastr.success(
      `${isContactsPage ? "Contact" : "Note"} deleted successfully.`
    );
  };

  return (
    <Alert
      isOpen
      message={`Are you sure you want to delete the ${
        isContactsPage ? "contact" : "note"
      }? This action cannot be undone.`}
      onClose={() => setIsDeleteAlertOpen(false)}
      onSubmit={handleDelete}
      title={isContactsPage ? "Delete Contact" : "Delete Note"}
    />
  );
};

export default Delete;
