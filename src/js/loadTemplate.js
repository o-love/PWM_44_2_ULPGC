function loadTemplate(fileName, id, callback) {

    fetch(fileName).then((res) => {
        return res.text();
    }).then((text) => {
        document.getElementById(id).innerHTML = text;
        //console.log(text)

        if (callback) {
            callback();
        }
    })
}


function loadHeaderMobile(bodyName) {
    //modo = 1 header oculto actualmente
    let modo = 0;
    fetch("../html/templates/components/headerMobile.html")
        .then((res) => {
            return res.text();
        })
        .then((text) => {
            document.getElementById("headerMobile").innerHTML = text;
            document.getElementById("buttonToggleHeaderMobile").addEventListener("click", () => {
                const sidebar = document.getElementById("header")
                const indexBody = document.getElementById(bodyName)

                if (modo === 1) {
                    sidebar.classList.add("headerDisplayoff")
                    indexBody.classList.remove("displayoff")
                    modo = 0;
                } else {
                    indexBody.classList.add("displayoff")
                    sidebar.classList.remove("headerDisplayoff")
                    modo = 1;
                }
            })
        })
}