const searchBar = () => {
   let city = $('input').val();

   if(city){
       fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`).then(data=>data.json()).then(cityData => {
            const { lat, lon } = cityData[0];

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`).then(data=>data.json()).then(({current,daily})=>{

            c = current;
            d = daily;

            let uv = current.uvi;
            let forecastDiv = document.querySelector('.forecast');


            document.querySelector('.current').innerHTML = `
                <div>
                    <h2>${city} ${moment(current.dt*1000).format('L')} 
                        <img src = "http://openweathermap.org/img/w/${current.weather[0].icon}.png"
                    </h2>
                    <h6>Temp: ${current.temp} F</h6>
                    <h6>Wind: ${current.wind_speed} MPH</h6>
                    <h6>Humidity: ${current.humidity} %</h6>
                    <h6>UV Index: <span class="${uv<4 ? 'green' : uv<8 ? 'yellow' : 'red'}"> ${uv} </span></h6>
                </div>
            `;

            forecastDiv.innerHTML = '';
            
            daily.forEach((day,i) => {
                if(i>4) return;
                
                forecastDiv.innerHTML += `
                    <div class="card">
                        <h4>${moment(day.dt*1000).format('L')} 
                            <img src = "http://openweathermap.org/img/w/${day.weather[0].icon}.png"
                        </h4>
                        <h6>Temp: ${day.temp.max} F</h6>
                        <h6>Wind: ${day.wind_speed} MPH</h6>
                        <h6>Humidity: ${day.humidity} %</h6>
                    </div>
                `;
                if(i>0) return;
                document.querySelector('.search-history').innerHTML += `
                <div>
                <button class="searchBtn" onClick="saveSearch()">${city}</button>
                </div>
                `;
                // console.log(forecastDiv);
            });
        })
       }
       );
   }
};

$('.searchBtn').on('click', searchBar);

let city = eval(localStorage.cities) || [];

const displaySearch = () => {
    city.forEach((item, i) => {
        $('button').eq(i).val(item);
    });
};

displaySearch();

const saveSearch = () => {
    city = (searchBar);
    cities.forEach((city,i) => {
        city.push($('button').eq(i).val())
    });
    localStorage.cities = JSON.stringify(city);
    console.log("city");
};

// const init = async () => {
//     let searchHistory = searchBar();

//     const searchHistory = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}')
//         .then(data => data.json())
//         .then(data => Object.keys(cityData));
//     cities.forEach(city => {
//         $('#theValue').append($('<option>', { text: city }));
//     });
//     searchBar();
// };
// init();
// const saveSearch = () => {
    //     city = (searchBar);
    //     cities.forEach((city,i) => {
        //         city.push($('button').eq(i).val())
        //     });
        //     localStorage.cities = JSON.stringify(city);
        //     console.log("city");
        // };
        
        // const searchHistory = () => {
            //     let city = (searchBar);
            
            //     document.querySelector('.search-history').innerHTML += `
            //     <div>
//     <button class="searchBtn" onClick="saveSearch()">${city}</button>
//     </div>
//     `;
//     console.log(searchHistory);
// };

// $('.search-history').on('click', searchHistory)


// const searchHistory = () => {
    //     city.forEach((item,i) => {
        //         $("search-history").eq(i).val(item);
//         console.log("searchHistory");
//     });
// };

// searchHistory();


// const searchButton = () => {
//     let cityData = document.createElement("button");
//     city.textContent = cityName;
//     city.classList.add("search-history");
//     cityList.append(cityData);
// }

// let search = eval(localStorage) || [];


// const saveSearch = () => {
//     populate = JSON.parse(localStorage.getItem("input"));

//     if (populate !== null) {
//         for (i = 0; i < populate.length; i++) {
//             displaySearch = populate[i];
//             saveSearch(displaySearch);
//         }
//     }
// }

// const searchHistory = () => {
//     history = [];
//     history.push(city);

//     $.each(city, function (index, value) {
//         const p = document.createElement("p");
//         p.innerHTML = value;
//     })
// }
