import React, { useState, useEffect } from 'react';

const DataDisplay = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const apiKey = process.env.NASA_API_KEY;
    const marsWeatherUrl = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

    useEffect(() => {
        // this.waiter()
        fetch(marsWeatherUrl)
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
        <div id="data-display">
            <h2>Placeholder for data</h2>
            <select>
            {
                Object.keys(items).map( (val, idx) => {
                    return !isNaN(val) ? <option key={idx}>{val}</option> : null;
                })
            }
            </select>
        </div>
    );
}

export default DataDisplay;
