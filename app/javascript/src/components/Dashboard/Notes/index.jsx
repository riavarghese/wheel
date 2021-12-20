import React, { useState, useContext } from "react";

import { Button } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import { NoteContext } from "contexts/note";

import { SEARCH_PLACEHOLDER } from "./constants";
import DeleteModal from "./DeleteModal";
import NoteList from "./List";
import NewNotePane from "./Pane/CreateNote";

import Menubar from "../../Common/Menubar";

const Notes = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const { setShowNewNotePane, showDeleteModal } = useContext(NoteContext);

  return (
    <div className="w-full flex">
      <Menubar
        showMenu={showMenu}
        isSearchCollapsed={isSearchCollapsed}
        setIsSearchCollapsed={setIsSearchCollapsed}
      />
      <div className="w-full px-8">
        <Header
          title="All Notes"
          menuBarToggle={() => setShowMenu(!showMenu)}
          searchProps={{
            placeholder: SEARCH_PLACEHOLDER,
          }}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
        />
        <NoteList />
        <NewNotePane />
        {showDeleteModal && <DeleteModal />}
      </div>
    </div>
  );
};

export default Notes;
