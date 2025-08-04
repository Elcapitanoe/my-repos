const username = "Elcapitanoe";
const container = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then((res) => res.json())
  .then((repos) => {
    // Sort by last updated descending
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    container.innerHTML = "";

    repos.forEach((repo) => {
      const updatedDate = new Date(repo.updated_at);
      const formattedDate = updatedDate.toLocaleDateString("en-ID", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      <div class="card-updated">Last Updated: ${formattedDate}</div>
        <img src="https://www.futuretdm.eu/wp-content/uploads/Github-Icon-FutureTDM.png" alt="Repo Images" />
        <div class="card-body">
          <h2 class="card-title">${repo.name}</h2>
          <p class="card-text">${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" class="view-button" target="_blank">View Repo</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch((err) => {
    container.innerHTML = "Failed to load repositories.";
    console.error(err);
  });
