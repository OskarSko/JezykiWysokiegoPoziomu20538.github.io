import React, {useState } from 'react';

const ShowImage = () => {
    const [imageVisible, setImageVisible] = useState(false);
    const showImage = () => {
        setImageVisible(true);
    };

    return (
        <div>
            <button onClick={showImage}>Pokaż obraz</button>
            {imageVisible && (
                <img 
                src="/my-photo.jpg" alt="Moje zdjecie"
                style={{ width: '300px', height: 'auto', marginTop: '10px' }} 
                />
            )}
        </div>
    );
};

export default ShowImage;