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
                element.innerText = `${key.substring(7)}: ${gasStop[key]}€`;

                document.getElementById('pricesList').appendChild(element);
            })
        }).catch((err) => console.error(err));
}