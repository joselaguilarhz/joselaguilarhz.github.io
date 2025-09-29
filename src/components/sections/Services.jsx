const ServiceCard = ({ icon, title, tags, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <span className="inline-block text-3xl text-blue-600 mb-4">
        <i className={icon}></i>
      </span>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
      <hr className="border-gray-200 mb-4" />
      <ul className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <li 
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-server",
      title: "Backend (Python / Java)",
      tags: ["API", "Microservicios", "BBDD"],
      description: "APIs y servicios con Python (Flask/FastAPI) y Java (Spring). Autenticación, ORM, tests e integración con SQL/InfluxDB."
    },
    {
      icon: "fa-brands fa-react",
      title: "Frontend (React / Angular)",
      tags: ["UI", "UX", "Rendimiento"],
      description: "Apps web con React y Angular, componentes reutilizables, desarrollo en Android, estados globales y consumo de APIs. Animaciones y SPA."
    },
    {
      icon: "fa-solid fa-microchip",
      title: "IoT & Smart Agro",
      tags: ["LoRaWAN", "Sensorización", "Dashboards"],
      description: "Integración de sensórica (campo-nube), gateways, protocolos industriales y visualización con InfluxDB y Grafana."
    },
    {
      icon: "fa-solid fa-database",
      title: "Bases de datos & Datos",
      tags: ["SQL", "InfluxDB", "ETL"],
      description: "Modelado, consultas y optimización en MySQL/SQL. Series temporales con InfluxDB, pipelines y APIs de datos."
    },
    {
      icon: "fa-brands fa-docker",
      title: "Dev & Ops",
      tags: ["Docker", "GitHub", "Linux"],
      description: "Despliegues en Docker, control de versiones en GitHub, proxys Nginx, automatización en Linux."
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Formación & Soporte",
      tags: ["Mentoría", "Docs", "Soporte"],
      description: "Documentación técnica, formación de equipos y puesta en marcha de soluciones IoT/Full-Stack."
    }
  ]

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          MIS SERVICIOS
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services