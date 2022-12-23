import React from "react";

const Sidebar = (props) => {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">Note {index + 1}</h4>
      </div>
    </div>
  ));
  return (
    <section className="sidebar">
      <div className="sidebar--top">
        <h2>Notes</h2>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      <div></div>
    </section>
  );
};

export default Sidebar;
