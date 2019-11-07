const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)

fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/concerts_theatre_eve/" + id)
    .then(res => res.json())
    .then(getFullPost)

function getFullPost(post) {
     console.log(post)

    document.querySelector("article h1").textContent = post.title.rendered

//    const imgPath = post.image.guid
//    console.log(imgPath)
//    const img = postCopy.querySelector("#image");
//
//    img.setAttribute("src", imgPath)
//    img.setAttribute("alt", "Event" + post.title.rendered)


    document.querySelector("#body").innerHTML = post.content.rendered;

    document.querySelector("#price").textContent = price.textContent = post.price;

    document.querySelector("#artist").textContent = artist.textContent = post.artist;

    document.querySelector("#time").textContent = time.textContent = post.time_and_date;

    document.querySelector("#support").textContent = support.textContent = post.support_artist;

    document.querySelector("#description").textContent = description.textContent = post.description;

    document.querySelector("#venue").textContent = venue.textContent = post.venue;




}
