const handleClick = () => {
   let city = $('input').val();

   if(city){
       fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`).then(data=>data.json()).then(cityData => {

           console.log('city: ',cityData);
       }
       );
       
   }
}

$('.searchBtn').on('click',handleClick);

