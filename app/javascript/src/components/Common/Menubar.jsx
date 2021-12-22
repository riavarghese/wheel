import React from "react";

import { Settings, Plus, Search } from "neetoicons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

const Menubar = ({ isMenuBarOpen, menubarProps, title }) => {
  return (
    <MenuBar showMenu={isMenuBarOpen} title={title}>
      {menubarProps.allBlock}

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
      {menubarProps.segmentsBlock}
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
      {menubarProps.tagsBlock}
    </MenuBar>
  );
};

export default Menubar;
