import React, { useState } from "react";

import { Toastr } from "neetoui/v2";
import { Sidebar } from "neetoui/v2/layouts";
import { useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

import {
  APP_NAME,
  SIDENAV_LINKS,
  IMAGE_URL,
  USER_EMAIL,
  USER_NAME,
} from "./constants";

const Sidenav = () => {
  const history = useHistory();
  const authDispatch = useAuthDispatch();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  const dropdownProps = [
    {
      label: "My Profile",
      onClick: () => history.push("/my/profile"),
    },
    {
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <Sidebar
      isCollapsed={isSidebarCollapsed}
      navLinks={SIDENAV_LINKS}
      appName={APP_NAME}
      profileInfo={{
        name: USER_NAME,
        imageUrl: IMAGE_URL,
        email: USER_EMAIL,
        dropdownProps,
      }}
      onCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      changelogProps={{ id: "neetochangelog-trigger" }}
    />
  );
};

export default Sidenav;
