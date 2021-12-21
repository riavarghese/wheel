import { nameAndRole } from "./utils";

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
    name_role: nameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole({ name: "Ronald Richards", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
  {
    name_role: nameAndRole({ name: "Jacob Jones", role: "Owner" }),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
  },
];

export const RECORDS_LENGTH = 15;

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
