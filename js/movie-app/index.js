const API_URL =
  "https://api.themoviedb.org/3/discover/movie?&include_video=false&page=1&sort_by=popularity.desc"; // this is the API base url from the open movie database
const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDhmZDAwOGVmMjlkM2ExYzUxNzg1MjY4YjYzODIyZiIsIm5iZiI6MTcyMDM2Mjc1NS41Mzg0OCwic3ViIjoiNjY4YWE2MWQzNjE0NTQ3NzI5NjE3ZTE4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UeWVdVq5-DyhBWdJcPtXj29SLty11tFqvEC26DnmH1I";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(API_URL);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const respData = await resp.json();

  console.log(respData);

  showMovies(respData.results);
}

function showMovies(movies) {
  // clear main
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
            <img
                src="${IMAGE_PATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCH_URL + searchTerm);

    search.value = "";
  }
});
