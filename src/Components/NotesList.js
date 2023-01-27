import React from 'react'
import AddNote from './AddNote';
import Notes from './Notes'

function NotesList({ notes, handleAddNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) =>
        <Notes id={note.id} text={note.text} date={note.date}/>
      )}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
}

export default NotesList;