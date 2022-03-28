const renderlist = document.querySelector("#team-content");
// const choiceInfo = require('../seeds/locationData') // for getting the latitude and longitude from local json file

const teamHandler = async () => {
  // event.preventDefault();

  searchEveApi();

  async function searchEveApi() {
    // fetch example provided from https://www.football-data.org/documentation/samples
    const options = {
      method: "GET",
      headers: {
        "X-Auth-Token": "01b5dcf833cf4b5886204ec119135e93",
      },
    };

    let teamId = getTeamId(); // will figure out the way to get id by fetch this night

    function getTeamId() {
      var searchParamsArr = window.location.href.split("/");
      // console.log(searchParamsArr);

      // Get the query values which should be a city name or a team name like "manchester"
      var teamName = searchParamsArr.pop().trim().toLocaleLowerCase();
      if (teamName == "arsenal") {
        //arsenal
        return 57;
      } else if (teamName == "astonvilla") {
        return 58;
      } else if (teamName == "brentford") {
        return 402;
      } else if (teamName == "brighton") {
        return 397;
      } else if (teamName == "burnley") {
        return 328;
      } else if (teamName == "chelsea") {
        return 61;
      } else if (teamName == "crystalpalace") {
        return 354;
      } else if (teamName == "everton") {
        return 62;
      } else if (teamName == "leedsunited") {
        return 341;
      } else if (teamName == "leicestercity") {
        return 338;
      } else if (teamName == "liverpool") {
        return 64;
      } else if (teamName == "manchestercity") {
        return 65;
      } else if (teamName == "manchesterunited") {
        return 66;
      } else if (teamName == "newcastleunited") {
        return 67;
      } else if (teamName == "norwichcity") {
        return 68;
      } else if (teamName == "wolves") {
        return 76;
      } else if (teamName == "southampton") {
        return 340;
      } else if (teamName == "tottenhamhotspur") {
        return 73;
      } else if (teamName == "watford") {
        return 346;
      } else if (teamName == "westham") {
        return 563;
      } else {
        return 86; // on all other occations switch to "real madrid"
      }
    }

    let eveUrl = `https://api.football-data.org/v2/teams/${teamId}/matches?status=SCHEDULED`;

    await fetch(eveUrl, options)
      .then((response) => response.json())
      .then((jsonfile) => {
        renderCard(jsonfile);
      })
      .catch((err) => console.error(err));

    function renderCard(jsonfile) {
      // console.log(jsonfile);
      renderlist.innerHTML = "";
      for (var i = 0; i < 5; i++) {
        // jsonfile.matches.length
        try {
          printEveResults(jsonfile.matches[i]);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  function printEveResults(stringInfo) {
    renderlist.innerHTML += `
    <div class="col">
      <div class="card">
        <h5>Hometeam: ${stringInfo.homeTeam.name}</h5>
        <h5>Awayteam: ${stringInfo.awayTeam.name}</h5>
        <p>UTC date: ${stringInfo.utcDate}</p>
      </div>
    </div>`;
  }
};

teamHandler();
// window.addEventListener("load", teamHandler);
// renderlist.onload(teamHandler);



const reviewPostHandler = async (event) => {
  event.preventDefault();

  let searchParamsArr = window.location.href.split('/');
  // console.log(searchParamsArr);
  let team_id = parseInt(searchParamsArr.at(-2));
  console.log(team_id);

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

  if (team_id && review_score && content) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/team-review', {
      method: 'POST',
      body: JSON.stringify({ team_id, review_score, content }),
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

