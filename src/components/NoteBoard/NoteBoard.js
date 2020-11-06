import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button/Button.js';
import StickyNote from '../StickyNote/StickyNote.js';

//require("downloadjs")(data, strFileName, strMimeType);

const NoteBoard = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState(0);

    // methods to work with the notes
    function newNote() {
        console.log("make a new sticky on this noteboard");
        const num = (number+1);
        const newList = list.concat({ title: 'title #'+num, body: num+' body', count: num, uuid: uuidv4() });
        setList(newList);
        setNumber(num);
    }
    function deleteNotes() {
        setList([]);
        setNumber(0);
    }

    function clearNotes() {
        console.log("clear all stickies on this noteboard");

        const clearList = list.map( item => {
            item['title'] = item['body'] = ' ';
            return item;
        });

        setList(clearList);
    }

    function saveNotes() {
        console.log("save this noteboard");
        //download("hello world", "react-text.txt", "text/plain");
    }
    function loadNotes () {
        console.log("load a saved noteboard");
    }

    return (

        <section id="note-board" className="sticky-wrap">

            <Button onClick={newNote} id="new-btn" className="dash-btn" text="New Sticky" />
            <Button onClick={clearNotes} id="clear-btn" className="dash-btn" text="Clear All" />
            <Button onClick={deleteNotes} id="delete-btn" className="dash-btn" text="Delete All" />

            <span id="sticky-btn-spacer"></span>

            <Button onClick={saveNotes} id="save-btn" className="dash-btn" text="Save Board" />
            <Button onClick={loadNotes} id="load-btn" className="dash-btn" text="Load Board" />

            <div id="sticky-notes">
                {
                    list.map(note => (
                        <StickyNote key={note.uuid} title={note.title} body={note.body} count={note.count} />
                    ))
                }
            </div>
        
        </section>
    );
}

export default NoteBoard;