document.addEventListener('DOMContentLoaded', init);

function init() {
    loadCarContent();
}

function loadCarContent() {
    fetch('/../../Static Data/Car Data/cars.json')
        .then((response) => response.json())
        .then((cars) => {
            if (!('content' in document.createElement('template'))) {
                console.error('Your browser does not support templates');
                return;
            }
            fetch("../html/templates/components/cardCar.html")
                .then(res => {
                    return res.text()
                })
                .then(texto =>{
            const container = document.getElementById('carCardContainer');

            // Rediccion al clickar en una card
            const card = document.getElementById("carList")
            card.addEventListener("click", function() {
                  window.location = "../html/carProfile.html";
            });

            cars.forEach((car) => {
                const tmpl = document
                    .getElementById('car-card-template')
                    .content.cloneNode(true);

                tmpl.querySelector('h3').innerText = car.name;
                tmpl.querySelector('p').innerText = car.model;
                tmpl.querySelector('img').src = car.imgSrc;
                console.log(car.imgSrc)
                container.appendChild(tmpl);
            }) })
        }).catch((err) => console.error(err));
}




