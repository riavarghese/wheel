import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Typography, Tag, Avatar, Tooltip } from "@bigbinary/neetoui/v2";

const NoteFooter = ({ note }) => {
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
