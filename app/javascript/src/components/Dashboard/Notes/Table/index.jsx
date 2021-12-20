import React, { useState } from "react";

import Note from "./Note";

import { SAMPLE_NOTES } from "../constants";
import EditNotePane from "../Pane/EditNote";

export default function NoteTable() {
  const [showEditNote, setShowEditNote] = useState(false);
  return (
    <>
      <div className="w-full notes-table-height">
        {SAMPLE_NOTES.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
      <EditNotePane showPane={showEditNote} setShowPane={setShowEditNote} />
    </>
  );
}
