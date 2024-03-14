// src/components/AddNoteForm.js
import React, { useState } from 'react';
import './App.css';

const AddNoteForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} id="forms">
      <input
        type="text"
        placeholder="Enter your note"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="input"
      />
      <button type="submit" id="btn">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
