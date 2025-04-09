import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-20 bg-bone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bone-900 mb-4">Contacte con Nosotros</h2>
          <p className="text-lg text-bone-700 max-w-3xl mx-auto">
            ¿Interesado en nuestras visualizaciones óseas para adultos mayores? Póngase en contacto con nosotros para obtener más información.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-white border-none shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-bone-900 mb-6">Envíenos un mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-bone-800" htmlFor="name">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Su nombre"
                      className="border-bone-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-bone-800" htmlFor="email">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Su correo electrónico"
                      className="border-bone-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-bone-800" htmlFor="subject">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Asunto del mensaje"
                    className="border-bone-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-bone-800" htmlFor="message">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Su mensaje"
                    className="border-bone-300 focus:border-teal-500 focus:ring-teal-500 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-bone-900 mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-bone-900">Teléfono</p>
                    <p className="text-bone-700">+56 9 89532701</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-bone-900">Correo electrónico</p>
                    <p className="text-bone-700">info@petitos.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-bone-900">Dirección</p>
                    <p className="text-bone-700">General Cruz 222, Valparaíso, Chile</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-bone-900 mb-4">Horario de atención</h3>
              <div className="space-y-2">
                <p className="text-bone-700">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-bone-700">Sábados: 9:00 - 14:00</p>
                <p className="text-bone-700">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
