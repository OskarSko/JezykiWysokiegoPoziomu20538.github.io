import React, { useState } from 'react';

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const UploadFile = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div>
            <input type="file" onChange={UploadFile} />
            {file && <p>Wybrany plik: {file.name}</p>}
        </div>
    );
};

export default UploadFile;