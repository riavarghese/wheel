import React from "react";

import NoteBody from "./Body";
import NoteFooter from "./Footer";
import NoteHeader from "./Header";

const Note = ({ note }) => {
  return (
    <div className="border border-gray-300 p-4 shadow-sm mb-4 rounded-sm">
      <div className="border-b pb-2">
        <NoteHeader note={note} />
        <NoteBody note={note} />
      </div>
      <NoteFooter note={note} />
    </div>
  );
};

export default Note;
