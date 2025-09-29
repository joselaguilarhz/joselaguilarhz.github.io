const Hero = () => {
  return (
    <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-blue-600 font-semibold">Bienvenidos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Soy José Luis Aguilar, Desarrollador Full-Stack e IoT
            </h2>
          
            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                Te invito a conocerme a través de mi carrera profesional y mis proyectos.
              </p>
              <p>
                Vengo del mundo industrial como <span className="font-semibold">programador de PLC</span> y técnico automatista.
                Actualmente lidero el proyecto <span className="font-semibold">SMART AGRO</span> en
                <a href="https://www.smartfenix.es/" className="text-blue-600 hover:text-blue-700 transition-colors mx-1 font-semibold">
                  Smart Fénix
                </a>,
                integrando <span className="font-semibold">sensórica IoT</span>, despliegue de <span className="font-semibold">servidores</span> y visualización de datos.
              </p>
              <p>
                Trabajo a diario con <span className="font-semibold">Python</span> y <span className="font-semibold">Java</span> en backend, 
                <span className="font-semibold">React</span>/<span className="font-semibold">Angular</span> en frontend,
                bases de datos <span className="font-semibold">SQL</span> y stacks de observabilidad 
                (<span className="font-semibold">InfluxDB</span> + <span className="font-semibold">Grafana</span>).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#servicios" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-center transition-colors"
              >
                Ver servicios
              </a>
              <a 
                href="/assets/docs/CV JOSE LUIS.pdf" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md text-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener"
              >
                Descargar CV
              </a>
            </div>
          </div>
          
          {/* Imagen del lado derecho */}
          <div className="relative order-first md:order-last">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/assets/img/imagenmia.jpeg" 
                alt="José Luis Aguilar" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-blue-600 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
