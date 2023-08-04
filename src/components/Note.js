import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({notes,onDelete}) {
  const renderedNotes=notes.map((note)=>{
    const handleClick=()=>{
      onDelete(note.id);
    }
    return(
      <div className="note" key={note.id}>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    )
  })
  return (
    <div>
     {renderedNotes}
    </div>
  );
}

export default Note;
