document.addEventListener('DOMContentLoaded', loadUsers);

function loadUsers(init) {
    if (!('content' in document.createElement('template'))) {
        console.error('Your browser does not support templates');
        return;
    }
    document.getElementById("logearse").addEventListener("click", confirmUser);
};

function confirmUser(users){
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

                    console.log(users)
                    const user = users.users.find(u => u.email === mail && u.password === password);
                    console.log(user)

                    if (user) {
                        // El usuario está registrado
                        console.log("Usuario registrado");
                    } else {
                        // El usuario no está registrado
                        console.log("Usuario no registrado");
                    }
                })
        })
}