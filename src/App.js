import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Components/NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),                         
      text: "This is my first note",
      date: "25/01/2023"
    },

    {
      id: nanoid(),                         
      text: "This is my second note",
      date: "26/01/2023"
    },

    {
      id: nanoid(),                         
      text: "This is my third note",
      date: "27/01/2023"
    },

    {
      id: nanoid(),                         
      text: "This is my new note",
      date: "06/02/2023"
    }
  ]);

  return (
    <div className='container'>
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;