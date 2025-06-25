
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={cn("w-full py-4 px-6 md:px-12 flex items-center justify-between bg-bone-100/80 backdrop-blur-sm sticky top-0 z-50", className)}>
      <div className="flex items-center">
        <div className="text-2xl font-bold text-bone-900">
          <span className="text-teal-600">Petit</span>Os
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#about" className="text-bone-800 hover:text-teal-600 transition-colors">
          Sobre Nosotros
        </a>
        <a href="#benefits" className="text-bone-800 hover:text-teal-600 transition-colors">
          Beneficios
        </a>
        <a href="#how-it-works" className="text-bone-800 hover:text-teal-600 transition-colors">
          Cómo Funciona
        </a>
        <a href="#contact" className="text-bone-800 hover:text-teal-600 transition-colors">
          Contacto
        </a>
      </div>
      
      <Button variant="default" className="bg-teal-500 hover:bg-teal-600 text-white">
        Contactar
      </Button>
    </nav>
  );
};

export default Navbar;
