import React from 'react';

const StickyNote = props => {

    // set a unique div ID for css
    let stickID = "sticky-note-"+props.count;
    
    return (
        
        <div id={stickID} className="sticky-note">
            <h2 className="sticky-title">{props.title}</h2>
            <div className="sticky-body">{props.body}</div>
        </div>
    );
}

export default StickyNote;
