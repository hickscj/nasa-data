
console.log("Let's check the weather on Mars!");
// https://api.nasa.gov/

const apiKey = process.env.NASA_API_KEY;
const baseUrl = 'https://api.nasa.gov';
const marsWeatherUrl = `${baseUrl}/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;



const getMartianWeather = fetch(marsWeatherUrl, {
    method: 'GET',
    redirect: 'follow'
});

const p = new Promise( (resolve, reject) => {
    setTimeout(resolve('yay promise'), 2000);
});

p.then( (res) => {
    console.log(res);
});

console.log(getMartianWeather);
// why didn't we get stuff? Mark Watney needs to know if there's a storm!

getMartianWeather
    .then(response => response.json())
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error));

/**


https://caniuse.com/fetch

Mark Watney's journey:
https://trek.nasa.gov/mars/#v=0.1&x=-5.650409457092962&y=7.059268445186461&z=3&p=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A104905&d=&l=MC11E_HRMOSCO_COL%2Ctrue%2C1&l=ESP_040776_2115_RED_A_01_ORTHO%2Ctrue%2C1&l=ESP_042647_1760_RED_B_01_ORTHO%2Ctrue%2C1&l=ESP_042252_1930_RED_B_01_ORTHO%2Ctrue%2C1&l=InSightCTXMosaic_112917%2Ctrue%2C1&l=curiosity_hirise_mosaic%2Ctrue%2C1&locale=&b=mars&e=-47.22267430662194%2C-35.9631916897912%2C35.921855392436015%2C50.081728580164125&sfz=&w=

 */