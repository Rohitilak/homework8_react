// src/components/Note.js
import React from 'react';

const Note = ({ id, text, onDelete }) => {
  return (
    <div className="note">
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Note;
