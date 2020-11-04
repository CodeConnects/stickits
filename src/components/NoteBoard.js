import React from 'react';
import StickyNote from './StickyNote';
import NewButton from './buttons/NewButton';
import SaveButton from './buttons/SaveButton';
import ClearButton from './buttons/ClearButton';
import DeleteButton from './buttons/DeleteButton';
import LoadButton from './buttons/LoadButton';

class NoteBoard extends React.Component {

    constructor() {
        super();
    };

    render() {
        return (

            <section id="note-board" className="sticky-wrap">

                <SaveButton id="save-btn" className="dash-btn" text="Save Board" />
                <ClearButton id="clear-btn" className="dash-btn" text="Clear All" />
                <DeleteButton id="delete-btn" className="dash-btn" text="Delete All" />
                <LoadButton id="load-btn" className="dash-btn" text="Load Board" />

                <NewButton />

                <div id="sticky-notes"><StickyNote /></div>
            
            </section>
        );
    }
}

export default NoteBoard;