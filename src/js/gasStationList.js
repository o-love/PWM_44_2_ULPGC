document.addEventListener('DOMContentLoaded', init);

function init() {
    fetch('../../../Static Data/Gas Station/gasStationPricesStatic.json')
        .then(response => response.json())
        .then(gasStations => loadGasStations(gasStations))
        .catch(err => console.error(err));
}

function loadGasStations(gasStationList) {
    if (!('content' in document.createElement('template'))) {
        console.error('Your browser does not support templates');
        return;
    }

    const container = document.getElementById('gasStationListContainer');

    console.log(gasStationList)

    gasStationList['ListaEESSPrecio'].forEach((gasStation) => {
        const tmpl = document
            .getElementById('gasStationElementTemplate')
            .content.cloneNode(true);

        tmpl.querySelector(".gasStationName").innerText = gasStation["Rótulo"];
        tmpl.querySelector(".gasStationAddress").innerText = `${gasStation["Dirección"]}. ${gasStation["Municipio"]}, ${gasStation["C.P."]}`;

        const priceList = tmpl.querySelector(".gasStationPrices");

        loadAllPricesInto(gasStation, priceList);

        container.appendChild(tmpl)
    });
}