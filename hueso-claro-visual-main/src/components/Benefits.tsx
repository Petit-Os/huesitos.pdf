
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bone-900 mb-4">Beneficios de Nuestras Visualizaciones</h2>
          <p className="text-lg text-bone-700 max-w-3xl mx-auto">
            Nuestras representaciones visuales ofrecen numerosas ventajas para los adultos mayores que necesitan entender su salud ósea.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 text-xl font-semibold">{index + 1}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bone-900 mb-2">{benefit.title}</h3>
                <p className="text-bone-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Fácil comprensión",
    description: "Transformamos terminología médica compleja en visualizaciones intuitivas que son fáciles de interpretar sin conocimientos técnicos."
  },
  {
    title: "Mayor participación",
    description: "Los pacientes comprenden mejor su situación médica, lo que les permite participar activamente en las decisiones sobre su tratamiento."
  },
  {
    title: "Reducción de ansiedad",
    description: "Al comprender claramente su estado de salud, los adultos mayores experimentan menos ansiedad relacionada con diagnósticos confusos."
  },
  {
    title: "Seguimiento del progreso",
    description: "Las visualizaciones permiten a los pacientes ver claramente los cambios en su salud ósea a lo largo del tiempo."
  },
  {
    title: "Mejor comunicación médico-paciente",
    description: "Nuestras visualizaciones facilitan la comunicación entre los profesionales de la salud y sus pacientes mayores."
  },
  {
    title: "Accesibilidad",
    description: "Diseñadas pensando en la accesibilidad, nuestras visualizaciones consideran las necesidades específicas de los adultos mayores."
  }
];

export default Benefits;
