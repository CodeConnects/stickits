import React from 'react';

const NewButton = ({ id, className, text }) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('new');
    }

    return <button id={id} className={className} onClick={handleClick}>{text}</button>;
}

export default NewButton;
