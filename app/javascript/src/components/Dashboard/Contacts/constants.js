import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown, Avatar, Typography } from "@bigbinary/neetoui/v2";

const nameAndRole = name => {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar size="medium" user={{ name }} />
      <div>
        <Typography style="h5" className="text-gray-800">
          {name}
        </Typography>
        <Typography style="body3">Owner</Typography>
      </div>
    </div>
  );
};

export const COLUMNS = [
  {
    dataIndex: "name_role",
    key: "name_role",
    title: "NAME & ROLE",
  },
  {
    dataIndex: "email",
    key: "email",
    title: "EMAIL",
  },
  {
    dataIndex: "created_at",
    key: "created_at",
    title: "CREATED AT",
  },
  {
    dataIndex: "options",
    key: "options",
    render: () => (
      <Dropdown icon={MenuHorizontal} buttonStyle="text">
        <li>Edit</li>
        <li>Delete</li>
      </Dropdown>
    ),
  },
];
export const CONTACTS = [
  {
    name_role: nameAndRole("Ronald Richards"),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole("Jacob Jones"),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
];

export const RECORDS_LENGTH = 15;
