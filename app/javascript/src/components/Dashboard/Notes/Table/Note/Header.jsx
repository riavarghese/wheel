import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "@bigbinary/neetoui/v2";

const NoteHeader = ({ note }) => {
  return (
    <div className="flex justify-between items-center">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown icon={MenuVertical} buttonStyle="text" position="bottom-end">
        <li>Edit</li>
        <li>Delete</li>
      </Dropdown>
    </div>
  );
};

export default NoteHeader;
