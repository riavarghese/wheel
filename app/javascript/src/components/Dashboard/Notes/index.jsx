import React, { useState, useContext } from "react";

import DeleteModal from "components/Common/DeleteModal";
import AppHeader from "components/Common/Header";
import Menubar from "components/Common/Menubar";
import { DashboardContext } from "contexts/dashboard";

import NoteList from "./List";
import NewNotePane from "./Pane/CreateNote";

const Notes = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowNewNotePane, showDeleteModal } = useContext(DashboardContext);

  return (
    <div className="w-full flex">
      <Menubar showMenu={showMenu} />
      <div className="w-full px-8 mb-8 overflow-y-auto">
        <AppHeader
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          buttonAction={() => setShowNewNotePane(true)}
        />
        <NoteList />
        <NewNotePane />
        {showDeleteModal && <DeleteModal />}
      </div>
    </div>
  );
};

export default Notes;
