import React, { useContext } from "react";

import { Typography } from "neetoui/v2";

import { NoteContext } from "components/Dashboard/Notes/List/Card";

const NoteBody = () => {
  const { note } = useContext(NoteContext);

  return (
    <Typography style="body2" className="neeto-ui-text-gray-500">
      {note.description}
    </Typography>
  );
};

export default NoteBody;
