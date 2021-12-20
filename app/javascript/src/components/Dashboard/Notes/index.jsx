import React, { useState } from "react";

import { Button } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import { SEARCH_PLACEHOLDER } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NoteList from "./List";
import NewNotePane from "./Pane/CreateNote";

import Menubar from "../../Common/Menubar";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

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
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </div>
    </div>
  );
};

export default Notes;
