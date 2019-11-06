const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)

fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/concerts_theatre_eve/" + id)
    .then(res => res.json())
    .then(getFullPost)

function getFullPost(post) {
    console.log("post")

    document.querySelector("article h1").textContent = post.title.rendered


}
