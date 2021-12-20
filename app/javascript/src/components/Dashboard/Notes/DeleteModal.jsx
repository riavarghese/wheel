import React, { useContext } from "react";

import { Typography, Button, Toastr, Modal } from "neetoui/v2";

import { NoteContext } from "contexts/note";

import { SAMPLE_NOTES } from "./constants";

const DeleteModal = () => {
  const { selectedNote, setShowDeleteModal } = useContext(NoteContext);

  const handleDelete = () => {
    SAMPLE_NOTES.splice(selectedNote, 1);
    setShowDeleteModal(false);
    Toastr.success("Successfully deleted note.");
  };

  return (
    <Modal isOpen onClose={() => setShowDeleteModal(false)}>
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={handleDelete} size="large" />
        <Button
          style="text"
          label="Cancel"
          onClick={() => setShowDeleteModal(false)}
          size="large"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
