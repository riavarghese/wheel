import React, { useState } from "react";

/* eslint-disable import/exports-last */
export const NoteContext = React.createContext();

const NoteProvider = ({ children }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState();
  const [showNewNotePane, setShowNewNotePane] = useState(false);

  return (
    <NoteContext.Provider
      value={{
        showDeleteModal,
        setShowDeleteModal,
        selectedNote,
        setSelectedNote,
        showNewNotePane,
        setShowNewNotePane,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { NoteProvider };
