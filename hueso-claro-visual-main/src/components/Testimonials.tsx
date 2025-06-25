
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bone-900 mb-4">Experiencias de Nuestros Usuarios</h2>
          <p className="text-lg text-bone-700 max-w-3xl mx-auto">
            Adultos mayores y profesionales de la salud que ya están utilizando nuestras visualizaciones óseas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-bone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-bone-700 mb-6 flex-grow">{testimonial.text}</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-bone-200 rounded-full"></div>
                    <div className="ml-4">
                      <p className="font-semibold text-bone-900">{testimonial.name}</p>
                      <p className="text-sm text-bone-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    text: "Antes me costaba entender mis informes de densitometría ósea, pero ahora con estas visualizaciones puedo ver claramente cómo está mi salud ósea. Es mucho más fácil de comprender.",
    name: "María García",
    role: "Paciente, 72 años"
  },
  {
    text: "Como médico, he notado una gran diferencia en la comprensión de mis pacientes mayores sobre su salud ósea. La comunicación ha mejorado significativamente gracias a estas visualizaciones.",
    name: "Dr. Alejandro Rodríguez",
    role: "Traumatólogo"
  },
  {
    text: "Las visualizaciones me han ayudado a seguir mi progreso con el tratamiento para la osteoporosis. Ahora entiendo mejor los cambios en mis huesos y me siento más motivada.",
    name: "Carmen Hernández",
    role: "Paciente, 68 años"
  }
];

export default Testimonials;
