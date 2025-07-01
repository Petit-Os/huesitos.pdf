
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Download, Mail, Image as ImageIcon, FileText, Building2, Bone } from "lucide-react";
import { toast } from "sonner";
import BoneDataGenerator from "@/components/BoneDataGenerator";
import DownloadOptions from "@/components/DownloadOptions";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      toast.success("Radiografía de huesos cargada correctamente");
    } else {
      toast.error("Por favor selecciona un archivo de imagen válido");
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setDescription("");
    setGeneratedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header with PetitOs Branding */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg">
                <Bone className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    PetitOs
                  </h1>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                    Bone Analysis
                  </span>
                </div>
                <p className="text-gray-600 text-sm lg:text-base">
                  Generador de Imágenes Óseas Basado en Datos de Densidad
                </p>
              </div>
            </div>
            
            {/* Company Info */}
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Building2 className="h-4 w-4" />
              <span>Análisis de Densidad Ósea</span>
            </div>
          </div>
        </div>
      </div>

      {/* About PetitOs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-teal-50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Bone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Análisis de Densidad</h3>
                <p className="text-sm text-gray-600">
                  Genera visualizaciones óseas precisas basadas en datos de densidad mineral ósea y otros parámetros clínicos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visualización Médica</h3>
                <p className="text-sm text-gray-600">
                  Convierte datos numéricos de densidad ósea en representaciones visuales claras y comprensibles.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reportes Detallados</h3>
                <p className="text-sm text-gray-600">
                  Genera reportes completos en PDF con análisis de densidad ósea y compártelos fácilmente.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel de entrada */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Cargar Radiografía de Huesos</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Sube la imagen de la radiografía ósea de referencia (opcional)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="file-upload" className="text-sm font-medium text-gray-700">
                      Seleccionar archivo (opcional)
                    </Label>
                    <Input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="mt-1"
                    />
                  </div>
                  
                  {selectedFile && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-800 font-medium">
                          {selectedFile.name}
                        </span>
                      </div>
                      <p className="text-xs text-green-600 mt-1">
                        Tamaño: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                      Notas clínicas adicionales (opcional)
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Ej: Análisis de densidad ósea femoral, paciente con osteoporosis..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <BoneDataGenerator
              referenceImage={selectedFile}
              description={description}
              onImageGenerated={setGeneratedImage}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
          </div>

          {/* Panel de resultado */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <ImageIcon className="h-5 w-5" />
                  <span>Imagen Ósea Generada</span>
                </CardTitle>
                <CardDescription className="text-teal-100">
                  Visualización basada en datos de densidad ósea
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <p className="text-gray-600">Generando imagen ósea...</p>
                  </div>
                ) : generatedImage ? (
                  <div id="generated-content" className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <img
                        src={generatedImage}
                        alt="Imagen ósea generada"
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Análisis generado por PetitOs:</h4>
                      <p className="text-blue-800 text-sm">
                        Esta imagen ósea ha sido generada basándose en los datos de densidad mineral 
                        y otros parámetros proporcionados, utilizando nuestra tecnología de visualización médica especializada.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                    <Bone className="h-16 w-16 mb-4 opacity-30" />
                    <p>La imagen ósea aparecerá aquí</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {generatedImage && (
              <DownloadOptions
                generatedImage={generatedImage}
                originalFileName={selectedFile?.name || "analisis_oseo"}
                description={description}
                onReset={resetForm}
              />
            )}
          </div>
        </div>
      </div>

      {/* Footer with PetitOs Info */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Bone className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-900">PetitOs</span>
              <span className="text-sm text-gray-500">- Análisis de Densidad Ósea</span>
            </div>
            <div className="text-sm text-gray-500">
              <p>© 2025 PetitOs. Desarrollado para análisis de estructura ósea.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
