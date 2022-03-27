const renderlist = document.querySelector('#result-content');
// const choiceInfo = require('../seeds/locationData') // for getting the latitude and longitude from local json file

const locationHandler = async (event) => {
  event.preventDefault();

  searchResApi();

  async function searchResApi() {

    // fetch example provided from https://rapidapi.com/apidojo/api/travel-advisor/
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'f2dc68c90dmshfff5709a189b0cfp1a99ccjsn1f812c24401a'
      }
    };

    // get the latitude and longitude
    let longitude; 
    let latitude;

    // Get the search params out of the URL (i.e. `https://rapidapi.com/apidojo/api/travel-advisor/`) and convert it to an array (i.e. ['api','travel-advisor'])
    var searchParamsArr = window.location.href.split('/');
    // console.log(searchParamsArr);

    // Get the query values which should be a city name or a team name like "manchester"
    var cityname = searchParamsArr.pop();
    // console.log(query);

    // fetch the query data from another api
    getlatiandlongi(cityname);

    async function getlatiandlongi(cityname) {
      const apikey = "7e0dfeaa5d115777441ab4aec1f884c9";
      let currentweatherapi = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${apikey}`;
      await fetch(currentweatherapi)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (response) {
            latitude = response.coord.lat;
            longitude = response.coord.lon;
          })
        }
      })
    }

    let resUrl = `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${latitude}&longitude=${longitude}&limit=20`

    await fetch(resUrl, options)
      .then(response => response.json())
      .then((jsonfile) => {
        renderCard(jsonfile);
      })
      .catch(err => console.error(err));

      function renderCard(jsonfile) {
        console.log(jsonfile)
        renderlist.innerHTML = ''; //nullify any previous content
        for (var i = 0; i < 5; i++) { //could load more by using jsonfile.data.length
          try {
          printResResults(jsonfile.data[i]);
          } catch (error) {
            console.error(error);
          }
        }
      }
  }
  function printResResults(stringInfo) {
    renderlist.innerHTML += `
    <div class="col">
      <div class="card">
        <img src="${stringInfo.photo.images.medium.url}" alt="${stringInfo.name} image">
        <h5>${stringInfo.name}</h5>
        <p>Rating: ${stringInfo.rating}</p>
      </div>
    </div>`
  }
}

window.addEventListener("load", locationHandler)