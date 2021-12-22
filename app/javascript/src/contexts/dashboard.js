import React, { useState } from "react";

/* eslint-disable import/exports-last */
export const DashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState();
  const [selectedContact, setSelectedContact] = useState();
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        selectedNote,
        setSelectedNote,
        isNewNotePaneOpen,
        setIsNewNotePaneOpen,
        isNewContactPaneOpen,
        setIsNewContactPaneOpen,
        selectedContact,
        setSelectedContact,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider };
