fetch("./json/recruiters.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const recruitersGrid = document.querySelector("#recruiters_grid");
        data.data.forEach((recruiter) => {
            recruitersGrid.innerHTML += `
        <a href="${recruiter.link}" target="__blank" class="company">${recruiter.name}</a>
        `;
        });
    });
