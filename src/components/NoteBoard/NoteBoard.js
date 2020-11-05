import React from 'react';
import Button from '../Button/Button.js';

class NoteBoard extends React.Component {

    /*
    constructor() {
        super();
    };
    */

    newNote() {
        console.log("make a new sticky on this noteboard");
    }
    saveNotes() {
        console.log("save this noteboard");
    }
    clearNotes() {
        console.log("clear all stickies on this noteboard");
    }
    deleteNotes() {
        console.log("delete all stickies on this noteboard");
    }
    loadNotes() {
        console.log("load a saved noteboard");
    }

    render() {
        return (

            <section id="note-board" className="sticky-wrap">

                <Button onClick={this.saveNotes} id="save-btn" className="dash-btn" text="Save Board" />

                <Button onClick={this.clearNotes} id="clear-btn" className="dash-btn" text="Clear All" />

                <Button onClick={this.deleteNotes} id="delete-btn" className="dash-btn" text="Delete All" />

                <Button onClick={this.loadNotes} id="load-btn" className="dash-btn" text="Load Board" />

                <Button onClick={this.newNote} id="new-btn" className="dash-btn" text="New Sticky" />

                <div id="sticky-notes"></div>
            
            </section>
        );
    }
}

export default NoteBoard;