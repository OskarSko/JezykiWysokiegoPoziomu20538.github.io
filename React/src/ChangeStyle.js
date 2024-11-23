import React, { useState } from 'react';

const ChangeStyle = () => {
    const [style, setStyle] = useState({
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
    });

    const changeStyle = () => {
        setStyle(prevStyle => ({
            ...prevStyle,
            backgroundColor: 'green',
        }));
    };

    return (
        <div>
            <p style={style}>Zmień mój styl!</p>
            <button onClick={changeStyle}>Kliknij</button>
        </div>
    );
};

export default ChangeStyle;
