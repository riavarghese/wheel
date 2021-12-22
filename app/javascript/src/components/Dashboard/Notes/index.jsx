import React, { useState, useContext } from "react";

import DeleteNote from "Common/Delete";
import AppHeader from "Common/Header";
import MenuBar from "Common/Menubar";
import { DashboardContext } from "contexts/dashboard";

import CreateNote from "./Create";
import NoteList from "./List";

const Notes = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const { setIsNewNotePaneOpen, isDeleteModalOpen } =
    useContext(DashboardContext);

  return (
    <div className="w-full flex">
      <MenuBar isMenuBarOpen={isMenuBarOpen} />
      <div className="w-full px-8 mb-8 overflow-y-auto">
        <AppHeader
          setIsMenuBarOpen={setIsMenuBarOpen}
          isMenuBarOpen={isMenuBarOpen}
          buttonAction={() => setIsNewNotePaneOpen(true)}
        />
        <NoteList />
        <CreateNote />
        {isDeleteModalOpen && <DeleteNote />}
      </div>
    </div>
  );
};

export default Notes;
