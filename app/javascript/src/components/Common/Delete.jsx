import React, { useContext } from "react";

import { Typography, Button, Toastr, Modal } from "neetoui/v2";

import { CONTACTS } from "components/Dashboard/Contacts/constants";
import { SAMPLE_NOTES } from "components/Dashboard/Notes/constants";
import { DashboardContext } from "contexts/dashboard";

const Delete = ({ isContactsPage }) => {
  const { selectedContact, selectedNote, setIsDeleteModalOpen } =
    useContext(DashboardContext);

  const handleDelete = () => {
    isContactsPage
      ? CONTACTS.splice(selectedContact, 1)
      : SAMPLE_NOTES.splice(selectedNote, 1);
    setIsDeleteModalOpen(false);
    Toastr.success(
      `${isContactsPage ? "Contact" : "Note"} deleted successfully.`
    );
  };

  return (
    <Modal isOpen onClose={() => setIsDeleteModalOpen(false)}>
      <Modal.Header>
        <Typography style="h2">
          {isContactsPage ? "Delete Contact" : "Delete Note"}
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          {`Are you sure you want to delete the ${
            isContactsPage ? "contact" : "note"
          }? This action cannot be
          undone.`}
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={handleDelete} size="large" />
        <Button
          style="text"
          label="Cancel"
          onClick={() => setIsDeleteModalOpen(false)}
          size="large"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default Delete;