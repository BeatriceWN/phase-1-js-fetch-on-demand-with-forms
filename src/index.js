const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputForm = document.querySelector("input#searchByID");

        console.log(inputForm.value)

        fetch(`http://localhost:3000/movies/${inputForm.value}`)
            .then((response) => response.json())
            .then((data) => {
               const title = document.querySelector("section#movieDetails h4");
               const summary = document.querySelector("section#movieDetails p");

               title.innerText = data.title;
               summary.innerText = data.summary;
            });
    });
};

document.addEventListener('DOMContentLoaded', init);

