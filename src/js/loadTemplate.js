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
    let modo = 1;
    fetch("../html/templates/components/headerMobile.html")
        .then((res) => {
            return res.text();
        })
        .then((text) => {
            document.getElementById("headerMobile").innerHTML = text;
            document.getElementById("buttonToggleHeaderMobile").addEventListener("click", () => {
                const sidebar = document.getElementById("headerPadre")
                const indexBody = document.getElementById(bodyName)

                if (modo === 1) {
                    sidebar.classList.add("headerDisplayOff")
                    indexBody.classList.remove("bodyDisplayOff")
                    modo = 0;
                } else {
                    indexBody.classList.add("bodyDisplayOff")
                    sidebar.classList.remove("headerDisplayOff")
                    modo = 1;
                }
            })
        })
}

function loadHeader(){
    let userRol = 0;//0 user not logged, 1 user logged, 2 admin
    let urlLinks;
    fetch("../html/templates/header.html")
        .then(response => {
            return response.text()
        })
        .then(text => {
            document.getElementById("header").innerHTML = text
            if (userRol === 1){
                urlLinks = "../html/templates/components/logedheader.html";
            }else if(userRol===2){
                urlLinks = "../html/templates/components/adminheader.html";
            }else{
                urlLinks = "../html/templates/components/unlogedHeader.html";
            }

            fetch(urlLinks)
                .then(response =>{
                    return response.text()
                })
                .then(text => {
                    document.getElementById("headerLinks").innerHTML = text
                })
        })
}