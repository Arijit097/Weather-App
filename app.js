
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi={
    
    key:"66a65c54d655f61f9b6497193a638730",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}


const searchInputBox = document.getElementById('input_box');

//EVENT LISTENER FUNCTION ON KEYPRESS
searchInputBox.addEventListener('keypress', (event)=>{

    if(event.keyCode == 13)
    {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather_body').style.display = "block";
    }
});

//GET WEATHER REPORT
function getWeatherReport(city){
    fetch(`${WeatherApi.baseurl}?q=${city}&appid=${weatherApi.key}`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport);
}

//SHOW WEATHER REPORT

function showWeatherReport(){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

   let temperature = document.getElementById('temp');
   temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

   let min_max_temp=document.getElementById('min-max');
   min_max_temp.innerHTML=`${Math.floor(weather.main.temp_min)}$deg;C (min)/ ${Math.ceil(weather.main.temp_max)}$deg;C (max)` ;

   let weather_type = document.getElementById('weather');
   weather_type.innerText= `${weather.weather[0].main}`;

   let date = document.getElementById('date');
   let todayDate = new Date();
   date.innerText = dateManage(todayDate);

   if(weather_type.textContent=='Clear')
   {
       document.body.style.backgroundImage = "url('images/sunny(2).jpg')";
   }
   else if(weather_type.textContent == 'Clouds')
   {
       document.body.style.backgroundImage = "url('images/cloudy.jpg')";
   }
   else if(weather_type.textContent == 'Haze')
   {
       document.body.style.backgroundImage = "url('images/cloudy.jpg')";
   }
   else if(weather_type.textContent == 'Rainy')
   {
       document.body.style.backgroundImage = "url('images/rainy.jpg')";
   }
   else if(weather_type.textContent == 'Snow')
   {
       document.body.style.backgroundImage = "url('images/snow.jpg')";
   }
   else if(weather_type.textContent == 'Thunderstorm')
   {
       document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
   }
}

//DATE MANAGE
function dateManage(dateArg){

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];


    return `${date} ${month} (${day}), ${year}`;

}
