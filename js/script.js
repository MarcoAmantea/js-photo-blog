//Prelevo l'elemento row tramite queryselector
const rowElem = document.querySelector(".row");
const overlayElem = document.getElementById("overlay");
const overlayBtn = document.getElementById("overlay-btn");



//creo variabile con array vuoto dove verranno inseriti i dati di tutte le foto
let photos = [];


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
    photos = resp.data;
    console.log(resp);
    printPhotos();
    overlayBtn.addEventListener("click", function(){
        overlayElem.classList.add("d-none")
    })
    
})

//Funzione per stampare le foto in pagina
function printPhotos(){
    let result = "";
    photos.forEach(curPhoto => { 
        console.log(curPhoto);
               
        result += `
        <div class="card mt-5 col-lg-4 col-md-6 col-sm-12 position-relative">
                <img src="./img/pin.svg" class="position-absolute position-absolute top-0 start-50 translate-middle" alt="">
                <img src="${curPhoto.url}" id="img-principal" class="card-img-top mt-3" alt="${curPhoto.url}">
                <div class="card-body">
                  <p class="card-text">${curPhoto.title}</p>
                </div>
            </div>
        `
    })
    rowElem.innerHTML = result;
    const images = document.querySelectorAll('#img-principal');
    images.forEach(curImg => {
        curImg.addEventListener('click', function() {
            if(overlayElem.classList.contains("d-none")){
                overlayElem.classList.remove("d-none")
            };
        });
    });
}




    


