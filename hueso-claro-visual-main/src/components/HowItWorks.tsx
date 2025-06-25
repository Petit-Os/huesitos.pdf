
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full py-20 bg-bone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bone-900 mb-4">Cómo Funciona</h2>
          <p className="text-lg text-bone-700 max-w-3xl mx-auto">
            Nuestro proceso de transformación de datos médicos en visualizaciones accesibles.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -ml-[2px] top-0 bottom-0 w-1 bg-teal-200 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col items-center md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute left-1/2 -ml-4 mt-8">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                </div>
                
                {/* Mobile timeline dot */}
                <div className="md:hidden mb-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content card */}
                <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-bone-900 mb-2">{step.title}</h3>
                    <p className="text-bone-700">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: "Recopilación de datos",
    description: "Recopilamos datos de densitometría ósea y otras pruebas médicas relacionadas con la salud ósea."
  },
  {
    title: "Análisis y procesamiento",
    description: "Nuestros especialistas analizan los datos y los transforman en formatos que permiten crear visualizaciones claras."
  },
  {
    title: "Diseño centrado en el usuario",
    description: "Diseñamos visualizaciones considerando las necesidades y capacidades específicas de los adultos mayores."
  },
  {
    title: "Creación de visualizaciones",
    description: "Transformamos los datos en representaciones visuales intuitivas que comunican claramente el estado óseo."
  },
  {
    title: "Validación con usuarios",
    description: "Probamos las visualizaciones con adultos mayores para asegurar que sean comprensibles y útiles."
  },
  {
    title: "Implementación y educación",
    description: "Implementamos las visualizaciones y proporcionamos orientación sobre cómo interpretarlas correctamente."
  }
];

export default HowItWorks;
