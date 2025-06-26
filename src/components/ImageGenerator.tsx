
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2 } from "lucide-react";
import { toast } from "sonner";

interface ImageGeneratorProps {
  file: File;
  description: string;
  onImageGenerated: (imageUrl: string) => void;
  isGenerating: boolean;
  setIsGenerating: (generating: boolean) => void;
}

const ImageGenerator = ({ 
  file, 
  description, 
  onImageGenerated, 
  isGenerating, 
  setIsGenerating 
}: ImageGeneratorProps) => {
  const [apiKey, setApiKey] = useState("");

  const generateExplanatoryImage = async () => {
    if (!apiKey) {
      toast.error("Por favor ingresa tu API key de Runware");
      return;
    }

    setIsGenerating(true);
    
    try {
      // Convert file to base64 for the prompt
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;
        
        // Create a detailed prompt for medical image explanation
        const prompt = `Create a detailed medical explanatory diagram based on this X-ray image. Add clear labels, arrows, and annotations pointing to important anatomical structures and any notable findings. Include a clean, professional medical illustration style with high contrast and clear text labels. ${description ? `Clinical context: ${description}` : ''}`;

        try {
          const response = await fetch('https://api.runware.ai/v1', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([
              {
                taskType: "authentication",
                apiKey: apiKey
              },
              {
                taskType: "imageInference",
                taskUUID: crypto.randomUUID(),
                positivePrompt: prompt,
                width: 1024,
                height: 1024,
                model: "runware:100@1",
                numberResults: 1,
                outputFormat: "WEBP",
                CFGScale: 7,
                steps: 20
              }
            ])
          });

          const data = await response.json();
          
          if (data.data && data.data.length > 0) {
            const imageResult = data.data.find((item: any) => item.taskType === "imageInference");
            if (imageResult && imageResult.imageURL) {
              onImageGenerated(imageResult.imageURL);
              toast.success("Imagen explicativa generada exitosamente");
            } else {
              throw new Error("No se pudo generar la imagen");
            }
          } else {
            throw new Error("Error en la respuesta de la API");
          }
        } catch (error) {
          console.error("Error generating image:", error);
          toast.error("Error al generar la imagen explicativa");
        }
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al procesar la imagen");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <Wand2 className="h-5 w-5" />
          <span>Generar Imagen Explicativa</span>
        </CardTitle>
        <CardDescription className="text-purple-100">
          Usa IA para crear una imagen explicativa de la radiografía
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="api-key" className="text-sm font-medium text-gray-700">
              API Key de Runware
            </Label>
            <Input
              id="api-key"
              type="password"
              placeholder="Ingresa tu API key de Runware"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-gray-500 mt-1">
              Obtén tu API key en{" "}
              <a 
                href="https://runware.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                runware.ai
              </a>
            </p>
          </div>

          <Button
            onClick={generateExplanatoryImage}
            disabled={isGenerating || !apiKey}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generando...
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4 mr-2" />
                Generar Imagen Explicativa
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageGenerator;
