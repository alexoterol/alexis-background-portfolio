import React, { useState, useEffect } from 'react';
import './SpaceAesthetic.css';

function SpaceAesthetic({ imageNames }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadedImages = imageNames.map((imageName) => {
            try {
                return new URL(`../assets/images/SpaceAestheticImages/${imageName}`, import.meta.url).href;
            } catch (error) {
                console.error(`Error en la ruta: ${imageName}`, error);
                return null;
            }
        });
        
        setImages(loadedImages);
    }, [imageNames]);

    return (
        <div className="space-aesthetic">
            {images.map((imgUrl, index) => 
                imgUrl ? (
                    <img
                        key={index}
                        src={imgUrl}
                        alt={`Aesthetic ${index}`}
                        className="space-aesthetic-image"
                    />
                ) : null
            )}
        </div>
    );
}

export default SpaceAesthetic;