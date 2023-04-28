fetch("./json/recruiters.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const recruitersGrid = document.querySelector("#recruiters_grid");
    data.data.forEach((recruiter) => {
      recruitersGrid.innerHTML += `
        <a class="post" target="_blank" href="${recruiter.companyLink}">
          <img
            src=${recruiter.image}
            alt=${recruiter.companyName}
          />
        </a>
        `;
    });
  });
