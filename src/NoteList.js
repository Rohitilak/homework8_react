// src/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} {...note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
