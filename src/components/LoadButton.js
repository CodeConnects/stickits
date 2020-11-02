import React from 'react';

const LoadButton = ({ id, className, text }) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('load');
    }

    return <button id={id} className={className} onClick={handleClick}>{text}</button>;
}

export default LoadButton;
