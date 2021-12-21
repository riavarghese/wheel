import React, { useContext } from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui/v2";

import { DashboardContext } from "contexts/dashboard";

const NoteHeader = ({ note, index }) => {
  const { setShowDeleteModal, setSelectedNote } = useContext(DashboardContext);

  const handleDelete = () => {
    setSelectedNote(index);
    setShowDeleteModal(true);
  };

  return (
    <div className="flex justify-between items-center">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown icon={MenuVertical} buttonStyle="text" position="bottom-end">
        <li>Edit</li>
        <li onClick={handleDelete}>Delete</li>
      </Dropdown>
    </div>
  );
};

export default NoteHeader;
