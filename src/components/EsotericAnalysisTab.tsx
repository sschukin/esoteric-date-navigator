
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnalysisResult } from "@/utils/esotericSystems";

interface EsotericAnalysisTabProps {
  results: AnalysisResult[];
  synthesis: string;
}

const EsotericAnalysisTab = ({ results, synthesis }: EsotericAnalysisTabProps) => {
  return (
    <Card className="w-full bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Multidisciplinary Analysis</CardTitle>
        <CardDescription>
          Insights from multiple esoteric systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="synthesis" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-4">
            <TabsTrigger value="synthesis">Synthesis</TabsTrigger>
            <TabsTrigger value="western">Western</TabsTrigger>
            <TabsTrigger value="eastern">Eastern</TabsTrigger>
            <TabsTrigger value="numerology">Numerology</TabsTrigger>
            <TabsTrigger value="calendar">Calendars</TabsTrigger>
            <TabsTrigger value="divination">Divination</TabsTrigger>
          </TabsList>
          
          <TabsContent value="synthesis" className="border rounded-md p-4 bg-muted/30">
            <h3 className="text-xl font-semibold mb-2">Core Pattern Synthesis</h3>
            <p className="text-muted-foreground">{synthesis}</p>
          </TabsContent>
          
          <TabsContent value="western">
            <ScrollArea className="h-[400px] border rounded-md p-4 bg-muted/30">
              {results
                .filter(r => ["Western Astrology", "Tarot-Astrology", "Kabbalah"].includes(r.system))
                .map((result, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{result.system}</h3>
                    <div className="text-lg font-medium mb-1">{result.summary}</div>
                    <p className="text-muted-foreground mb-2">{result.details}</p>
                    {result.elements && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {Object.entries(result.elements).map(([key, value]) => (
                          <div key={key} className="border rounded p-2 bg-background/30">
                            <span className="text-sm font-medium">{key}: </span>
                            <span className="text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="eastern">
            <ScrollArea className="h-[400px] border rounded-md p-4 bg-muted/30">
              {results
                .filter(r => ["Jyotish", "BaZi", "Feng Shui", "Tenseigaku"].includes(r.system))
                .map((result, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{result.system}</h3>
                    <div className="text-lg font-medium mb-1">{result.summary}</div>
                    <p className="text-muted-foreground mb-2">{result.details}</p>
                    {result.elements && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {Object.entries(result.elements).map(([key, value]) => (
                          <div key={key} className="border rounded p-2 bg-background/30">
                            <span className="text-sm font-medium">{key}: </span>
                            <span className="text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="numerology">
            <ScrollArea className="h-[400px] border rounded-md p-4 bg-muted/30">
              {results
                .filter(r => ["Numerology"].includes(r.system))
                .map((result, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{result.system}</h3>
                    <div className="text-lg font-medium mb-1">{result.summary}</div>
                    <p className="text-muted-foreground mb-2">{result.details}</p>
                    {result.elements && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {Object.entries(result.elements).map(([key, value]) => (
                          <div key={key} className="border rounded p-2 bg-background/30">
                            <span className="text-sm font-medium">{key}: </span>
                            <span className="text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="calendar">
            <ScrollArea className="h-[400px] border rounded-md p-4 bg-muted/30">
              {results
                .filter(r => ["Mayan Calendar"].includes(r.system))
                .map((result, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{result.system}</h3>
                    <div className="text-lg font-medium mb-1">{result.summary}</div>
                    <p className="text-muted-foreground mb-2">{result.details}</p>
                    {result.elements && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {Object.entries(result.elements).map(([key, value]) => (
                          <div key={key} className="border rounded p-2 bg-background/30">
                            <span className="text-sm font-medium">{key}: </span>
                            <span className="text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="divination">
            <ScrollArea className="h-[400px] border rounded-md p-4 bg-muted/30">
              {results
                .filter(r => ["I-Ching"].includes(r.system))
                .map((result, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{result.system}</h3>
                    <div className="text-lg font-medium mb-1">{result.summary}</div>
                    <p className="text-muted-foreground mb-2">{result.details}</p>
                    {result.elements && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {Object.entries(result.elements).map(([key, value]) => (
                          <div key={key} className="border rounded p-2 bg-background/30">
                            <span className="text-sm font-medium">{key}: </span>
                            <span className="text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EsotericAnalysisTab;
