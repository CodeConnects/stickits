import React from 'react';

const StickyNote = props => {

    return (
        
        <div className="sticky-note">
            <h2 className="sticky-title">{props.title}</h2>
            <div className="sticky-body">{props.body}</div>
        </div>
    );
}

export default StickyNote;
