import React from "react";

import EmptyState from "components/Common/EmptyState";

import Note from "./Note";

import { SAMPLE_NOTES } from "../constants";

export default function NoteList() {
  const isNotesNotEmpty = !!SAMPLE_NOTES.length;
  return (
    <div className="w-full notes-table-height">
      {isNotesNotEmpty ? (
        SAMPLE_NOTES.map((note, index) => (
          <Note key={index} note={note} index={index} />
        ))
      ) : (
        <EmptyState
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryActionLabel="Add New Note"
        />
      )}
    </div>
  );
}
