import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (e) => {
    if (e.target.tagName === 'A') {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">/José Luis/</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li><a href="#inicio" className="text-gray-300 hover:text-blue-400 transition-colors">INICIO</a></li>
            <li><a href="#sobremi" className="text-gray-300 hover:text-blue-400 transition-colors">SOBRE MÍ</a></li>
            <li><a href="#servicios" className="text-gray-300 hover:text-blue-400 transition-colors">SERVICIOS</a></li>
            <li><a href="#contacto" className="text-gray-300 hover:text-blue-400 transition-colors">CONTACTO</a></li>
            <li>
              <a 
                href="/assets/CV-JOSE-LUIS.pdf" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors"
                target="_blank" 
                rel="noopener"
              >
                Descargar CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-gray-900/98 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="h-full flex items-center justify-center">
            <ul className="space-y-8 text-center" onClick={handleMenuClick}>
              <li><a href="#inicio" className="text-gray-300 text-2xl hover:text-blue-400 transition-colors">INICIO</a></li>
              <li><a href="#sobremi" className="text-gray-300 text-2xl hover:text-blue-400 transition-colors">SOBRE MÍ</a></li>
              <li><a href="#servicios" className="text-gray-300 text-2xl hover:text-blue-400 transition-colors">SERVICIOS</a></li>
              <li><a href="#contacto" className="text-gray-300 text-2xl hover:text-blue-400 transition-colors">CONTACTO</a></li>
              <li>
                <a 
                  href="/assets/docs/CV JOSE LUIS.pdf" 
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400 transition-colors"
                  target="_blank" 
                  rel="noopener"
                >
                  Descargar CV
                </a>
              </li>
              <li className="flex flex-col items-center space-y-4">
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/joselaguilarhz" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github text-3xl"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jose-luis-aguilar-sanchez-8a4270248/" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin text-3xl"></i>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header