import React from "react";

import { Settings, Plus, Search } from "neetoicons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

const Menubar = ({ isMenuBarOpen, isContactsPage }) => {
  return (
    <MenuBar
      showMenu={isMenuBarOpen}
      title={isContactsPage ? "Contacts" : "Notes"}
    >
      {isContactsPage ? (
        <>
          <MenuBar.Block label="All" count={13} active />
          <MenuBar.Block label="Archived" count={2} />
          <MenuBar.Block label="Completed" count={7} />
          <MenuBar.Block label="Phase 2" count={4} />
        </>
      ) : (
        <>
          <MenuBar.Block label="All" count={13} active />
          <MenuBar.Block label="Users" count={2} />
          <MenuBar.Block label="Leads" count={7} />
          <MenuBar.Block label="Visitors" count={4} />
        </>
      )}

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      {!isContactsPage && (
        <>
          <MenuBar.Block label="Europe" count={80} />
          <MenuBar.Block label="Middle-East" count={60} />
          <MenuBar.Block label="Asia" count={60} />
        </>
      )}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      {!isContactsPage && (
        <>
          <MenuBar.Block label="Sales" count={80} />
          <MenuBar.Block label="Finance" count={60} />
          <MenuBar.Block label="User Experience" count={60} />
        </>
      )}
    </MenuBar>
  );
};

export default Menubar;
