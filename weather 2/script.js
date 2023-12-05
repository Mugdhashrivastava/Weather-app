var cityname=document.getElementById("city")

async function apicall(){
    let apiweather=await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname.value + '&appid=717745c23b06b42e993e88bb1c7ff766')
    apiweather=await apiweather.json();
    console.log(apiweather);

    var t = Ktoc(apiweather.main.temp)
    temp.innerHTML = `Temperature: ${t}°C`;

    var max = Ktoc(apiweather.main.temp_max);
    maximum.innerHTML = `Maximum temperature: ${max}°C`;

    var min = Ktoc(apiweather.main.temp_min);
    minimum.innerHTML = `Minimum temperature: ${min}°C`;


 var nation = apiweather.sys.country;
 countrycode.innerHTML = `Country Code :${nation}`


 var condition = apiweather.weather[0].description

 desc.innerHTML = `Condition: ${condition}`
}




var temp = document.getElementById("printtemp");
var maximum = document.getElementById("maximumT");
var minimum = document.getElementById("minimumT");
var countrycode = document.getElementById("printcountry");
var desc = document.getElementById("condition");





function Ktoc(K){
    return Math.floor(K - 273.15);
}



