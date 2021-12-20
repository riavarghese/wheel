import React, { useContext } from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "@bigbinary/neetoui/v2";

import { NoteContext } from "contexts/note";

const NoteHeader = ({ note, index }) => {
  const { setShowDeleteModal, setSelectedNote } = useContext(NoteContext);

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
