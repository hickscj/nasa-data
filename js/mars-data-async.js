/**
 * with Async Await
 */

console.log("Let's check the weather on Mars!");
// https://api.nasa.gov/

const apiKey = process.env.NASA_API_KEY;
const baseUrl = 'https://api.nasa.gov';
const marsWeatherUrl = `${baseUrl}/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;
const options = {
    method: 'GET',
    redirect: 'follow'
};

async function getMartianWeather() {
    console.log('getting weather data...');
    const data = await fetch(marsWeatherUrl, options);

    console.log('got it! >>>');

    const json = await data.json();
    console.log(json);
}

getMartianWeather();

// const getMartianWeather = fetch(marsWeatherUrl, options);

// console.log(getMartianWeather);
// why didn't we get stuff? Mark Watney needs to know if there's a storm!

// getMartianWeather
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error));
