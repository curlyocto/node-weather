const request = require('request');
const argv = require('yargs').argv;

let apiKey = '8c8b989a521dacc706c27e96f0806d92';
let city = argv.c || 'oklahoma city';
let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;





request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else{
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
        //console.log('body', body);
    }
});


