import React, { useState, useContext } from "react";

import DeleteNote from "Common/Delete";
import AppHeader from "Common/Header";
import MenuBar from "Common/Menubar";
import { DashboardContext } from "contexts/dashboard";

import { NOTES_MENUBAR_COMPONENTS } from "./constants";
import CreateNote from "./Create";
import NotesList from "./List";

const Notes = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const { setIsNewNotePaneOpen, isDeleteAlertOpen } =
    useContext(DashboardContext);

  return (
    <div className="w-full flex">
      <MenuBar
        isMenuBarOpen={isMenuBarOpen}
        menubarProps={NOTES_MENUBAR_COMPONENTS}
        title="Notes"
      />
      <div className="w-full px-8 mb-8 overflow-y-auto">
        <AppHeader
          setIsMenuBarOpen={setIsMenuBarOpen}
          isMenuBarOpen={isMenuBarOpen}
          buttonAction={() => setIsNewNotePaneOpen(true)}
        />
        <NotesList />
        <CreateNote />
        {isDeleteAlertOpen && <DeleteNote />}
      </div>
    </div>
  );
};

export default Notes;
