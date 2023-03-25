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
    let colorPrice;

    const cheapPriceGas = 1.35;
    const expensivePriceGas = 2;

    /* To compare Float values*/
    let price = parseFloat(gasStop[key].replace(',', '.').toLocaleString());

    /*Change Color*/
    if (price < cheapPriceGas) {
        colorPrice = `${key.substring(7)}: <span style="color: green"><strong>${gasStop[key]}€</strong></span>`;
    } else if (price > cheapPriceGas && price < expensivePriceGas) {
        colorPrice = `${key.substring(7)}: <span style="color: yellow"><strong>${gasStop[key]}€</strong></span>`;
    } else {
        colorPrice = `${key.substring(7)}: <span style="color: red"><strong>${gasStop[key]}€</strong></span>`;
    }
    return colorPrice;
}