import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Licznik: {count}</h1>
            <button onClick={increment}>Zwiększ</button>
        </div>
    );
};

export default Counter;