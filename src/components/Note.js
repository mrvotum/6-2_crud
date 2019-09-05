import React from 'react';

export default function Note({ note, delNote }) {
  return (
    <div className='note-container'>
      <div className='deleteBtn' onClick={() => delNote(note.id)}>&times;</div>
      <div className='note'>{note.content}</div>
    </div>
  );
}
