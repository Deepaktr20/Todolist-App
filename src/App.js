import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote=(title,content)=>{
    const updated=[...notes,{
      id:Math.round(Math.random()*9999),
      title,
      content
    }]
    setNotes(updated);
  }

  const deleteNote=(id)=>{
    const updated=notes.filter((note)=>{
      return note.id!==id;
    })
    setNotes(updated);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <Note notes={notes} onDelete={deleteNote}/>
      <Footer />
    </div>
  );
}

export default App;
