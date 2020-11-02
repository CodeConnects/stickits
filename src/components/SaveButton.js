import React from 'react';

const SaveButton = ({ id, className, text }) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('save');
    }

    return <button id={id} className={className} onClick={handleClick}>{text}</button>;
}

export default SaveButton;
