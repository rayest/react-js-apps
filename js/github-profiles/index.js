const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  const response = await fetch(API_URL + username);
  const data = await response.json();
  console.log(data);

  createUserCard(data);

  getRepos(username);
}

function getRepos(username) {
  fetch(API_URL + username + "/repos")
    .then((response) => response.json())
    .then((data) => {
      addReposToCard(data);
    });
}

function addReposToCard(repos) {
  console.log(repos);
  const reposElement = document.getElementById("repos");

  repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoElement = document.createElement("a");
      repoElement.classList.add("repo");

      repoElement.href = repo.html_url;
      repoElement.target = "_blank";
      repoElement.innerText = repo.name;

      reposElement.appendChild(repoElement);
    });
}

function createUserCard(user) {
  cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p class="bio">${user.bio}</p>
            <ul>
                <li>${user.followers}<strong> Followers</strong></li>
                <li>${user.following}<strong> Following</strong></li>
                <li>${user.public_repos}<strong> Repos</strong></li>
            </ul>

            <h4>Repos:</h4>
            <div id="repos"></div>
        </div>
    </div>
    `;
  main.innerHTML = cardHTML;

  var bioElement = document.querySelector(".bio");
  var userBio = user.bio;

  if (!userBio) {
    bioElement.style.display = "none";
  } else {
    bioElement.textContent = userBio;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
