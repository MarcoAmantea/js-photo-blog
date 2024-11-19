const rowElem = document.querySelector(".row");
let photos = []

const params = {
    _limit: 6
}
axios.get("https://jsonplaceholder.typicode.com/photos?", {params}).then(resp => {
    photos = resp.data;
    printPhotos();
})
const printPhotos = () => {
    let result = "";
    photos.forEach(curPhotos =>{ 
        console.log(curPhotos);
               
        result += `
        <div class="card mt-5 col-4 position-relative">
                <img src="./img/pin.svg" class="position-absolute position-absolute top-0 start-50 translate-middle" alt="">
                <img src="${curPhotos.url}" class="card-img-top mt-3" alt="${curPhotos.thumbnailUrl}">
                <div class="card-body">
                  <p class="card-text">${curPhotos.title}</p>
                </div>
            </div>
        `
    })
    rowElem.innerHTML = result;
}

