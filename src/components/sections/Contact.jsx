import { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email_id: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    // Inicializar EmailJS
    if (window.emailjs) {
      window.emailjs.init("y4fY_65hSZZUKBWwc")
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'info', message: 'Enviando mensaje...' })

    // Asegurarnos de que todos los campos necesarios estén presentes
    const templateParams = {
      from_name: formData.from_name,
      email_id: formData.email_id,
      subject: formData.subject,
      message: formData.message,
      to_name: 'José Luis', // Añadimos el destinatario
      reply_to: formData.email_id // Aseguramos que las respuestas vayan al remitente
    }

    try {
      const response = await window.emailjs.send(
        "service_26nikh4", // Tu Service ID
        "template_4we8llh", // Tu Template ID
        templateParams,
        "y4fY_65hSZZUKBWwc" // Tu Public Key
      )

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
        })
        setFormData({ from_name: '', email_id: '', subject: '', message: '' })
        e.target.reset()
      } else {
        throw new Error('Error en el envío')
      }
    } catch (error) {
      console.error('Error al enviar el email:', error)
      setStatus({
        type: 'error',
        message: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde o contáctame directamente por LinkedIn.'
      })
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Contacto
        </h3>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Nombre Completo *"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email_id"
                  value={formData.email_id}
                  onChange={handleChange}
                  placeholder="Dirección de Email *"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Tema..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu Mensaje..."
                required
                rows="6"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              ></textarea>
            </div>

            {status.message && (
              <div className={`p-4 rounded-md ${
                status.type === 'success' ? 'bg-green-100 text-green-700' :
                status.type === 'error' ? 'bg-red-100 text-red-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {status.message}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact