import React from 'react';

const DeleteButton = props => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('delete');
    }

    return <button id={props.id} className={props.className} onClick={handleClick}>{props.text}</button>;
}

export default DeleteButton;
