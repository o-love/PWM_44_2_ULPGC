function loadAllPricesInto(gasStop, list) {
    Object.keys(gasStop).filter(key => key.startsWith("Precio")).forEach(key => {
        if (gasStop[key] === "") {
            return;
        }
        let element = document.createElement('li');
        element.innerHTML = changeColorPriceTag(gasStop,key)

        list.appendChild(element)
    });
}

function changeColorPriceTag(gasStop, key){
    let element = document.createElement('li');
    const cheapPriceGas = 1.35;
    const expensivePriceGas = 2;
    let price = parseFloat(gasStop[key].replace(',', '.').toLocaleString());

    if (price < cheapPriceGas) {
        element.innerHTML = `${key.substring(7)}: <span style="color: green"><strong>${gasStop[key]}€</strong></span>`;
    } else if (price > cheapPriceGas && price < expensivePriceGas) {
        element.innerHTML = `${key.substring(7)}: <span style="color: yellow"><strong>${gasStop[key]}€</strong></span>`;
    } else {
        element.innerHTML = `${key.substring(7)}: <span style="color: red"><strong>${gasStop[key]}€</strong></span>`;
    }
    return element.innerHTML;
}