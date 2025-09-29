const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/joselaguilarhz"
            className="text-gray-300 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/jose-luis-aguilar-sanchez-8a4270248/"
            className="text-gray-300 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
        </div>
        <div className="text-center mt-4 text-gray-300">
          © {new Date().getFullYear()} José Luis Aguilar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer