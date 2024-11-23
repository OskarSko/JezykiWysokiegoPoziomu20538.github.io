import React, { useState } from 'react';
import jsonData from './data.json';

const LoadDataFromJson = () => {
    const [data, setData] = useState(null);

    const loadDataFromJson = () => {
        setData(jsonData);
    };

    return (
        <div>
            <button onClick={loadDataFromJson}>Załaduj dane</button>
            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
};

export default LoadDataFromJson;