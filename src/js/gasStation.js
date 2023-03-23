document.addEventListener('DOMContentLoaded', init);

function init() {
    loadTemplate("../html/templates/loggedOutHeader.html", "header")
    loadTemplate("../html/templates/components/map.html", "mapBody")
    loadTemplate("../html/templates/components/gasDescription.html", "descriptionBody")
    loadTemplate("../html/templates/footer.html", "footer")

    loadGasStationContent();
}

function loadGasStationContent() {
    fetch('../../Static Data/Gas Station/gasStop.json')
        .then((response) => response.json())
        .then((gasStop) => {

            document.getElementById('GasStationName').innerText = gasStop["Rótulo"];
            document.getElementById('GasAddress').innerText = `${gasStop["Dirección"]}. ${gasStop["Municipio"]}, ${gasStop["C.P."]}`;

            Object.keys(gasStop).filter(key => key.startsWith("Precio")).forEach(key => {
                if (gasStop[key] === "") {
                    return;
                }

                let element = document.createElement('li');
                const cheapPriceGas = 1.4;
                const expensivePriceGas = 2;
                let price = parseFloat(gasStop[key].replace(',', '.').toLocaleString());

                if(price < cheapPriceGas){
                    element.innerHTML = `${key.substring(7)}: <span style="color: green"><strong>${gasStop[key]}€</strong></span>`;
                }else if(price > cheapPriceGas && price < expensivePriceGas) {
                    element.innerHTML = `${key.substring(7)}: <span style="color: yellow"><strong>${gasStop[key]}€</strong></span>`;
                }else{
                    element.innerHTML = `${key.substring(7)}: <span style="color: red"><strong>${gasStop[key]}€</strong></span>`;
                }

                document.getElementById('pricesList').appendChild(element);
            })
        }).catch((err) => console.error(err));
}