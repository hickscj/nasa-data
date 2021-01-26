
const apiKey = process.env.NASA_API_KEY;
const baseUrl = 'https://api.nasa.gov';
const marsWeatherUrl = `${baseUrl}/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(xhr.responseText));
    }
}


xhr.open("GET", marsWeatherUrl);

xhr.send();
