
import React from 'react';
import { AlertTriangle, User, Calendar, Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface PreviousExam {
  date: string;
  tScore: number;
  boneDensity: number;
}

interface MedicalReportData {
  patientAge: number;
  patientGender: string;
  boneDensity: number;
  corticalThickness: number;
  trabecularDensity: number;
  calciumLevel: number;
  boneType: string;
  porosity: number;
  zScore: number;
  thickness: number;
  tScore?: number;
  previousExams?: PreviousExam[];
}

interface MedicalReportGeneratorProps {
  data: MedicalReportData;
  className?: string;
}

const MedicalReportGenerator = ({ data, className = "" }: MedicalReportGeneratorProps) => {
  const getRiskLevel = () => {
    const tScore = data.tScore || ((data.boneDensity - 75) / 12.5); // Approximate T-score calculation
    if (tScore >= -1.0) return { 
      level: 'Normal', 
      color: 'bg-green-500', 
      textColor: 'text-green-800',
      description: 'Densidad ósea normal'
    };
    if (tScore >= -2.5) return { 
      level: 'Osteopenia', 
      color: 'bg-yellow-500', 
      textColor: 'text-yellow-800',
      description: 'Densidad ósea baja (osteopenia)'
    };
    return { 
      level: 'Osteoporosis', 
      color: 'bg-red-500', 
      textColor: 'text-red-800',
      description: 'Osteoporosis establecida'
    };
  };

  const getComparisonTrend = () => {
    if (!data.previousExams || data.previousExams.length === 0) return null;
    
    const lastExam = data.previousExams[data.previousExams.length - 1];
    const currentTScore = data.tScore || ((data.boneDensity - 75) / 12.5);
    const difference = currentTScore - lastExam.tScore;
    
    if (Math.abs(difference) < 0.1) {
      return { trend: 'stable', icon: Minus, color: 'text-blue-600', text: 'Estable' };
    } else if (difference > 0) {
      return { trend: 'improving', icon: TrendingUp, color: 'text-green-600', text: 'Mejorando' };
    } else {
      return { trend: 'declining', icon: TrendingDown, color: 'text-red-600', text: 'Disminuyendo' };
    }
  };

  const risk = getRiskLevel();
  const trend = getComparisonTrend();
  const currentTScore = data.tScore || ((data.boneDensity - 75) / 12.5);
  
  // Population reference values (based on clinical data)
  const populationData = {
    averageTScore: -1.2,
    normalRange: { min: -1.0, max: 1.0 },
    osteopeniaRange: { min: -2.5, max: -1.0 },
    osteoporosisThreshold: -2.5
  };

  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto ${className}`}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="bg-red-500 rounded-full p-3 mr-4">
          <Activity className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Resultado de tu examen óseo</h1>
        </div>
      </div>

      {/* Patient Info */}
      <div className="flex items-center mb-6">
        <User className="h-5 w-5 text-gray-600 mr-2" />
        <span className="text-lg text-gray-700">
          Paciente: {data.patientGender === 'F' ? 'Femenino' : 'Masculino'}, {data.patientAge} años
        </span>
      </div>

      {/* Risk Alert */}
      <div className={`${risk.color} text-white p-4 rounded-lg mb-6 flex items-center`}>
        <AlertTriangle className="h-6 w-6 mr-3" />
        <div>
          <h2 className="text-xl font-bold">{risk.level}</h2>
          <p className="text-sm opacity-90">{risk.description}</p>
        </div>
      </div>

      {/* T-Score Scale with Population References */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Escala de Densidad Ósea (T-score)</h3>
        
        {/* Population average indicator */}
        <div className="text-sm text-gray-600 mb-2 flex justify-between items-center">
          <span>Tu resultado: {currentTScore.toFixed(1)}</span>
          <span>Promedio poblacional: {populationData.averageTScore}</span>
        </div>

        {/* Visual scale */}
        <div className="relative">
          <div className="h-8 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full relative overflow-hidden">
            {/* Zone markers */}
            <div className="absolute inset-0 flex">
              <div className="flex-1 border-r-2 border-white opacity-30"></div>
              <div className="flex-1 border-r-2 border-white opacity-30"></div>
              <div className="flex-1"></div>
            </div>
            
            {/* Patient position marker */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-black transform -translate-x-1/2"
              style={{ left: `${Math.max(5, Math.min(95, ((currentTScore + 3) / 4) * 100))}%` }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-black"></div>
            </div>
            
            {/* Population average marker */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-blue-700 transform -translate-x-1/2"
              style={{ left: `${Math.max(5, Math.min(95, ((populationData.averageTScore + 3) / 4) * 100))}%` }}
            ></div>
          </div>
          
          {/* Scale labels */}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <div className="text-center">
              <div className="font-medium">Normal</div>
              <div>≥ -1.0</div>
            </div>
            <div className="text-center">
              <div className="font-medium">Osteopenia</div>
              <div>-1.0 a -2.5</div>
            </div>
            <div className="text-center">
              <div className="font-medium">Osteoporosis</div>
              <div>≤ -2.5</div>
            </div>
          </div>
        </div>

        {/* Reference values */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Valores de Referencia Poblacional:</h4>
          <div className="text-sm text-blue-800 space-y-1">
            <div>• Promedio poblacional (mujeres postmenopáusicas): {populationData.averageTScore}</div>
            <div>• Rango normal: {populationData.normalRange.max} a {populationData.normalRange.min}</div>
            <div>• Zona de riesgo (osteopenia): {populationData.osteopeniaRange.max} a {populationData.osteopeniaRange.min}</div>
            <div>• Umbral de osteoporosis: ≤ {populationData.osteoporosisThreshold}</div>
          </div>
        </div>
      </div>

      {/* Comparison with Previous Exams */}
      {data.previousExams && data.previousExams.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Comparación con Exámenes Anteriores</h3>
          
          {trend && (
            <div className="flex items-center mb-3">
              <trend.icon className={`h-5 w-5 mr-2 ${trend.color}`} />
              <span className={`font-medium ${trend.color}`}>
                Tendencia: {trend.text}
              </span>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-3">
              {data.previousExams.map((exam, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{exam.date}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">T-score: {exam.tScore.toFixed(1)}</div>
                    <div className="text-xs text-gray-500">Densidad: {exam.boneDensity}%</div>
                  </div>
                </div>
              ))}
              
              {/* Current exam */}
              <div className="flex justify-between items-center py-2 bg-blue-100 rounded px-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Actual ({new Date().toLocaleDateString('es-ES')})</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-blue-800">T-score: {currentTScore.toFixed(1)}</div>
                  <div className="text-xs text-blue-600">Densidad: {data.boneDensity}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Indicadores Detallados:</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• T-score: {currentTScore.toFixed(1)} ({risk.level.toLowerCase()})</li>
          <li>• Z-score: {data.zScore > 0 ? '+' : ''}{data.zScore} (comparación con personas de tu edad)</li>
          <li>• Espesor del hueso: {data.thickness} mm ({data.thickness < 2 ? 'bajo' : data.thickness > 4 ? 'alto' : 'normal'})</li>
          <li>• Porosidad: {data.porosity}% ({data.porosity > 20 ? 'alto desgaste' : 'normal'})</li>
          <li>• Relación porosidad/espesor: {(data.porosity / data.thickness).toFixed(1)}</li>
        </ul>
      </div>

      {/* Explanation */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">¿Qué significa esto?</h4>
        <p className="text-gray-700 text-sm mb-2">
          {risk.level === 'Osteoporosis' 
            ? "Tu densidad ósea presenta osteoporosis. Es importante que sigas un plan médico específico para fortalecer tus huesos y prevenir fracturas."
            : risk.level === 'Osteopenia'
            ? "Tu densidad ósea muestra osteopenia (densidad baja). Se recomienda seguimiento médico y medidas preventivas para evitar que progrese a osteoporosis."
            : "Tu densidad ósea se encuentra en rangos normales. Mantén hábitos saludables para preservar la salud ósea."
          }
        </p>
        
        {trend && (
          <p className="text-gray-700 text-sm">
            <strong>Evolución:</strong> Comparado con tu último examen, tu densidad ósea está {trend.text.toLowerCase()}.
            {trend.trend === 'improving' && " ¡Continúa con el tratamiento actual!"}
            {trend.trend === 'declining' && " Es recomendable revisar tu plan de tratamiento con tu médico."}
            {trend.trend === 'stable' && " Mantén el seguimiento regular."}
          </p>
        )}
      </div>

      {/* Generated by PetitOs */}
      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500">
          Generado por PetitOs - Análisis de Densidad Ósea
        </p>
        <p className="text-xs text-gray-400">
          {new Date().toLocaleDateString('es-ES')}
        </p>
      </div>
    </div>
  );
};

export default MedicalReportGenerator;
