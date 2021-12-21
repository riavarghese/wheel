import React from "react";

import { Avatar, Typography } from "neetoui/v2";

export const formatNameAndRole = ({ name, role }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar size="medium" user={{ name }} />
      <div>
        <Typography style="h5" className="text-gray-800">
          {name}
        </Typography>
        <Typography style="body3">{role}</Typography>
      </div>
    </div>
  );
};
