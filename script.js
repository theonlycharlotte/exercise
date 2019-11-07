window.addEventListener("DOMContentLoaded", getData);

function getData() {
    console.log("getData")
    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/concerts_theatre_eve?_embed")
        .then(res => res.json())
        .then(handleData)
}

function handleData(myData) {
    //    console.log(myData)
    myData.forEach(showPost)
}

function showPost(post) {
    console.log(post)



    const template = document.querySelector(".eventsTemplate").content;
    const postCopy = template.cloneNode(true);

    const h1 = postCopy.querySelector("h1");
    h1.textContent = post.title.rendered;


    // const imgPath = post.image.guid;

    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url
    console.log(imgPath)
    const img = postCopy.querySelector("#image");

    img.setAttribute("src", imgPath)
    img.setAttribute("alt", "Event" + post.title.rendered)





    const a = postCopy.querySelector("a");
    a.href="subpage.html?id="+post.id;

    const price = postCopy.querySelector("#price")
    price.textContent = post.price;

    const artist = postCopy.querySelector("#artist")
    artist.textContent = post.artist;

    const time = postCopy.querySelector("#time")
    time.textContent = post.time_and_date;

    const description = postCopy.querySelector("#description")
    description.textContent = post.description;

    const venue = postCopy.querySelector("#venue")
    venue.textContent = post.venue;

//    const soldOut = postCopy.querySelector("#soldout")
//    soldOut.booleanContent = post.soldout;

//    if (post.soldout) {
//        console.log("TRUE")
//    }





    document.querySelector("#posts").appendChild(postCopy)

}
