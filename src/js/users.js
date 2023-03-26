document.addEventListener('DOMContentLoaded', loadUsers);

function loadUsers(init) {
    if (!('content' in document.createElement('template'))) {
        console.error('Your browser does not support templates');
        return;
    }
    const log= document.getElementById("logearse");
    log.addEventListener("click", confirmUser);
};

function confirmUser(event){
    event.preventDefault()
    fetch("../html/login.html").then(res => {
        return res.text()
    })
        .then(texto =>{
            fetch('../../Static Data/User Data/users.json')
                .then(response => response.json())
                .then((users) => {

                    localStorage.setItem("users", JSON.stringify(users));
                    const mail = document.getElementById("username").value;
                    const password = document.getElementById("password").value;

                    const user = users.users.find(u => u.email === mail && u.password === password);

                    if (user) {
                        // El usuario está registrado
                        localStorage.setItem("currentUser", JSON.stringify(user));
                        window.location="../html/userCarList.html";
                    } else {
                        // El usuario no está registrado
                        console.log("Usuario no registrado");
                    }
                })
        })
}