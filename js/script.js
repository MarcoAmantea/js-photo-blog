//Prelevo gli elementi che mi servono tramite queryselector
const rowElem = document.querySelector(".row");
const overlayBtn = document.querySelector("#overlay-btn");
const overlayElem = document.querySelector('#overlay');
const imgModal = document.querySelector('.img-modal');

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
                <img src="./img/pin.svg" class="position-absolute position-absolute top-0 start-50 translate-middle punta" alt="">
                <img src="${curPhoto.url}" class="card-img-top mt-3 img-principal" alt="${curPhoto.url}">
                <div class="card-body">
                  <p class="card-text">${curPhoto.title}</p>
                </div>
            </div>
        `
    })
    rowElem.innerHTML = result;
    const images = document.querySelectorAll('.img-principal');
    images.forEach(curImg => {
        curImg.addEventListener('click', function() {
            const srcAttribute = curImg.getAttribute("src");
            imgModal.setAttribute("src", srcAttribute);
            if (overlayElem.classList.contains("d-none")) {
                overlayElem.classList.remove("d-none");
            }
        });
    });
}




    


