import React from 'react';

const LoadButton = props => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('load');
    }

    return <button id={props.id} className={props.className} onClick={handleClick}>{props.text}</button>;
}

export default LoadButton;
