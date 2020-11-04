import React from 'react';
/*
import StickyNote from './StickyNote';
import NewButton from './buttons/NewButton';
import SaveButton from './buttons/SaveButton';
import ClearButton from './buttons/ClearButton';
import DeleteButton from './buttons/DeleteButton';
import LoadButton from './buttons/LoadButton';
*/
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

                <button onClick={this.saveNotes} id="save-btn" className="dash-btn">Save Board</button>

                <button onClick={this.clearNotes} id="clear-btn" className="dash-btn">Clear All</button>

                <button onClick={this.deleteNotes} id="delete-btn" className="dash-btn">Delete All</button>

                <button onClick={this.loadNotes} id="load-btn" className="dash-btn">Load Board</button>

                <button onClick={this.newNote} id="new-btn" className="dash-btn">New Sticky</button>

                <div id="sticky-notes"></div>
            
            </section>
        );
    }
}

export default NoteBoard;