const renderlistLoc = document.querySelector('#location-content');
// const choiceInfo = require('../seeds/locationData') // for getting the latitude and longitude from local json file
// renderlist.onload(locationHandler);

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
    // let longitude; 
    // let latitude;

    // Get the search params out of the URL (i.e. `https://rapidapi.com/apidojo/api/travel-advisor/`) and convert it to an array (i.e. ['api','travel-advisor'])
    var searchParamsArr = window.location.href.split('/');
    // console.log(searchParamsArr);

    // Get the query values which should be a city name or a team name like "manchester"
    var cityname = searchParamsArr.pop();
    // console.log(cityname);

    // fetch the query data from another api
    getlatiandlongi(cityname);

    async function getlatiandlongi(cityname) {
      const apikey = "7e0dfeaa5d115777441ab4aec1f884c9";
      let currentweatherapi = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${apikey}`;
      await fetch(currentweatherapi)
      .then((response) => {
        if (response.ok) {
          response.json().then((res) => {
            console.log(res);
            // let latitude = res.coord.lat;
            // let longitude = res.coord.lon;
            let resUrl = `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${res.coord.lat}&longitude=${res.coord.lon}&limit=20`;
            // console.log(resUrl);
            getLocationDetail(resUrl);
          })
        }
      })
    }
    // console.log(resUrl);
    // let resUrl = `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${latitude}&longitude=${longitude}&limit=20`


    async function getLocationDetail(resUrl) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': 'f2dc68c90dmshfff5709a189b0cfp1a99ccjsn1f812c24401a'
        }
      };

      await fetch(resUrl, options)
      .then(response => response.json())
      .then((jsonfile) => {
        renderCard(jsonfile);
      })
      .catch(err => console.log(err));

      function renderCard(jsonfile) {
        console.log(jsonfile);
        renderlistLoc.innerHTML = ''; //nullify any previous content
        for (var i = 0; i < jsonfile.data.length; i++) { //could load more by using jsonfile.data.length
          if(jsonfile.data[i].photo) { // only show restaurants that have got photo
            try {
              printResResults(jsonfile.data[i]);
              } catch (error) {
                console.log(error);
              }
            }
          }
          
      }
      
      function printResResults(stringInfo) {
        renderlistLoc.innerHTML += `
          <div class="col">
            <div class="card">
              <img src="${stringInfo.photo.images.medium.url}" alt="${stringInfo.name} image">
              <h5>${stringInfo.name}</h5>
              <p>Rating: ${stringInfo.rating}</p>
            </div>
          </div>`
      }
    }
  }
}

window.addEventListener("load", locationHandler)
// locationHandler();
// window.onload(locationHandler)




const reviewPostHandler = async (event) => {
  event.preventDefault();

  let searchParamsArr = window.location.href.split('/');
  // console.log(searchParamsArr);
  let location_id = parseInt(searchParamsArr.at(-2));
  console.log(location_id);

  function getChoice() {
    const ratingList = document.querySelector('#ratingList');
    console.log(ratingList);
    for (let i = 0; i < 10; i=i+2) {
      let ratingSelected = ratingList.children[i];
      if (ratingSelected.checked) {
        // console.log(ratingSelected);
        return ratingSelected.value;
      }
    }
  }
  let review_score = getChoice();
  // console.log(typeof review_score);

  let content = document.querySelector('#newReview').value.trim();

  if (location_id && review_score && content) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/location-review', {
      method: 'POST',
      body: JSON.stringify({ location_id, review_score, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.reload();
      console.log(response);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#reviewBtn')
  .addEventListener('click', reviewPostHandler);