import React, { useState, useEffect } from 'react';

const Apod = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const apiKey = process.env.NASA_API_KEY;
    const dataUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    useEffect(() => {
        // this.waiter()
        fetch(dataUrl)
            .then(res => res.json())
            .then(res => {
                setIsLoaded(true);
                setItems(res);
                console.log(res);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    return (
        <div id="apod-image">
            <img className="apod" src={items.url} />
        </div>
    );
}

export default Apod;
