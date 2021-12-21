import { Text, UserCircle, Settings } from "neetoicons";

export const APP_NAME = "Notes";

export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Text,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
  },
];

export const IMAGE_URL = "https://randomuser.me/api/portraits/women/90.jpg";
export const USER_EMAIL = "oliver.smith@gmail.com";
export const USER_NAME = "Oliver Smith";
