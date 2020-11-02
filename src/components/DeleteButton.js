import React from 'react';

const DeleteButton = ({ id, className, text }) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('delete');
    }

    return <button id={id} className={className} onClick={handleClick}>{text}</button>;
}

export default DeleteButton;
