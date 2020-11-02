import React from 'react';

const NewButton = props => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('new');
    }

    return <button id={props.id} className={props.className} onClick={handleClick}>{props.text}</button>;
}

export default NewButton;
