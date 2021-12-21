import React, { useState } from "react";

/* eslint-disable import/exports-last */
export const DashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState();
  const [showNewNotePane, setShowNewNotePane] = useState(false);

  return (
    <DashboardContext.Provider
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
    </DashboardContext.Provider>
  );
};

export { DashboardProvider };
