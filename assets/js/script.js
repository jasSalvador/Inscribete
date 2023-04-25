//NO USAR ID CON GUIONES EN HTML, USAR CAMELCASE
// 1- capturar el formulario
let formulario =document.getElementById("formDataUsuario");
let usuarios = [];

// 3- creamos funcion constructora / los value de los input en html, los dejamos x defecto para hacer las pruebas
function Usuario(nombre, email, trabajo, telefono, descripcion){
    this.nombre = nombre;
    this.email = email;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.descripcion = descripcion;
}

// 2- callback funcion q se pasa como argumento a otra funcion
//escucha evento, esperando activacion del submit
formulario.addEventListener("submit", function(event){ 
    event.preventDefault();  //evita q se envie el formulario x defecto

    //guardamos en variables los datos del form x su id
    let nombre = usuarioName.value; //si agregamos el usuario al id, no es necesario el document.. -> document.getElementById("name").value;
    let email = usuarioEmail.value;
    let trabajo = usuarioWork.value;
    let telefono = usuarioFhone.value;
    let descripcion = usuarioBio.value;

    //console.log(nombre, email, trabajo, telefono, descripcion);
    let nuevoUsuario = new Usuario(nombre, email, trabajo, telefono, descripcion);
    usuarios.push(nuevoUsuario);
    mostrarInfo(nuevoUsuario);
    llenarTabla();
});

// 4- insertamos datos en la card
function mostrarInfo(usuario){
    cardUsuarioNombre.innerText = usuario.nombre;
    cardUsuarioTrabajo.innerText = usuario.trabajo;
    cardUsuarioEmail.innerText = usuario.email;
    cardUsuarioTelefono.innerText = usuario.telefono;
    cardUsuarioDescripcion.innerText = usuario.descripcion;
}

// 5- para capturar los nuevos datos ingresados en el formulario
function llenarTabla(){
    let acumulador = "";

    usuarios.forEach(function (usuario, index){
        acumulador += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td> ${usuario.nombre}</td>
            <td> ${usuario.email}</td>
            <td> ${usuario.trabajo}</td>
        </tr>
        `
    });

    let cuerpoTabla = document.querySelector(
        "#contenedorTablaUsuarios table tbody"
    );
    console.log(cuerpoTabla);
    console.log(acumulador)
        cuerpoTabla.innerHTML = acumulador;
}