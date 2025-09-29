const About = () => {
  return (
    <section id="sobremi" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/assets/img/imagenCv.jpg" 
                alt="Foto de José Luis Aguilar" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-blue-600 rounded-2xl"></div>
          </div>

          <div className="space-y-6">
            <p className="text-blue-600 font-semibold">Sobre Mí</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hola, Soy <span className="text-blue-600">José Luis Aguilar</span>
            </h2>
            <h3 className="text-xl text-gray-600">Desarrollador Full-Stack e IoT</h3>

            <div className="space-y-4 text-gray-600">
              <p>
                Actualmente formo parte de
                <a href="https://www.smartfenix.es/" className="text-blue-600 hover:text-blue-700 transition-colors mx-1">
                  Smart Fénix
                </a>
                como <span className="font-semibold">líder de proyectos SMART AGRO</span>. 
                Me encargo del desarrolllo de soluciones para la <span className="font-semibold">sensorización y digitalización agrícola</span>,
                desde la compra de sensores hablando con proveedores de todo el mundo hasta la digitalización y visualización de los valores 
                en una plataforma propia desarrollada por mí en la que me he encargado del <span className="font-semibold">backend y frontend.</span>
              </p>

              <p>
                He contribuido en iniciativas como el <span className="font-semibold">Proyecto INSIGNIA </span> 
                (riego inteligente e interoperable en comunidades de regantes)
                y en el proyecto <span className="font-semibold">RIGACORE </span> 
                (modelos predictivos y autónomos de gestión de recursos y energía).
              </p>

              <p>
                Procedo del ámbito industrial como <span className="font-semibold">Técnico de Automatización y Robótica</span>, 
                con experiencia en <span className="font-semibold">programación de PLC</span> y montaje eléctrico 
                para empresas como <span className="font-semibold">Cosentino</span> y <span className="font-semibold">Valeo </span> en sus sedes de  
                Martos, Marruecos y Polonia.
               </p>
               <p> 
                He trabajado en <span className="font-semibold">Auringis Automatismos </span> en Martos y 
                <span className="font-semibold"> Automatismos Brenton</span>. 
                También he estado compaginando mis estudios y la hostelería en <span className="font-semibold">Grupo MVP</span> durante año y medio.
              </p>

              <p>
                Destaco por mi <span className="font-semibold">actitud proactiva</span>, 
                <span className="font-semibold"> comunicación</span> y 
                <span className="font-semibold"> resolución de problemas</span>. 
                <span className="font-semibold"> Inglés avanzado</span>,
                <span className="font-semibold"> carné y vehículo propio</span>, y 
                <span className="font-semibold"> disponibilidad total</span>.
              </p>
            </div>

            <a 
              href="/assets/docs/CV JOSE LUIS.pdf" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About