import React, { useState } from 'react';

const HandleClick = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <div>
            <h3>Licznik: {counter}</h3>
            <button onClick={handleClick}>Kliknij mnie</button>
        </div>
    );
};

export default HandleClick;