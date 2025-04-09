import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-bone-900 mb-4">
              <span className="text-teal-600">Petit</span>Os
            </div>
            <p className="text-bone-700 mb-4">
              Transformando la forma en que los adultos mayores entienden su salud ósea a través de visualizaciones intuitivas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-bone-900 mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-bone-700 hover:text-teal-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#benefits" className="text-bone-700 hover:text-teal-600 transition-colors">Beneficios</a></li>
              <li><a href="#how-it-works" className="text-bone-700 hover:text-teal-600 transition-colors">Cómo Funciona</a></li>
              <li><a href="#contact" className="text-bone-700 hover:text-teal-600 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-bone-900 mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-bone-700 hover:text-teal-600 transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-bone-700 hover:text-teal-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-bone-700 hover:text-teal-600 transition-colors">Testimonios</a></li>
              <li><a href="#" className="text-bone-700 hover:text-teal-600 transition-colors">Estudios de caso</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-bone-900 mb-4">Síganos</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.926 4.926 0 001.523 6.57 4.889 4.889 0 01-2.23-.616v.06a4.923 4.923 0 003.95 4.827 4.996 4.996 0 01-2.224.084 4.938 4.938 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.16-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.997-7.496 13.997-13.997 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-bone-200 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-bone-600 text-sm">&copy; 2025 PetitOs. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-bone-600 hover:text-teal-600 transition-colors text-sm">Política de privacidad</a>
            <a href="#" className="text-bone-600 hover:text-teal-600 transition-colors text-sm">Términos de servicio</a>
            <a href="#" className="text-bone-600 hover:text-teal-600 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
