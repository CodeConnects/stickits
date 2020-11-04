import React from 'react';

const SaveButton = props => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('save');
    }

    console.log(props);

    return <button id={props.id} className={props.className} onClick={handleClick}>{props.text}</button>;
}

export default SaveButton;
