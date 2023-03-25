document.addEventListener('DOMContentLoaded', init);

function init() {
    loadHeaderMobile("Global Body")
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

            loadAllPricesInto(gasStop, 'pricesList');

        }).catch((err) => console.error(err));
}