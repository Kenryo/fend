/* Global Variables */
const apiKey = '8e345af017f260f0b8f8c87f5f59aac4';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getWeatherData = async ( baseURL = '' ) => {
    // For temperature in Fahrenheit
    const url = baseURL + ',US&units=imperial&appid=' + apiKey;

    const response = await fetch (url);

    const weather = await response.json();
    if (response.status !== 200) {
        throw new Error("Zipcode may be invalid!")
    }
    return weather;
};


const generate = () => {
    
    const zipcode = document.getElementById('zip').value;
    console.log(zipcode)
    
    const feelings = document.getElementById('feelings').value;
    console.log(feelings);
    
    const weatherData = getWeatherData("https://api.openweathermap.org/data/2.5/weather?zip="+zipcode)
    
    .then ((weatherData) => {
        console.log(weatherData);

    })

};

document.getElementById('generate').addEventListener("click", generate);

