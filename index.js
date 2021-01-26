import dotenv from 'dotenv';

console.log("Let's check the weather on Mars!");
// https://api.nasa.gov/

const apiKey = process.env.NASA_API_KEY;
const baseUrl = 'https://api.nasa.gov';
const marsWeatherUrl = `${baseUrl}/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

const martianWeather = fetch(marsWeatherUrl, {
    method: 'GET',
    redirect: 'follow'
});

console.log(martianWeather);
// why didn't we get stuff? Mark Watney needs to know if there's a storm!

martianWeather
    .then(response => response.json())
    .then(result => {
        console.log(result['765'])
    })
    .catch(error => console.log(error));

/**


https://caniuse.com/fetch



 */