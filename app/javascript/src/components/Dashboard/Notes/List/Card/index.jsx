import React from "react";

import NoteBody from "./Body";
import NoteFooter from "./Footer";
import NoteHeader from "./Header";

/* eslint-disable import/exports-last */
export const NoteContext = React.createContext();

const Card = ({ note, index }) => {
  return (
    <NoteContext.Provider value={{ note, index }}>
      <div className="border border-gray-300 p-4 shadow-sm mb-4 rounded-sm">
        <div className="border-b pb-2">
          <NoteHeader />
          <NoteBody />
        </div>
        <NoteFooter />
      </div>
    </NoteContext.Provider>
  );
};

export default Card;
