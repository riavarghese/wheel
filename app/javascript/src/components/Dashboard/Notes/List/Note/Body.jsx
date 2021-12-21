import React from "react";

import { Typography } from "neetoui/v2";

const NoteBody = ({ note }) => {
  return (
    <Typography style="body2" className="neeto-ui-text-gray-500">
      {note.description}
    </Typography>
  );
};

export default NoteBody;
