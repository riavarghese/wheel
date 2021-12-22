import React, { useContext } from "react";

import { Clock } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip } from "neetoui/v2";

import { NoteContext } from "components/Dashboard/Notes/List/Card";

const NoteFooter = () => {
  const { note } = useContext(NoteContext);

  return (
    <div className="flex justify-between items-center pt-4">
      <Tag color="gray" label={note.label} size="small" />
      <div className="flex items-center gap-x-2">
        <Clock size={15} />
        <Tooltip
          content={note.time}
          followCursor="horizontal"
          position="bottom"
        >
          <Typography style="body3">{note.created}</Typography>
        </Tooltip>
        <Avatar size="small" user={{ imageUrl: note.imageUrl }} />
      </div>
    </div>
  );
};

export default NoteFooter;
