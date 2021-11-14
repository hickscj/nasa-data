
const apiKey = process.env.NASA_API_KEY;
const baseUrl = 'https://api.nasa.gov';
const marsWeatherUrl = `${baseUrl}/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;


let xhr = new XMLHttpRequest();
xhr.open('GET', marsWeatherUrl);


// request state change event
xhr.onreadystatechange = function() {

  // request completed?
  if (xhr.readyState !== 4) return;

  if (xhr.status === 200) {
    // request successful - show response
    console.log(xhr.responseText);
  }
  else {
    // request error
    console.log('HTTP error', xhr.status, xhr.statusText);
  }
};

// start request
xhr.send();

