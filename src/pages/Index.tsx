
import { useState } from "react";
import { BirthDetails } from "@/utils/dateUtils";
import { AnalysisResult, performFullAnalysis, generateSynthesis } from "@/utils/esotericSystems";
import { getRecommendedDates } from "@/utils/dateUtils";
import BackgroundPattern from "@/components/BackgroundPattern";
import BirthDetailsForm from "@/components/BirthDetailsForm";
import EsotericAnalysisTab from "@/components/EsotericAnalysisTab";
import RecommendedDatesTable from "@/components/RecommendedDatesTable";

const Index = () => {
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [synthesis, setSynthesis] = useState<string>("");
  const [recommendedDates, setRecommendedDates] = useState<Array<{ date: string; reason: string }>>([]);

  const handleFormSubmit = (details: BirthDetails) => {
    setBirthDetails(details);
    
    // Perform analysis
    const results = performFullAnalysis(details);
    setAnalysisResults(results);
    
    // Generate synthesis
    const synthText = generateSynthesis(details, results);
    setSynthesis(synthText);
    
    // Get recommended dates
    const dates = getRecommendedDates(details);
    setRecommendedDates(dates);
  };

  return (
    <div className="min-h-screen flex flex-col items-center overflow-hidden relative">
      {/* Background elements */}
      <BackgroundPattern />
      
      {/* Header */}
      <header className="w-full pt-12 pb-6 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-accent-foreground">
          Esoteric Date Navigator
        </h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Multidisciplinary analysis combining Western and Eastern esoteric traditions
        </p>
      </header>
      
      {/* Main content */}
      <main className="flex-1 w-full max-w-5xl px-4 py-6 flex flex-col items-center gap-8 z-10">
        {!birthDetails ? (
          <BirthDetailsForm onSubmit={handleFormSubmit} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="md:col-span-3">
                <EsotericAnalysisTab 
                  results={analysisResults} 
                  synthesis={synthesis} 
                />
              </div>
              
              <div className="md:col-span-3">
                <RecommendedDatesTable dates={recommendedDates} />
              </div>
            </div>
            
            <button 
              onClick={() => {
                setBirthDetails(null);
                setAnalysisResults([]);
                setSynthesis("");
                setRecommendedDates([]);
              }}
              className="px-4 py-2 bg-muted/30 hover:bg-muted/50 rounded-md transition-colors duration-200"
            >
              Analyze Another Birth Chart
            </button>
          </>
        )}
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 mt-auto text-center text-sm text-muted-foreground z-10">
        <p>
          Combining Western Astrology, Jyotish, Mayan Calendar, Numerology, BaZi, 
          Feng Shui, Kabbalah, I-Ching, Tarot, and Tenseigaku
        </p>
      </footer>
    </div>
  );
};

export default Index;
