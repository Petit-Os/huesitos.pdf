import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Mail, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface DownloadOptionsProps {
  generatedImage: string;
  originalFileName: string;
  description: string;
  onReset: () => void;
}

const DownloadOptions = ({ 
  generatedImage, 
  originalFileName, 
  description, 
  onReset 
}: DownloadOptionsProps) => {
  const [email, setEmail] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const downloadAsPDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById('generated-content');
      if (!element) {
        toast.error("No se encontró el contenido para descargar");
        return;
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Add centered title
      pdf.setFontSize(20);
      const titleText = 'Análisis de Radiografía';
      const titleWidth = pdf.getTextWidth(titleText);
      const pageWidth = pdf.internal.pageSize.getWidth();
      const titleX = (pageWidth - titleWidth) / 2;
      pdf.text(titleText, titleX, 30);
      
      // Add centered description if available
      if (description) {
        pdf.setFontSize(12);
        const descWidth = pdf.getTextWidth(description);
        const descX = (pageWidth - descWidth) / 2;
        pdf.text(description, descX, 45);
      }
      
      // Add image to match exactly what's generated
      const imgWidth = 170;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const yPosition = description ? 60 : 45;
      
      pdf.addImage(imgData, 'PNG', 20, yPosition, imgWidth, imgHeight);
      
      // Remove the date footer completely - no footer text
      
      pdf.save(`${originalFileName}_explicativo.pdf`);
      toast.success("PDF descargado exitosamente");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Error al generar el PDF");
    } finally {
      setIsDownloading(false);
    }
  };

  const sendByEmail = async () => {
    if (!email) {
      toast.error("Por favor ingresa un correo electrónico");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Por favor ingresa un correo electrónico válido");
      return;
    }

    setIsSending(true);
    
    try {
      // Create a mailto link with the image data
      const subject = encodeURIComponent("Análisis de Radiografía - Imagen Explicativa");
      const body = encodeURIComponent(`
Hola,

Te envío el análisis de la radiografía ${originalFileName}.

${description ? `Descripción: ${description}` : ''}

Imagen explicativa generada por PetitOs.

La imagen explicativa se encuentra adjunta.

Saludos.
      `);
      
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
      window.open(mailtoLink);
      
      toast.success("Cliente de correo abierto. Por favor adjunta la imagen manualmente.");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error al preparar el correo");
    } finally {
      setIsSending(false);
    }
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `${originalFileName}_explicativo.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Imagen descargada exitosamente");
  };

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <Download className="h-5 w-5" />
          <span>Opciones de Descarga</span>
        </CardTitle>
        <CardDescription className="text-green-100">
          Descarga o envía la imagen explicativa generada
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Download buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              onClick={downloadImage}
              variant="outline"
              className="w-full border-blue-200 hover:bg-blue-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar Imagen
            </Button>
            
            <Button
              onClick={downloadAsPDF}
              disabled={isDownloading}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generando PDF...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </>
              )}
            </Button>
          </div>

          {/* Email section */}
          <div className="border-t pt-4">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Enviar por correo electrónico
            </Label>
            <div className="flex space-x-2 mt-1">
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={sendByEmail}
                disabled={isSending}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Se abrirá tu cliente de correo predeterminado
            </p>
          </div>

          {/* Reset button */}
          <div className="border-t pt-4">
            <Button
              onClick={onReset}
              variant="outline"
              className="w-full border-gray-300 hover:bg-gray-50"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Nueva Radiografía
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadOptions;
