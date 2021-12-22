import React from "react";

import { MenuBar } from "neetoui/v2/layouts";
import * as Yup from "yup";

import { formatNameAndRole } from "./utils";

export const RECORDS_LENGTH = 15;

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
  },
];

export const CONTACTS = [
  {
    name_role: formatNameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: formatNameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: formatNameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: formatNameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: formatNameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: formatNameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: formatNameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: formatNameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
];

export const FORM_ROLE_DROPDOWN = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "User",
    value: "user",
  },
  {
    label: "Administrator",
    value: "administrator",
  },
];

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const CONTACT_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

export const CONTACT_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Email should be valid")
    .required("Email address is required"),
  role: Yup.object().required("Role is required"),
});

export const CONTACTS_MENUBAR_COMPONENTS = {
  allBlock: (
    <>
      <MenuBar.Block label="All" count={13} active />
      <MenuBar.Block label="Archived" count={2} />
      <MenuBar.Block label="Completed" count={7} />
      <MenuBar.Block label="Phase 2" count={4} />
    </>
  ),
  segmentsBlock: null,
  tagsBlock: null,
};
