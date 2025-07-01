
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bone, Percent, User } from "lucide-react";
import { toast } from "sonner";
import MedicalReportGenerator from "./MedicalReportGenerator";
import html2canvas from 'html2canvas';

interface BoneDataGeneratorProps {
  referenceImage: File | null;
  description: string;
  onImageGenerated: (imageUrl: string) => void;
  isGenerating: boolean;
  setIsGenerating: (generating: boolean) => void;
}

const BoneDataGenerator = ({ 
  referenceImage, 
  description, 
  onImageGenerated, 
  isGenerating, 
  setIsGenerating 
}: BoneDataGeneratorProps) => {
  const [boneDensity, setBoneDensity] = useState(45);
  const [corticalThickness, setCorticalThickness] = useState(35);
  const [trabecularDensity, setTrabecularDensity] = useState(40);
  const [calciumLevel, setCalciumLevel] = useState(55);
  const [patientAge, setPatientAge] = useState("98");
  const [patientGender, setPatientGender] = useState("Mujer");
  const [boneType, setBoneType] = useState("femur");
  const [porosity, setPorosity] = useState(15.2);
  const [thickness, setThickness] = useState(1.5);
  const [zScore, setZScore] = useState(1.17);
  const [showReport, setShowReport] = useState(false);

  const generateBoneImage = async () => {
    if (!patientAge) {
      toast.error("Por favor ingresa la edad del paciente");
      return;
    }

    if (parseInt(patientAge) < 1 || parseInt(patientAge) > 120) {
      toast.error("Por favor ingresa una edad válida (1-120 años)");
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simular generación de imagen basada en datos
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowReport(true);
      
      // Generar el reporte médico como imagen
      setTimeout(async () => {
        const reportElement = document.getElementById('medical-report');
        if (reportElement) {
          const canvas = await html2canvas(reportElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
          });
          
          const imageUrl = canvas.toDataURL('image/png');
          onImageGenerated(imageUrl);
          toast.success("Reporte médico generado exitosamente");
        }
      }, 500);
      
    } catch (error) {
      console.error("Error generating medical report:", error);
      toast.error("Error al generar el reporte médico");
    } finally {
      setIsGenerating(false);
    }
  };

  const medicalData = {
    patientAge: parseInt(patientAge) || 98,
    patientGender,
    boneDensity,
    corticalThickness,
    trabecularDensity,
    calciumLevel,
    boneType,
    porosity,
    zScore,
    thickness
  };

  return (
    <>
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center space-x-2">
            <Bone className="h-5 w-5" />
            <span>Datos Médicos del Paciente</span>
          </CardTitle>
          <CardDescription className="text-orange-100">
            Ingresa los datos clínicos para generar el reporte médico
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Datos del paciente */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="patient-age" className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Edad (años)</span>
                </Label>
                <Input
                  id="patient-age"
                  type="number"
                  placeholder="Ej: 98"
                  value={patientAge}
                  onChange={(e) => setPatientAge(e.target.value)}
                  className="mt-1"
                  min="1"
                  max="120"
                />
              </div>

              <div>
                <Label htmlFor="patient-gender" className="text-sm font-medium text-gray-700">
                  Género
                </Label>
                <select
                  id="patient-gender"
                  value={patientGender}
                  onChange={(e) => setPatientGender(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="Mujer">Mujer</option>
                  <option value="Hombre">Hombre</option>
                </select>
              </div>

              <div>
                <Label htmlFor="bone-type" className="text-sm font-medium text-gray-700">
                  Tipo de hueso
                </Label>
                <select
                  id="bone-type"
                  value={boneType}
                  onChange={(e) => setBoneType(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="femur">Fémur</option>
                  <option value="tibia">Tibia</option>
                  <option value="radio">Radio</option>
                  <option value="vertebra">Vértebra</option>
                  <option value="humero">Húmero</option>
                </select>
              </div>
            </div>

            {/* Mediciones específicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="thickness" className="text-sm font-medium text-gray-700">
                  Espesor del hueso (mm)
                </Label>
                <Input
                  id="thickness"
                  type="number"
                  step="0.1"
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="mt-1"
                  min="0"
                  max="10"
                />
                <div className="text-xs text-gray-500 mt-1">Normal: 2-5 mm</div>
              </div>

              <div>
                <Label htmlFor="porosity" className="text-sm font-medium text-gray-700">
                  Porosidad (%)
                </Label>
                <Input
                  id="porosity"
                  type="number"
                  step="0.1"
                  value={porosity}
                  onChange={(e) => setPorosity(Number(e.target.value))}
                  className="mt-1"
                  min="0"
                  max="50"
                />
                <div className="text-xs text-gray-500 mt-1">Normal: 5-15%</div>
              </div>
            </div>

            <div>
              <Label htmlFor="z-score" className="text-sm font-medium text-gray-700">
                Z-Score (comparación por edad)
              </Label>
              <Input
                id="z-score"
                type="number"
                step="0.1"
                value={zScore}
                onChange={(e) => setZScore(Number(e.target.value))}
                className="mt-1"
                min="-5"
                max="5"
              />
              <div className="text-xs text-gray-500 mt-1">Normal: -1 a +1</div>
            </div>

            {/* Densidad ósea general */}
            <div>
              <Label htmlFor="bone-density" className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                <Percent className="h-4 w-4" />
                <span>Densidad Ósea General (%)</span>
              </Label>
              <Input
                id="bone-density"
                type="number"
                placeholder="Ej: 45"
                value={boneDensity}
                onChange={(e) => setBoneDensity(Number(e.target.value))}
                className="mt-2"
                min="0"
                max="100"
              />
              <div className="text-xs text-gray-500 mt-1">
                Rango normal: 50-80%
              </div>
            </div>

            {/* Grosor cortical */}
            <div>
              <Label htmlFor="cortical-thickness" className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                <Percent className="h-4 w-4" />
                <span>Grosor Cortical (%)</span>
              </Label>
              <Input
                id="cortical-thickness"
                type="number"
                placeholder="Ej: 35"
                value={corticalThickness}
                onChange={(e) => setCorticalThickness(Number(e.target.value))}
                className="mt-2"
                min="0"
                max="100"
              />
              <div className="text-xs text-gray-500 mt-1">
                Rango normal: 60-90%
              </div>
            </div>

            <Button
              onClick={generateBoneImage}
              disabled={isGenerating || !patientAge}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generando Reporte Médico...
                </>
              ) : (
                <>
                  <Bone className="h-4 w-4 mr-2" />
                  Generar Reporte Médico
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hidden Medical Report for Image Generation */}
      {showReport && (
        <div style={{ position: 'absolute', left: '-9999px', top: '0' }}>
          <div id="medical-report">
            <MedicalReportGenerator data={medicalData} />
          </div>
        </div>
      )}
    </>
  );
};

export default BoneDataGenerator;
