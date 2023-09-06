const animeImgEl = document.getElementById("anime-img"); // select the image element by id

async function getRandomAnimeImage() {
    try {
        const response = await fetch("https://api.catboys.com/img"); // fetch the JSON response from the API
        const data = await response.json(); // convert the response to JSON
        animeImgEl.src = data.url; // set the image source to the image URL from the API response
    } catch (error) {
        console.log(error); // log any errors to the console
    }
}

// Call the function to load a random anime image when the page loads
window.onload = getRandomAnimeImage;