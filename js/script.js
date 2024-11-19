const rowElem = document.querySelector(".row");
let photos = []

const params = {
    _limit: 6
}

axios.get("https://jsonplaceholder.typicode.com/photos?", {params}).then(resp => {

})
