
let con = document.getElementsByClassName('container')[0];
let i, card, pro, idd;

let response = fetch("https://api.artic.edu/api/v1/artworks");
response.then((value)=>{
    return value.json()
}).then((value)=>{
    console.log(value.data)
    for (stuff in value.data) {

        // console.log(value.data[stuff].api_link)

        // console.log(value.data[stuff].image_id)
        i = `https://www.artic.edu/iiif/2/${value.data[stuff].image_id}/full/843,/0/default.jpg`

        card = `<div class="card" style="width: 18rem;">
        <img src="${i}" height="215.766px" width="286px" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value.data[stuff].suggest_autocomplete_boosted
          }</h5>
          <p class="card-text">${value.data[stuff].thumbnail.alt_text.substring(0,86)}...</p>
          <a href="${i}" class="btn btn-primary">Open Image</a>
        </div>
      </div>`
      cardContainer.innerHTML += card;


    }
})