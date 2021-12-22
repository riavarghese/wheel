import React from "react";

import { Typography } from "neetoui/v2";

const Body = ({ children }) => {
  return (
    <Typography style="body2" className="neeto-ui-text-gray-500">
      {children}
    </Typography>
  );
};

export default Body;
