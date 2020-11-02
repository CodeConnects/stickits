import React from 'react';

const ClearButton = ({ id, className, text }) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('clear');
    }

    return <button id={id} className={className} onClick={handleClick}>{text}</button>;
}

export default ClearButton;
