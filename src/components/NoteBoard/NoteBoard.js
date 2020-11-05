import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button/Button.js';
import StickyNote from '../StickyNote/StickyNote.js';

//require("downloadjs")(data, strFileName, strMimeType);

//const allNotes = [];

const NoteBoard = () => {
    const [list, setList] = React.useState([])

    // methods to work with the notes
    function newNote() {
        console.log("make a new sticky on this noteboard");
        const newList = list.concat({ title: 'first new', body: 'first body', id: uuidv4() });
        setList(newList);
    }
    function saveNotes() {
        console.log("save this noteboard");
        //download("hello world", "react-text.txt", "text/plain");
    }
    function clearNotes() {
        console.log("clear all stickies on this noteboard");
    }

    function deleteNotes() {
        console.log("delete all stickies on this noteboard");
    }

    function loadNotes () {
        console.log("load a saved noteboard");
    }

    return (

        <section id="note-board" className="sticky-wrap">

            <Button onClick={newNote} id="new-btn" className="dash-btn" text="New Sticky" />
            <Button onClick={saveNotes} id="save-btn" className="dash-btn" text="Save Board" />
            <Button onClick={clearNotes} id="clear-btn" className="dash-btn" text="Clear All" />
            <Button onClick={deleteNotes} id="delete-btn" className="dash-btn" text="Delete All" />
            <Button onClick={loadNotes} id="load-btn" className="dash-btn" text="Load Board" />

            <div id="sticky-notes">
                {
                    list.map(note => (
                        <StickyNote key={note.id} title={note.title} body={note.body} />
                    ))
                }
            </div>
        
        </section>
    );
}

export default NoteBoard;