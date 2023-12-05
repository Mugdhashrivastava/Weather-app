const apiKey = `717745c23b06b42e993e88bb1c7ff766`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
  
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`717745c23b06b42e993e88bb1c7ff766`}`;


async function getWeatherByLocation(city){
     
         const resp = await fetch(url(city));
         const respData = await resp.json();
         console.log(respData)
     
           addWeatherToPage(respData);
          
     }

      function addWeatherToPage(data){
          const temp = Ktoc(data.main.temp);
          const max = Ktoc(data.main.temp_max);
          const min = Ktoc(data.main.temp_min);
          


          const weather = document.createElement('div')
          weather.classList.add('weather');

          weather.innerHTML = `
          <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
          <small>${data.weather[0].main}</h1ß>
          <small>  Min :${min} °C </small>
          <small>Max : ${max}°C </small>
          
          `;


      
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function Ktoc(K){
         return Math.floor(K - 273.15);
     }



     form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const city = search.value;
 
        if(city){
            getWeatherByLocation(city)
        }

     });