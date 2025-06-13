//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("spring").classList.add("barra-progreso1");
        document.getElementById("js-front").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("java").classList.add("barra-progreso4");
        document.getElementById("kotlin").classList.add("barra-progreso5");

    }

}
function sendEmail(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtener los valores de los campos del formulario
    const nombre = document.querySelector("input[placeholder='Nombre Completo *']").value;
    const email = document.querySelector("input[placeholder='Dirección de Email']").value;
    const tema = document.querySelector("input[placeholder='Tema...']").value;
    const mensaje = document.querySelector("textarea[placeholder='Tu Mensaje...']").value;

    // Configurar parámetros para EmailJS
    const params = {
        from_name: nombre,
        email_id: email,
        subject: tema,
        message: mensaje,
    };

    // Llamada a EmailJS para enviar el correo
    emailjs.send("service_wa2tu4d", "template_amn12gd", params)
        .then(function(response) {
            alert("Mensaje enviado con éxito!"); // Mensaje de éxito
            document.getElementById("contact-form").reset(); // Reinicia el formulario
        }, function(error) {
            alert("Hubo un error al enviar el mensaje: " + error.text); // Mensaje de error
        });
}