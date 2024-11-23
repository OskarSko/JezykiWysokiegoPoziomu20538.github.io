import React, {useState} from 'react';

const HandleMouseOver = () => {
    const [text, setText] = useState('Najedź na mnie');
    const HandleMouseOver = () => {
        setText('Dziekuje za najechanie');
    };
    return (
        <h3 onMouseOver={HandleMouseOver}>{text}</h3>
    );
};

export default HandleMouseOver;