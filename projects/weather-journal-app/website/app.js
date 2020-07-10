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

const postData = async ( path = '', data = {} ) => {
    const response = await fetch (path, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
};

const updateUI = async () => {
    const request = await fetch ('/data');
    
    try {
        const data = await request.json();
        document.getElementById('content').innerText = (data.response);
        document.getElementById('date').innerText = data.date;
        document.getElementById('temp').innerText = data.temperature;
    }catch(error){
        window.alert(error.message);
    }
};

const generate = () => {
    
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    
    const weatherData = getWeatherData("https://api.openweathermap.org/data/2.5/weather?zip="+zipcode)
    
    .then ((weatherData) => {

        const data = {
            temperature: weatherData.main["temp"],
            date: newDate,
            response: feelings
        };

        postData('/add', data)
        .then (
            updateUI()
        )
    })
    .catch((error) => {
        window.alert(error.message);
    })

};

document.getElementById('generate').addEventListener("click", generate);
